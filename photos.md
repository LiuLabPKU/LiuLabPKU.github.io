---
title: PHOTOS
layout: page
---

<link rel="stylesheet" href="{{ '/assets/css/photowall.css' | relative_url }}">

<style>
/* Ensure full width for photo wall */
#page-section .container { max-width: 1200px !important; }
</style>

<div id="photo-wall">
    {% for photo in site.data.photos %}
        <div class="photo">
            <img src="{{ photo.url }}" alt="Lab photo" loading="lazy">
        </div>
    {% endfor %}
</div>
