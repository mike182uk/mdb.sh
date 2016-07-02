---
layout: default
permalink: /posts/
---

<ul class="post-archive">
  {% for post in site.posts %}
    {% unless post.next %}
      <h3 class="post-group-heading">{{ post.date | date: '%Y' }}</h3>
    {% else %}
      {% capture currentYear %}{{ post.date | date: '%Y' }}{% endcapture %}
      {% capture nextYear %}{{ post.next.date | date: '%Y' }}{% endcapture %}
      {% if currentYear != nextYear %}
        <h3 class="post-group-heading">{{ post.date | date: '%Y' }}</h3>
      {% endif %}
    {% endunless %}

    <li>
      <a href="{{ post.url }}" class="post">
        <span class="post-title">{{ post.title }}</span>
        <span class="post-date">{{ post.date | date: '%B %d, %Y' }}</span>
      </a>
    </li>
  {% endfor %}
</ul>
