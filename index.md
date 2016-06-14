---
layout: default
title: UWCxBlogs
image: '/assets/main.jpg'
---
<nav>
  {% include navigation.html %}
</nav>
<header>
  <div class="header" style="background-image: url('{{ site.baseurl }}{{ page.image }}')">
    <svg class="header-large" viewBox="0 0 330 75">
      <defs>
        <g id="text-large">
          <text class="header-text" text-anchor="middle" x="165" y="55">UWCxBlogs</text>
        </g>
        <mask id="mask-large" x="0" y="0" width="450" height="75">
          <rect x="0" y="0" width="450" height="75" fill="#fff"/>
          <use xlink:href="#text-large" />
        </mask>
      </defs>
      <rect x="0" y="0" width="450" height="75" mask="url(#mask-large)" fill="white" fill-opacity="1"/>
      <use xlink:href="#text-large" mask="url(#mask-large)" />
    </svg>
  </div>
</header>

<section id="about" class="section ctnr-golden">
  <h3>About</h3>
  <h1>{{ site.tagline }}</h1>
  <h4>{{ site.description }}</h4>
  <a class="link-large" href="/process">Learn about my work process →</a>
</section>

<section id="bloglist" class="section ctnr-golden">
<label for="js-search"><h3 class="section-beta">search is in beta</h3> Enter a country, language, year or name.</label>
<input id="js-search" class="section-search" placeholder="Search for a blog..." />
<h3>Bloglist</h3>  
{% assign colleges = site.data %}
{% for college in colleges %}
<div class="section-blogs">
  <h1>{{ college[0] | replace: '_', ' ' }}</h1>
  <p class="section-columns">
  {% for year in college[1] %}
    <span class="js-list" id="{{ college[0] }}-{{ year[0] }}">
      <span class="h2">{{ year[0] }}</span>
      <span class="list">
        {% assign blogs = year[1] | sort: 'firstname' %}
        {% for blog in blogs  %}
          <span data-year="{{ blog.year }}" class="section-blog"><a href="http://{{ blog.link }}" target="_blank" class="link"><span class="name">{{ blog.firstname }}</span></a> | <span class="country">{{ blog.country }}</span> - <span class="language">{{ blog.language }}</span></span><br>
        {% endfor %}
      </span>
    </span>
  {% endfor %}
  </p>
</div>
{% endfor %}

</section>

<section class="section ctnr-golden">
  <h3 id="submit">submit</h3>
  <form action="//formspree.io/submission@uwcblogs.com" method="POST">
    <div class="section-inputs">
      <div class="section-input">
        <label for="name">What’s your name?</label>
        <input type="text" name="name" placeholder="Jane" required="true">
      </div>
      <div class="section-input">
        <label for="_replyto">What’s your email address?</label>
        <input type="email" name="_replyto" placeholder="jane@example.com" required="true">
      </div>
      <div class="section-input">
        <label for="country">Which country are you from?</label>
        <input type="text" name="country" placeholder="Germany" required="true">
      </div>
      <div class="section-input">
        <label for="language">Which language do you blog in?</label>
        <input type="text" name="language" placeholder="English & German" required="true">
      </div>
      <div class="section-input">
        <label for="link">What's the link to your blog?</label>
        <input type="url" name="link" placeholder="http://connorbaer.io/" required="true">
      </div>
      <div class="section-input">
        <label for="college">Which UWC do/did you attend?</label>
        <input type="text" name="college" placeholder="UWC Changshu" required="true">
      </div>
      <div class="section-input">
        <label for="year">When will/did you finish UWC?</label>
        <input type="text" name="year" placeholder="2015" required="true">
      </div>
    </div>
    <input type="hidden" name="_subject" value="Someone submitted a blog." />
    <input type="hidden" name="_next" value="//uwcblogs.com/success/" />
    <input type="text" name="_gotcha" style="display:none" />
    <button class="button" type="submit">Submit your blog</button>
  </form>
</section>