---
title: GROUP
layout: people
---


<div id="lab-manager">
    {% for member in site.data.pi %}
    <div class="columns photo-row"> <!-- 每个成员占据半行宽度 -->
            <div class="column is-4 "> <!-- 图像占2份 -->
                <img class="is-square is-1by1" src="{{ member.image }}" alt="{{ site.author-name }}">
            </div>
            <div class="column is-7"> <!-- 文本占3份 -->
                <div class="has-text-left-desktop has-text-left-tablet has-text-left-fullhd has-text-left-widescreen">
                    <h3>{{ member.name }} </h3>
                    <p>{{ member.title }} </p>
                    <p>{{ member.description }}</p>
                </div>
            </div>
        
    </div>
    {% endfor %}
</div>

{% include member-section.html 
   cols=2
   title="Current Team" 
   data_source="current_team" 
%}

{% include member-section.html 
   cols=3
   title="Current Team" 
   data_source="current_team" 
%}

{% include member-section.html 
   cols=3
   title="Former Lab Members" 
   data_source="former_members_photo" 
%}

<div>

{% for member in site.data.former_members %}
    <div class="columns">
        <div class="column is-3 has-text-left-tablet has-text-left-fullhd has-text-left-widescreen">
            {{ member.name }}
        </div>
        <div class="column is-3 has-text-left-tablet has-text-left-fullhd has-text-left-widescreen">
            {{ member.title }}
        </div>
        <div class="column is-6 has-text-left-tablet has-text-left-fullhd has-text-left-widescreen">
            {{ member.description }}
        </div>
    </div>
{% endfor %}
</div>