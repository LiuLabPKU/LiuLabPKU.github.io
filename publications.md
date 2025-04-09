---
title: PUBLICATIONS
layout: page
---

<link rel="stylesheet" href="{{ '/assets/css/publications.css' | relative_url }}">

<div class="publications-container">

  <div class="publications-content">
    {% assign publications = site.data.publications | sort: 'Date' | reverse %}
    {% assign previous_year = '' %}
    {% for pub in publications %}
      {% if previous_year != pub.Year %}
        <h3 class="year-section">{{ pub.Year }}</h3>
        {% assign previous_year = pub.Year %}
      {% endif %}
      <div class="publication-item">
        <div class="publication-title">
          <a href="https://doi.org/{{ pub.DOI }}" target="_blank">{{ pub.Title }}</a>
          <span class="external-link-icon">↗</span>
        </div>
        <div class="publication-authors">{{ pub.Author }}</div>
        <div class="publication-journal">{{ pub.Journal }}, {{ pub.Issue }}, {{ pub.Volume }}, {{ pub.Pages }}, {{ pub.Year }}.</div>
        <div class="abstract-container">
            <a class="abstract-toggle" id="abstract-toggle">Abstract ▼</a>
            <div class="abstract-content" id="abstract-content"  style="display: none;">
                {{ pub.Abstract }}
            </div>
        </div>
      </div>
    {% endfor %}
  </div>
</div>
<script src="/assets/js/publications.js" defer></script>