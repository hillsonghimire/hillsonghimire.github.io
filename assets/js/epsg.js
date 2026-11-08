// Draws a faint generated topographic contour map behind every page.
// Easter egg: clicking the EPSG:4326 footer link pops confetti and balloons.
(function () {
  var link = document.querySelector('.epsg');

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var CONFETTI_COLORS = ['#0066cc', '#e8590c', '#2f9e44', '#f59f00', '#d6336c', '#7048e8'];
  var BALLOON_COLORS = ['#ff6b6b', '#4dabf7', '#ffd43b', '#69db7c', '#da77f2'];

  // ---------- Confetti + balloons ----------
  function party(x, y) {
    if (reduceMotion) return;
    var canvas = document.createElement('canvas');
    canvas.className = 'epsg-party';
    document.body.appendChild(canvas);
    var dpr = window.devicePixelRatio || 1;
    var w = window.innerWidth, h = window.innerHeight;
    canvas.width = w * dpr; canvas.height = h * dpr;
    var ctx = canvas.getContext('2d');
    ctx.scale(dpr, dpr);

    var pieces = [];
    for (var i = 0; i < 140; i++) {
      // Shoot up and to the left, like a party popper fired from the corner link.
      var angle = -Math.PI / 2 - Math.random() * Math.PI * 0.55 + 0.15;
      var speed = 7 + Math.random() * 11;
      pieces.push({
        x: x, y: y,
        vx: Math.cos(angle) * speed, vy: Math.sin(angle) * speed,
        w: 5 + Math.random() * 6, h: 3 + Math.random() * 4,
        rot: Math.random() * Math.PI, vr: (Math.random() - 0.5) * 0.4,
        color: CONFETTI_COLORS[i % CONFETTI_COLORS.length]
      });
    }

    var balloons = [];
    for (var b = 0; b < 6; b++) {
      balloons.push({
        x: w * (0.1 + Math.random() * 0.8), y: h + 60 + Math.random() * 200,
        r: 18 + Math.random() * 10, vy: 2 + Math.random() * 1.6,
        phase: Math.random() * Math.PI * 2,
        color: BALLOON_COLORS[b % BALLOON_COLORS.length]
      });
    }

    var start = performance.now();
    function frame(now) {
      var t = now - start;
      ctx.clearRect(0, 0, w, h);

      pieces.forEach(function (p) {
        p.vy += 0.28; p.vx *= 0.985; p.vy *= 0.985;
        p.x += p.vx; p.y += p.vy; p.rot += p.vr;
        ctx.save();
        ctx.translate(p.x, p.y); ctx.rotate(p.rot);
        ctx.fillStyle = p.color;
        ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h * Math.abs(Math.cos(p.rot * 2)));
        ctx.restore();
      });

      balloons.forEach(function (bl) {
        bl.y -= bl.vy;
        var bx = bl.x + Math.sin(t / 500 + bl.phase) * 12;
        ctx.strokeStyle = 'rgba(0,0,0,0.25)'; ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(bx, bl.y + bl.r * 1.2);
        ctx.quadraticCurveTo(bx - 6, bl.y + bl.r * 2, bx + 2, bl.y + bl.r * 3);
        ctx.stroke();
        ctx.fillStyle = bl.color;
        ctx.beginPath();
        ctx.ellipse(bx, bl.y, bl.r, bl.r * 1.2, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.beginPath();
        ctx.moveTo(bx - 4, bl.y + bl.r * 1.25); ctx.lineTo(bx + 4, bl.y + bl.r * 1.25);
        ctx.lineTo(bx, bl.y + bl.r * 1.15); ctx.fill();
        ctx.fillStyle = 'rgba(255,255,255,0.45)';
        ctx.beginPath();
        ctx.ellipse(bx - bl.r * 0.35, bl.y - bl.r * 0.45, bl.r * 0.18, bl.r * 0.3, -0.5, 0, Math.PI * 2);
        ctx.fill();
      });

      if (t < 5000) requestAnimationFrame(frame);
      else canvas.remove();
    }
    requestAnimationFrame(frame);
  }

  // ---------- Topographic contours ----------
  function makeNoise(seed) {
    var perm = [];
    for (var i = 0; i < 256; i++) perm[i] = i;
    for (var j = 255; j > 0; j--) {
      seed = (seed * 16807) % 2147483647;
      var k = seed % (j + 1), tmp = perm[j]; perm[j] = perm[k]; perm[k] = tmp;
    }
    var vals = perm.map(function (p) { return p / 255; });
    function hash(x, y) { return vals[(perm[x & 255] + y) & 255]; }
    function smooth(t) { return t * t * (3 - 2 * t); }
    function value(x, y) {
      var xi = Math.floor(x), yi = Math.floor(y);
      var u = smooth(x - xi), v = smooth(y - yi);
      var a = hash(xi, yi), b = hash(xi + 1, yi), c = hash(xi, yi + 1), d = hash(xi + 1, yi + 1);
      return a + (b - a) * u + (c - a) * v + (a - b - c + d) * u * v;
    }
    return function (x, y) {
      var sum = 0, amp = 1, freq = 1, norm = 0;
      for (var o = 0; o < 4; o++) {
        sum += value(x * freq, y * freq) * amp;
        norm += amp; amp *= 0.5; freq *= 2;
      }
      return sum / norm;
    };
  }

  // The terrain covers the whole document, so the lines scroll with the content
  // like a printed map. It is built once as Path2D strips; each frame only the
  // strips inside the viewport are stroked onto a viewport-sized canvas.
  var topo = null, ctx = null, seed = 1 + Math.floor(Math.random() * 2147483646);
  var STEP = 8, SCALE = 1 / 260, STRIP_ROWS = 64;
  var THIN = 'rgba(150, 105, 60, 0.052)', INDEX = 'rgba(150, 105, 60, 0.104)';
  var strips = [], builtW = 0, builtH = 0, pending = false;

  function docHeight() {
    return Math.max(document.documentElement.scrollHeight, window.innerHeight);
  }

  function build() {
    var w = window.innerWidth, H = docHeight();
    builtW = w; builtH = H;
    var noise = makeNoise(seed);
    var cols = Math.ceil(w / STEP) + 1, rows = Math.ceil(H / STEP) + 1;
    var grid = new Float32Array(cols * rows);
    for (var gy = 0; gy < rows; gy++)
      for (var gx = 0; gx < cols; gx++)
        grid[gy * cols + gx] = noise(gx * STEP * SCALE + 10, gy * STEP * SCALE + 10);

    strips = [];
    for (var y0 = 0; y0 < rows - 1; y0 += STRIP_ROWS) {
      var y1 = Math.min(y0 + STRIP_ROWS, rows - 1);
      var thin = new Path2D(), index = new Path2D(), n = 0;
      for (var level = 0.1; level < 0.9; level += 0.025, n++) {
        // every fifth line is a heavier index contour
        marchingSquares(n % 5 === 0 ? index : thin, grid, cols, y0, y1, STEP, level);
      }
      strips.push({ top: y0 * STEP, bottom: y1 * STEP, thin: thin, index: index });
    }
  }

  function render() {
    pending = false;
    var dpr = window.devicePixelRatio || 1;
    var w = window.innerWidth, h = window.innerHeight;
    if (topo.width !== Math.round(w * dpr) || topo.height !== Math.round(h * dpr)) {
      topo.width = Math.round(w * dpr); topo.height = Math.round(h * dpr);
    }
    var sy = window.scrollY;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, w, h);
    ctx.translate(0, -sy);
    strips.forEach(function (st) {
      if (st.bottom < sy || st.top > sy + h) return;
      ctx.strokeStyle = THIN; ctx.lineWidth = 0.8; ctx.stroke(st.thin);
      ctx.strokeStyle = INDEX; ctx.lineWidth = 1.3; ctx.stroke(st.index);
    });
  }

  function schedule() {
    if (!pending) { pending = true; requestAnimationFrame(render); }
  }

  // Trace iso-lines for one level over grid rows y0..y1 (marching squares, linear interpolation).
  function marchingSquares(path, g, cols, y0, y1, s, lv) {
    function lerp(a, b) { return (lv - a) / (b - a); }
    for (var y = y0; y < y1; y++) {
      for (var x = 0; x < cols - 1; x++) {
        var a = g[y * cols + x], b = g[y * cols + x + 1];
        var c = g[(y + 1) * cols + x + 1], d = g[(y + 1) * cols + x];
        var code = (a > lv ? 8 : 0) | (b > lv ? 4 : 0) | (c > lv ? 2 : 0) | (d > lv ? 1 : 0);
        if (code === 0 || code === 15) continue;
        var px = x * s, py = y * s;
        var top = [px + s * lerp(a, b), py];
        var right = [px + s, py + s * lerp(b, c)];
        var bottom = [px + s * lerp(d, c), py + s];
        var left = [px, py + s * lerp(a, d)];
        var segs;
        switch (code) {
          case 1: case 14: segs = [[left, bottom]]; break;
          case 2: case 13: segs = [[bottom, right]]; break;
          case 3: case 12: segs = [[left, right]]; break;
          case 4: case 11: segs = [[top, right]]; break;
          case 5: segs = [[left, top], [bottom, right]]; break;
          case 6: case 9: segs = [[top, bottom]]; break;
          case 7: case 8: segs = [[left, top]]; break;
          case 10: segs = [[left, bottom], [top, right]]; break;
        }
        segs.forEach(function (sg) { path.moveTo(sg[0][0], sg[0][1]); path.lineTo(sg[1][0], sg[1][1]); });
      }
    }
  }

  function showTopo() {
    topo = document.createElement('canvas');
    topo.className = 'epsg-topo';
    topo.setAttribute('aria-hidden', 'true');
    document.body.insertBefore(topo, document.body.firstChild);
    ctx = topo.getContext('2d');
    build();
    render();
    requestAnimationFrame(function () { topo.classList.add('on'); });

    window.addEventListener('scroll', schedule, { passive: true });
    var timer;
    function rebuildIfNeeded() {
      clearTimeout(timer);
      timer = setTimeout(function () {
        // Rebuild when the width changes or the page grows (e.g. "show more" expands).
        if (window.innerWidth !== builtW || docHeight() > builtH) build();
        schedule();
      }, 150);
    }
    window.addEventListener('resize', rebuildIfNeeded);
    if (window.ResizeObserver) new ResizeObserver(rebuildIfNeeded).observe(document.body);
  }

  showTopo();

  if (link) {
    link.addEventListener('click', function (e) {
      // The link still opens the resume in a new tab; the confetti plays on this page.
      var r = link.getBoundingClientRect();
      party(e.clientX || r.left + r.width / 2, e.clientY || r.top);
    });
  }
})();
