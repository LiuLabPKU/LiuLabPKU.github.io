---
title: NEWS
layout: page
---

<link rel="stylesheet" href="{{ '/assets/css/news.css' | relative_url }}">

<div class="news-container" style="max-width:900px; margin:0 auto; text-align:left;">
    {% assign all_news = site.data.news | sort: 'date' | reverse %}
    {% for item in all_news %}
        {% include news-card.html news=item show_image=true %}
    {% endfor %}
</div>
