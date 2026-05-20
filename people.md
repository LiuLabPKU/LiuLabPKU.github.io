---
title: MEMBERS
layout: people
---

<!-- PI Highlight -->
<div style="max-width:900px; margin:0 auto 3rem; padding:0 1rem;">
    {% for member in site.data.pi %}
    <div style="background:#fff; border-radius:16px; padding:3rem; border:1px solid rgba(0,0,0,0.06); box-shadow:0 2px 8px rgba(0,0,0,0.04);">
        <div class="columns is-vcentered">
            <div class="column is-4">
                <div style="border-radius:16px; overflow:hidden; box-shadow:0 4px 16px rgba(0,0,0,0.08);">
                    <img src="{{ member.image }}" alt="{{ member.name }}" style="width:100%; display:block;">
                </div>
            </div>
            <div class="column is-8" style="text-align:left;">
                <h3 style="font-size:2rem; font-weight:700; color:#222; margin-bottom:0.3rem;">{{ member.name }}</h3>
                <p style="font-size:1.05rem; color:#555; line-height:1.7; margin-bottom:1rem;">{{ member.title }}</p>
                <p style="font-size:1.05rem; color:#333; line-height:1.9; margin-bottom:1rem;">{{ member.description }}</p>
                {% if member.scholar %}
                <a href="{{ member.scholar }}" target="_blank" rel="noopener" style="color:#4a90b8; font-size:1rem; text-decoration:none;">Google Scholar →</a>
                {% endif %}
            </div>
        </div>
        <div class="columns" style="margin-top:2rem; padding-top:1.5rem; border-top:1px solid rgba(0,0,0,0.08); text-align:left;">
            <div class="column is-6" style="text-align:left;">
                <h4 style="font-size:1rem; text-transform:uppercase; letter-spacing:0.1em; color:#888; margin-bottom:0.6rem;">Education</h4>
                <ul style="list-style:none; margin:0; padding:0;">
                {% for item in member.education %}
                    <li style="font-size:0.95rem; color:#444; line-height:1.8; padding:0.15rem 0;">{{ item }}</li>
                {% endfor %}
                </ul>
            </div>
            <div class="column is-6">
                <h4 style="font-size:1rem; text-transform:uppercase; letter-spacing:0.1em; color:#888; margin-bottom:0.6rem;">Honors & Awards</h4>
                <ul style="list-style:none; margin:0; padding:0;">
                {% for item in member.awards %}
                    <li style="font-size:0.95rem; color:#444; line-height:1.8; padding:0.15rem 0;">{{ item }}</li>
                {% endfor %}
                </ul>
            </div>
        </div>
    </div>
    {% endfor %}
</div>

<!-- Current Team -->
{% include member-section.html 
   cols=3
   title="Current Team" 
   data_source="current_team" 
%}

<!-- Former Members -->
{% include member-section.html 
   cols=3
   title="Former Lab Members" 
   data_source="former_members_photo" 
%}
