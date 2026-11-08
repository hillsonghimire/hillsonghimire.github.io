---
layout: minimal
permalink: /
redirect_from: 
  - /about/
  - /about.html
---

<section class="intro">
  <div class="intro-text">
    <h1>Hillson Ghimire</h1>
    <p>I’m Hillson Ghimire, a geospatial data scientist specializing in remote sensing and machine learning. My work spans soil moisture and drought modeling, satellite-based disaster monitoring, and computer vision for agriculture.</p>
    <p>I’m currently a PhD student at <a href="https://www.rice.edu/">Rice University</a>, advised by <a href="https://waterai.earth/">Noemi Vergopolan</a>. My research explores how satellite observations, land surface models, and machine learning can be combined to estimate and predict soil moisture at high spatial resolution and better understand how agricultural drought develops.</p>
    <p>Before Rice, I completed my MS at South Dakota State University, where I worked with <a href="https://www.sdstate.edu/directory/maitiniyazi-maimaitijiang">Maitiniyazi Maimaitijiang</a>. I developed deep learning models for wheat phenotyping and co-developed <a href="https://wheatai.net/">WheatAI</a>, a web platform that helps plant breeders measure crop traits from imagery.</p>
    <p>I was a research associate at the Geoinformatics Center at the Asian Institute of Technology, where I used satellite imagery to monitor natural hazards and their impacts for the Sentinel Asia initiative.</p>
    <p class="intro-links"><a href="mailto:hg77@rice.edu">Email</a> &nbsp;/&nbsp; <a href="{{ '/cv/' | relative_url }}">CV</a> &nbsp;/&nbsp; <a href="https://scholar.google.com/citations?user=gm6EoPoAAAAJ&amp;hl=en&amp;oi=ao">Google Scholar</a> &nbsp;/&nbsp; <a href="https://github.com/hillsonghimire">GitHub</a> &nbsp;/&nbsp; <a href="https://www.linkedin.com/in/hillsonghimire">LinkedIn</a></p>
  </div>
  <div class="intro-photo"><img src="{{ '/images/hillson-ghimire.jpg' | relative_url }}" alt="Hillson Ghimire"></div>
</section>

<h2 id="news">Recent News</h2>
<ul class="news">
  <li><span class="news-date">Aug 2026</span><span>Started my PhD in Earth, Environmental and Planetary Sciences at Rice University.</span></li>
  <li><span class="news-date">Aug 2026</span><span>Awarded the Ken Kennedy Institute Computational Science and Engineering Recruiting Fellowship ($15,000) at Rice University.</span></li>
  <li><span class="news-date">Jul 2026</span><span>Completed my MS at South Dakota State University. <a class="title-link" href="https://openprairie.sdstate.edu/etd2/2136">thesis</a></span></li>
  <li><span class="news-date">Jun 2026</span><span>Our wheat spike and spikelet detection paper was published in <i>Scientific Reports</i>. <a class="title-link" href="https://doi.org/10.1038/s41598-026-55761-w">paper</a></span></li>
  <li><span class="news-date">Jun 2026</span><span>Served as Teaching Assistant and guest lecturer for Remote Sensing for Disaster Response at MIT Lincoln Laboratory, through August.</span></li>
  <li><span class="news-date">Jan 2026</span><span>Released <a href="https://arxiv.org/abs/2601.08863">WheatAI v1.0</a>.</span></li>
  <li><span class="news-date">Jan 2026</span><span>Received the Dr. Fritz Gritzner Outstanding Graduate Geography Student Award at South Dakota State University.</span></li>
  <li><span class="news-date">Oct 2025</span><span>Received a USDA North Central SARE Graduate Student Grant ($19,999) to develop <a href="https://projects.sare.org/sare_project/gnc25-412/">Wheat-TDM</a>, a wheat tiller density mapping tool using multiscale remote sensing.</span></li>
</ul>

<h2 id="publications">Publications</h2>

{% for pub in site.data.publications %}
<div class="pub">
  <div class="pub-thumb"><img src="{{ pub.image | prepend: '/images/publications/' | relative_url }}" alt="{{ pub.alt }}" loading="lazy">{% if pub.credit != '' %}<div class="thumb-credit">{{ pub.credit }}</div>{% endif %}</div>
  <div class="pub-body">
    {% include publication-citation.html pub=pub %}
    <div class="pub-summary">{{ pub.summary }}</div>
  </div>
</div>
{% endfor %}

<h2 id="presentations">Presentations</h2>

{% include presentations-list.html visible=5 %}
