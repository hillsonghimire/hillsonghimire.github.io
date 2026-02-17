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
.tight-meta { margin-top: -0.4rem; margin-bottom: 0.4rem; font-weight: 600; }
.tight-desc { margin-top: -0.2rem; margin-bottom: 0.5rem; }
.tight-list { margin-top: 0.2rem; margin-bottom: 0.2rem; padding-left: 2rem; }
.tight-list li { margin-bottom: 0.25rem; }

/* NEW: remove extra gap after section titles and before first job */
.page__content h2 { margin-bottom: 0.35rem; }
.page__content h2 + h3.tight-block { margin-top: 0.15rem; }

/* NEW: keep spacing consistent between roles */
.page__content h3.tight-block { margin-top: 0.9rem; }
.page__content h3.tight-block:first-of-type { margin-top: 0.15rem; }
</style>



Education
======
* M.S. in Geography – GIS Specialization, South Dakota State University , May 2026
* B.E. in Geomatics Engineering, Institute of Engineering, Tribhuvan University, 2020

Work experience
======
<h3 class="tight-block">Graduate Research Assistant — Remote Sensing & Digital Agriculture</h3>

<div class="tight-meta">
South Dakota State University (SDSU), Brookings, SD · Aug 2024 – Present
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


<h3 class="tight-block">Research Associate — Remote Sensing Analyst</h3>

<div class="tight-meta">
Geoinformatics Center, Asian Institute of Technology, Bangkok, Thailand · Feb 2022 – Aug 2024
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


Internships
======
<h3 class="tight-block">GIS Developer Intern</h3>

<div class="tight-meta">
Geoinformatics Center, Asian Institute of Technology, Bangkok, Thailand · May 2021 – Sept 2021
</div>

<p class="tight-desc">
Supported operational disaster-response and environmental monitoring systems through applied machine learning and scalable geospatial workflows.
</p>

<ul class="tight-list">
<li>Built and deployed a U-Net–based SAR flood-mapping workflow, delivering validated flood-extent layers into operational GIS platforms.</li>
<li>Integrated model outputs into production disaster-response systems supporting Sentinel-Asia initiatives.</li>
<li>Developed automated geospatial ETL and validation routines ensuring CRS consistency and reproducible outputs.</li>
</ul>


<h3 class="tight-block">Geospatial Intern (Remote)</h3>

<div class="tight-meta">
SkyTruth, Shepherdstown, WV, USA · Sept 2020 – Feb 2021
</div>

<p class="tight-desc">
Applied deep learning and multi-sensor satellite analytics for environmental monitoring and investigative reporting.
</p>

<ul class="tight-list">
<li>Developed U-Net segmentation workflows in Google Earth Engine using Sentinel-2 imagery for road detection and surface-change analysis.</li>
<li>Conducted SAR-based detection of illegal oil dumping using rapid screening pipelines in GEE.</li>
<li>Performed PlanetScope-based change analysis for environmental monitoring, producing decision-ready maps and concise technical reports.</li>
</ul>


Skills
======
* Skill 1
* Skill 2
  * Sub-skill 2.1
  * Sub-skill 2.2
  * Sub-skill 2.3
* Skill 3

Publications
======
  <ul>{% for post in site.publications reversed %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul>
  
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
Service and leadership
======
* Currently signed in to 43 different slack teams
