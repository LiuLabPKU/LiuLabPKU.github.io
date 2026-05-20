---
title: PUBLICATIONS
layout: page
---

<style>
.pub-wrap { max-width:1000px; margin:0 auto; text-align:left; }
.pub-year { font-size:2rem; color:#222; margin:36px 0 16px; padding-bottom:6px; border-bottom:2px solid #4a90b8; display:inline-block; }
.pub-grid { display:flex; flex-wrap:wrap; gap:1rem; }
.pub-item { width:calc(50% - 0.5rem); background:#fff; border-radius:10px; padding:1.5rem; border:1px solid rgba(0,0,0,0.06); box-shadow:0 1px 4px rgba(0,0,0,0.03); transition:box-shadow 0.2s,transform 0.2s; display:flex; flex-direction:column; }
.pub-item:hover { box-shadow:0 4px 16px rgba(0,0,0,0.08); transform:translateY(-2px); }
.pub-tag { display:inline-block; font-size:0.75rem; font-weight:600; text-transform:uppercase; letter-spacing:0.05em; color:#fff; background:#4a90b8; padding:0.2rem 0.65rem; border-radius:4px; margin-bottom:0.5rem; }
.pub-ttl { font-size:1.1rem; font-weight:600; line-height:1.45; margin-bottom:0.6rem; flex:1; }
.pub-ttl a { color:#222; text-decoration:none; }
.pub-ttl a:hover { color:#4a90b8; }
.pub-auth { font-size:0.9rem; color:#555; line-height:1.5; margin-bottom:0.6rem; }
.pub-abs-toggle { font-size:0.85rem; color:#4a90b8; cursor:pointer; margin-bottom:0.3rem; user-select:none; }
.pub-abs-toggle:hover { text-decoration:underline; }
.pub-abs { display:none; margin-top:0.5rem; padding:0.8rem 1rem; background:#f8f9fa; border-radius:6px; font-size:0.9rem; line-height:1.7; color:#555; border-left:3px solid #4a90b8; }
@media(max-width:768px){ .pub-item{width:100%} .pub-ttl{font-size:1rem} .pub-year{font-size:1.6rem} }
</style>

<div class="pub-wrap">
  {% assign pubs = site.data.publications | sort: 'Date' | reverse %}
  {% assign prev = '' %}
  {% for p in pubs %}
    {% if prev != p.Year %}
      {% unless forloop.first %}</div>{% endunless %}
      <div class="pub-year">{{ p.Year }}</div>
      <div class="pub-grid">
      {% assign prev = p.Year %}
    {% endif %}
    <div class="pub-item">
      <div><span class="pub-tag">{{ p.Journal }}</span></div>
      <div class="pub-ttl"><a href="https://doi.org/{{ p.DOI }}" target="_blank">{{ p.Title }} ↗</a></div>
      <div class="pub-auth">{{ p.Author }}</div>
      <div class="pub-abs-toggle" onclick="var a=this.nextElementSibling;var v=a.style.display==='none'?'block':'none';a.style.display=v;this.textContent=v==='block'?'Abstract ▲':'Abstract ▼';">Abstract ▼</div>
      <div class="pub-abs">{{ p.Abstract }}</div>
    </div>
  {% endfor %}
  </div>
</div>
