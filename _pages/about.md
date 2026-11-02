---
layout: minimal
permalink: /
redirect_from: 
  - /about/
  - /about.html
  - /publications/
---

<section class="intro">
  <div class="intro-text">
    <h1>Hillson Ghimire</h1>
    <p>I am a PhD student at <a href="https://www.rice.edu/">Rice University</a>, advised by <a href="https://waterai.earth/">Noemi Vergopolan</a>. My research focuses on remote sensing, hydrology, and machine learning, particularly for understanding soil moisture and agricultural drought. I am exploring how satellite observations, land surface models, and machine learning can be combined to improve high-resolution soil moisture modeling and prediction.</p>
    <p>Before Rice, I completed my MS at South Dakota State University with Maitiniyazi Maimaitijiang, working on computer vision and machine learning for agriculture. I developed deep learning models for wheat phenotyping and co-developed <a href="https://wheatai.net/">WheatAI</a>, a web-based crop phenotyping platform.</p>
    <p>Previously, I was a Research Associate at the Geoinformatics Center, Asian Institute of Technology, where I worked on satellite-based disaster monitoring and automated flood mapping for the Sentinel Asia initiative.</p>
    <p>My email is hg77 (at) rice (dot) edu. Feel free to reach out to talk about research!</p>
    <p class="intro-links"><a href="mailto:hg77@rice.edu">Email</a> &nbsp;/&nbsp; <a href="{{ '/cv/' | relative_url }}">CV</a> &nbsp;/&nbsp; <a href="https://scholar.google.com/citations?user=gm6EoPoAAAAJ&amp;hl=en&amp;oi=ao">Google Scholar</a> &nbsp;/&nbsp; <a href="https://github.com/hillsonghimire">GitHub</a> &nbsp;/&nbsp; <a href="https://www.linkedin.com/in/hillsonghimire">LinkedIn</a></p>
  </div>
  <div class="intro-photo"><img src="{{ '/images/hillson-ghimire.png' | relative_url }}" alt="Hillson Ghimire"></div>
</section>

<h2 id="news">Recent News</h2>
<ul class="news">
  <li><span class="news-date">Aug 2026</span><span>Started my PhD in Earth, Environmental and Planetary Sciences at Rice University.</span></li>
  <li><span class="news-date">Aug 2026</span><span>Awarded the Ken Kennedy Institute Computational Science and Engineering Recruiting Fellowship at Rice University.</span></li>
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
