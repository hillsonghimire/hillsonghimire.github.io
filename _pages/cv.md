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
.tight-list li { margin-bottom: 0.25rem; }
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
  width: 18px;
  height: 18px;
  object-fit: contain;
  vertical-align: text-bottom;
  margin-right: 0.35rem;
}
.exp-header {
  position: relative;
  padding-right: 72px;
}
.exp-header .exp-logo {
  width: 60px;
  height: 60px;
  margin: 0;
  position: absolute;
  top: calc(0.1rem - 12pt);
  right: 0;
  object-fit: contain;
  z-index: 1;
}
.exp-header .exp-header-text {
  min-width: 0;
}
.exp-header .tight-block {
  margin-top: 0;
  margin-bottom: 0.1rem;
}
.exp-header .tight-meta {
  margin-top: 0;
  margin-bottom: 0;
}
</style>


Education
======
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
  <img class="exp-logo" src="{{ '/images/logos/sdsu-logo.svg' | relative_url }}" alt="SDSU logo">
  <div class="exp-header-text">
    <h3 class="tight-block">Graduate Research Assistant - Remote Sensing & Digital Agriculture · Aug 2024 - Present</h3>
    <div class="tight-meta">
      South Dakota State University (SDSU), Brookings, SD
    </div>
  </div>
</div>

<p class="tight-desc">
I build production-grade Earth observation and computer vision systems for high-throughput wheat phenotyping, turning UAV, close-range, and satellite imagery into validated traits used directly in breeding workflows.
</p>

<ul class="tight-list">
<li>Built and deployed a cloud-native phenotyping platform (wheatai.net) on GCP, converting multi-source imagery into quantitative phenotypes; utility patent under consideration.</li>
<li>Developed satellite-based wheat tiller density mapping using HLS via the GEE Python API, benchmarked against field measurements for the USDA NCR-SARE Wheat-TDM project.</li>
<li>Trained vision models in PyTorch (YOLO-OBB, RT-DETR, SAM) robust to variable illumination and canopy variability.</li>
<li>Designed high-throughput RGB/multispectral pipelines with QA/QC; two manuscripts under review.</li>
<li>Engineered Dockerized PyTorch inference on GCP for asynchronous ingestion and scalable delivery.</li>
<li>Led validation with breeders, translating outputs into operational decisions and funding proposals.
</li>
</ul>

<p class="tight-block">
Tech stack: PyTorch · YOLO-OBB · RT-DETR · SAM · GEE · HLS · GCP · Docker · UAV phenotyping
</p>


<div class="exp-header">
  <img class="exp-logo" src="{{ '/images/logos/ait-globe.png' | relative_url }}" alt="AIT logo">
  <div class="exp-header-text">
    <h3 class="tight-block">Research Associate - Remote Sensing Analyst · Feb 2022 – Aug 2024</h3>
    <div class="tight-meta">
      Geoinformatics Center, Asian Institute of Technology, Bangkok, Thailand
    </div>
  </div>
</div>

<p class="tight-desc">
Led large-scale Earth observation analytics and operational remote sensing workflows supporting vegetation monitoring, disaster response, and land-productivity assessment across multiple countries.
</p>

<ul class="tight-list">
<li>Led country-scale EO analytics using Landsat and Sentinel-1/2 to quantify vegetation dynamics and surface water trends.</li>
<li>Built production SAR and optical processing pipelines, reducing processing latency from ~1 week to under 24 hours.</li>
<li>Authored reproducible Python-based multi-temporal optical and SAR workflows with QA/QC for rapid disaster-response deployment.</li>
<li>Designed and maintained PostgreSQL/PostGIS geospatial data infrastructure and ETL pipelines with clean metadata and traceability.</li>
<li>Delivered Google Earth Engine training for FAO-affiliated technical staff to operationalize vegetation and land-productivity monitoring.</li>
<li>Executed GEE-based vegetation and groundwater analytics for FAO (Afghanistan) and SAR post-disaster reconstruction monitoring for ADB.</li>
</ul>

<hr style="border: none; height: 2px; background-color: #cfcfcf;">

Internships
======
<div class="exp-header">
  <img class="exp-logo" src="{{ '/images/logos/ait-globe.png' | relative_url }}" alt="AIT logo">
  <div class="exp-header-text">
    <h3 class="tight-block">GIS Developer Intern · May 2021 – Sept 2021</h3>
    <div class="tight-meta">
      Geoinformatics Center, Asian Institute of Technology, Bangkok, Thailand
    </div>
  </div>
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
  <img class="exp-logo" src="{{ '/images/logos/skytruth-logo-vdbg-accents.png' | relative_url }}" alt="SkyTruth logo">
  <div class="exp-header-text">
    <h3 class="tight-block">Geospatial Intern (Remote) · Sept 2020 - Feb 2021</h3>
    <div class="tight-meta">
      SkyTruth, Shepherdstown, WV, USA
    </div>
  </div>
</div>

<p class="tight-desc">
Applied deep learning and multi-sensor satellite analytics for environmental monitoring and investigative reporting.
</p>

<ul class="tight-list">
<li>Developed U-Net segmentation workflows in Google Earth Engine using Sentinel-2 imagery for road detection and surface-change analysis.</li>
<li>Conducted SAR-based detection of illegal oil dumping using rapid screening pipelines in GEE.</li>
<li>Performed PlanetScope-based change analysis for environmental monitoring, producing decision-ready maps and concise technical reports.</li>
</ul>

<hr style="border: none; height: 2px; background-color: #cfcfcf;">

Skills
======
* Skill 1
* Skill 2
  * Sub-skill 2.1
  * Sub-skill 2.2
  * Sub-skill 2.3
* Skill 3

<hr style="border: none; height: 2px; background-color: #cfcfcf;">

Publications
======
  <ul>{% for post in site.publications reversed %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul>

<hr style="border: none; height: 2px; background-color: #cfcfcf;">

Talks
======
  {% assign recent_presentations = site.talks | sort: "date" | reverse | slice: 0, 5 %}
  <ul>
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

Service and leadership
======
* Currently signed in to 43 different slack teams
