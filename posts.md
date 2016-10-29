---
layout: default
excerpt: Posts by Michael Barrett - Fullstack Software Engineer
permalink: /posts/
title: Posts
---

{% if site.posts.size > 0 %}

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
        <span class="post-date">{{ post.date | date: '%d %B, %Y' }}</span>
      </a>
    </li>
  {% endfor %}
</ul>

{% else %}

<div class="post-archive">
  <p class="no-posts">I've not published any posts yet 😞</p>
</div>

{% endif %}
