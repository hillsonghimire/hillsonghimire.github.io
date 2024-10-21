---
title:
layout: default
permalink: /projects/
published: true
---

<div class="projectContainer">
  <br>
  <div class="gallery">
  
    {% for project in site.projects %}
    
    {% if project.redirect %}
    <a href="{{ project.redirect }}" target="_blank" class="projectTileLink">
    {% else %}
    <a href="{{ project.url | prepend: site.baseurl | prepend: site.url }}" class="projectTileLink">
    {% endif %}
    
      <div class="projectTile">
      
        {% if project.image %}
        <div class="projectImage" style="background-image: url('{{ project.image }}');"></div>
        {% endif %}
        
        <div class="projectInfo">
          <h2>{{ project.title }}</h2>
          <p>{{ project.description }}</p>
        </div>
      
      </div>
    
    </a>
    
    {% endfor %}

  </div>
</div>

<br>
## Other Short Projects/Analysis
Several "personal" projects or the ones' built over OpenSource modules are publicly accessible through my githubs, social media, blogs etc.
There Ain't No Such Thing as a Free Lunch (TANSTAAFL) - except OpenSource.
1. [<u>Topographic Wetness Index (TWI)</u>](https://github.com/hillsonghimire/EO-training-resources/blob/main/Topographic_Wetness_Index_(TWI).ipynb), on Google Earth Engine *Python API*, Feb 2024

<!-- 2. [Lorem Name](), "*Lorem Ipsum Thesis Title*", BS 22/23, University of Lorem
3. [Lorem Name](), "*Lorem Ipsum Thesis Title*", BS 22/23, University of Lorem -->