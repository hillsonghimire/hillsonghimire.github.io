---
layout: archive
# title: "Resume"
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
---

{% include base_path %}

<style>
/* existing */
.tight-block { margin-bottom: 0.4rem; }
.tight-meta { margin-top: 0; margin-bottom: 0.4rem; font-weight: 600; }
.tight-desc { margin-top: 0; margin-bottom: 0.5rem; }
.tight-list { margin-top: 0.2rem; margin-bottom: 1rem; padding-left: 2rem; }
.tight-list li { margin-bottom: 0.15rem; font-size: 0.95rem; line-height: 1.35; }
/* compact list style for Talks */
.talks-list { margin-top: 0.4rem; margin-bottom: 1rem; padding-left: 1.8rem; }
.talks-list li { margin-bottom: 0.12rem; font-size: 0.95rem; line-height: 1.35; }
/* Indent role details (description + bullets + tech stack) under each title block */
p.tight-desc,
ul.tight-list,
p.tight-block {
  margin-left: 0;
}
p.tight-block {
  margin-bottom: 1rem;
}
/* NEW: remove extra gap after section titles and before first job */
.page__content h2 { margin: 0.4em 0 0.05rem; padding-top: 0.05rem; }
.page__content h2 + h3.tight-block { margin-top: 0.02rem; }
/* NEW: keep spacing consistent between roles */
.page__content h3.tight-block { margin-top: 0.05rem; }
.page__content h3.tight-block:first-of-type { margin-top: 0.05rem; }
.exp-logo {
  width: 52px;
  height: 52px;
  object-fit: contain;
}
.exp-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 0.75rem;
  margin-bottom: 0.35rem;
}
.exp-header .exp-header-text { flex: 1 1 auto; min-width: 0; }
.exp-header .tight-block { margin-top: 0; margin-bottom: 0.1rem; }
.exp-header .tight-meta { margin-top: 0; margin-bottom: 0; }
.exp-meta-right {
  flex: 0 0 auto;
  text-align: right;
  font-size: 0.95rem;
  line-height: 1.25;
  min-width: 140px;
}
.exp-meta-right .exp-dates { font-weight: 600; }
.exp-meta-right .exp-location { color: var(--global-muted-text-color, #666); }
</style>


Education
======
**Ph.D. in Earth, Environmental and Planetary Sciences (in progress)**  
Rice University, Houston, TX | 2026 - Present | Advisor: Noemi Vergopolan  

**MSc in Geography (GIS Specialization) - 4.0/4.0 GPA**  
South Dakota State University, Brookings, SD | 2024 - 2026 | Graduate Research Assistant  
<small style="display:block; line-height:1.35; margin:0; font-size: 0.85rem;">Core Areas: Machine Learning & Deep Learning for Remote Sensing, High Performance Computing, Agricultural & UAS Remote Sensing, Quantitative Remote Sensing, Enterprise Data Modeling</small>

**B.E. in Geomatics Engineering**  
Institute of Engineering, Tribhuvan University, Pokhara, Nepal | 2016–2020  
<small style="display:block; line-height:1.35; margin:0; font-size: 0.85rem;">Thesis: Automated Road Extraction from Sentinel-2 Imagery using CNN<br>Core Areas: GIS, Remote Sensing, Photogrammetry, Digital Image Processing, Radar & LiDAR, GPS, Survey Techniques, Python for Geospatial Applications</small>

<hr style="border: none; height: 2px; background-color: #cfcfcf;">

Work Experience
======
<div class="exp-header">
  <div class="exp-header-text">
    <h3 class="tight-block">Teaching Assistant - Remote Sensing for Disaster Response</h3>
    <div class="tight-meta">MIT Lincoln Laboratory</div>
  </div>
  <div class="exp-meta-right">
    <div class="exp-dates">Jun 2026 – Aug 2026</div>
    <div class="exp-location">Remote</div>
  </div>
</div>

<ul class="tight-list">
<li>Developed technical course materials, Jupyter notebooks, and hands-on geospatial programming exercises.</li>
<li>Mentored participants in satellite data analysis, computational workflows, and applied problem-solving.</li>
<li>Delivered a guest lecture on satellite-based hailstorm damage assessment using PlanetScope imagery.</li>
</ul>

<div class="exp-header">
  <div class="exp-header-text">
    <h3 class="tight-block">Graduate Research Assistant - Remote Sensing & Digital Agriculture</h3>
    <div class="tight-meta">South Dakota State University (SDSU)</div>
  </div>
  <div class="exp-meta-right">
    <div class="exp-dates">Aug 2024 – May 2026</div>
    <div class="exp-location">Brookings, SD</div>
  </div>
  <img class="exp-logo" src="{{ '/images/logos/sdsu-logo.svg' | relative_url }}" alt="SDSU logo">
</div>

<p class="tight-desc">
Developed computer vision methods and a wheat phenotyping platform that convert UAV, close-range, and satellite imagery into traits for breeding programs.
</p>

<ul class="tight-list">
      <li>
      Built and deployed a cloud-native phenotyping platform 
      <a href="https://wheatai.net/" target="_blank" rel="noopener">
      WheatAI.net
      </a> 
      , converting multi-source imagery into quantitative phenotypes such as wheat spike, spikelet, and kernel counts.
      </li>
      <li>
      Deployed satellite-based wheat tiller density mapping using Harmonized Landsat Sentinel via the GEE Python API, benchmarked against field measurements for the 
      <a href="https://projects.sare.org/sare_project/gnc25-412/" target="_blank" rel="noopener">
      NCR-SARE Wheat-TDM
      </a> project.
      </li>
      <li>Developed a sub-millimeter precision wheat <b>kernel morphology extraction</b> pipeline (length, width, area) using computer vision with ArUco fiducial-based geometric calibration, enabling high-throughput quantitative genetics selection.</li>
      <li>
      Engineered end-to-end field pipelines for Fusarium Head Blight (FHB) and Fusarium Damaged Kernel (FDK) <b>disease severity assessment</b> on close-range imagery.
      </li>
      <li>Designed and trained deep learning models for automated <b>stomatal trait analysis</b> from microscope imagery, producing scalable stomatal and pore density and morphology summaries to accelerate phenotyping and reduce manual measurement effort.</li>
      <li>Led <b>UAV flight operations</b> and field data acquisition, overseeing mission planning, sensor configuration (RGB & multispectral), and end-to-end <b>photogrammetric</b> processing. Produced high-resolution orthomosaics, DSM/DTM surface models, and extracted agronomic indicators including crop vigor indices, nutrient stress proxies, and yield-related metrics to support data-driven decision making.</li>
</ul>

<p class="tight-block">
Tech stack: PyTorch · Object Detection (YOLO-OBB, RT-DETR, SAM) · HLS · GCP · Docker · UAV phenotyping
</p>

<div class="exp-header">
  <div class="exp-header-text">
    <h3 class="tight-block">Research Associate - Remote Sensing Analyst</h3>
    <div class="tight-meta">Geoinformatics Center, Asian Institute of Technology</div>
  </div>
  <div class="exp-meta-right">
    <div class="exp-dates">Feb 2022 – Aug 2024</div>
    <div class="exp-location">Bangkok, Thailand</div>
  </div>
  <img class="exp-logo" src="{{ '/images/logos/ait-globe.png' | relative_url }}" alt="AIT logo">
</div>

<p class="tight-desc">
Led large-scale Earth observation analytics and operational remote sensing workflows supporting vegetation monitoring, disaster response, and land-productivity assessment across multiple countries.
</p>

<ul class="tight-list">
<li>Applied large-scale <b>spatiotemporal analytics</b> in Google Earth Engine (GEE) on multi-decadal satellite archives (Landsat, Sentinel, GRACE; 1975–2024) to quantify vegetation productivity, biomass dynamics, and land condition trends, with in-situ validation for operational decision support.</li>
<li>Built automated remote sensing pipelines for SAR-based surface water change and <b>flood mapping (Sentinel-1, ALOS-2)</b>, reducing processing latency from ~1 week to less than 24 hours and enabling near-real-time environmental monitoring.</li>
<li>Designed and maintained scalable geospatial data infrastructure integrating hundreds of heterogeneous datasets, ensuring data consistency, reproducibility, and quality control across regions and time.</li>
<li>Designed and maintained PostgreSQL/PostGIS geospatial data infrastructure and ETL pipelines with clean metadata and traceability.</li>
</ul>

<p class="tight-block">
Tech stack: ArcGIS/QGIS · Linux · Google Earth Engine · PostgreSQL · Geoserver · Google Cloud
</p>

<hr style="border: none; height: 2px; background-color: #cfcfcf;">

Internships
======
<div class="exp-header">
  <div class="exp-header-text">
    <h3 class="tight-block">GIS Developer Intern</h3>
    <div class="tight-meta">Geoinformatics Center, Asian Institute of Technology</div>
  </div>
  <div class="exp-meta-right">
    <div class="exp-dates">May 2021 – Sept 2021</div>
    <div class="exp-location">Bangkok, Thailand</div>
  </div>
  <img class="exp-logo" src="{{ '/images/logos/ait-globe.png' | relative_url }}" alt="AIT logo">
</div>

<p class="tight-desc">
Supported operational disaster-response and environmental monitoring systems through applied machine learning and scalable geospatial workflows.
</p>

<ul class="tight-list">
<li>Built and deployed a U-Net–based SAR flood-mapping workflow, delivering validated flood-extent layers into operational GIS platforms.</li>
<li>Integrated model outputs into production disaster-response systems supporting Sentinel-Asia initiatives.</li>
<li>Developed automated geospatial ETL and validation routines ensuring CRS consistency and reproducible outputs.</li>
</ul>


<div class="exp-header">
  <div class="exp-header-text">
    <h3 class="tight-block">Geospatial Intern (Remote)</h3>
    <div class="tight-meta">SkyTruth</div>
  </div>
  <div class="exp-meta-right">
    <div class="exp-dates">Sept 2020 – Feb 2021</div>
    <div class="exp-location">Shepherdstown, WV, USA</div>
  </div>
  <img class="exp-logo" src="{{ '/images/logos/skytruth-logo-vdbg-accents.png' | relative_url }}" alt="SkyTruth logo">
</div>

<p class="tight-desc">
Applied deep learning and multi-sensor satellite analytics for environmental monitoring and investigative reporting.
</p>

<ul class="tight-list">
<li>Developed U-Net segmentation workflows in Google Earth Engine using Sentinel-2 imagery for road detection and surface-change analysis.</li>
<li>Conducted SAR-based detection of illegal oil dumping using rapid screening pipelines in GEE.</li>
<li>Performed PlanetScope-based change analysis for environmental monitoring, producing maps and technical analyses for public reporting.</li>
</ul>

<!-- <hr style="border: none; height: 2px; background-color: #cfcfcf;"> -->

<!-- Skills
======
* Skill 1
* Skill 2
  * Sub-skill 2.1
  * Sub-skill 2.2
  * Sub-skill 2.3
* Skill 3 -->

<!-- <hr style="border: none; height: 2px; background-color: #cfcfcf;">

Publications
======
  <ul>{% for post in site.publications reversed %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul> -->

<hr style="border: none; height: 2px; background-color: #cfcfcf;">

Honors and Awards
======
* Ken Kennedy Institute Computational Science and Engineering Recruiting Fellowship, Rice University, 2026
* Dr. Fritz Gritzner Outstanding Graduate Geography Student Award, South Dakota State University, 2026

<hr style="border: none; height: 2px; background-color: #cfcfcf;">

Publications
======
See the [full list of publications]({{ '/#publications' | relative_url }}).

<hr style="border: none; height: 2px; background-color: #cfcfcf;">

Talks
======
  {% assign recent_presentations = site.talks | sort: "date" | reverse | slice: 0, 5 %}
  <ul class="talks-list">
    {% for post in recent_presentations %}
      <li>
        {{ post.title }}
        {% if post.venue or post.location %}
          {% if post.venue %} — {{ post.venue }}{% endif %}
          {% if post.location %}, {{ post.location }}{% endif %}
        {% endif %}
      </li>
    {% endfor %}
  </ul>
  <p><a href="{{ '/presentations/' | relative_url }}">See more →</a></p>
  
<!-- Teaching
======
  <ul>{% for post in site.teaching reversed %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul>
   -->

<hr style="border: none; height: 2px; background-color: #cfcfcf;">

<!-- Service and leadership
======
* Currently signed in to 43 different slack teams -->
