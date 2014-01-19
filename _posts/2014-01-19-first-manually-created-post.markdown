---
layout: post
title:  "Welcome to my site!"
date:   2014-01-18 23:45:41
categories: update
---

This is a first post created manually according to official documentation.

basically contains dummy tests/information which is not intereting at all :)

here we goes:

<ul id="list">
	{% for post in site.posts %}
	<li>
		<a href="{{ post.url }}">{{ post.title }}</a>
		<p>{{ post.excerpt }}</p>
	</li>
	{% endfor %}
</ul>

{% highlight javascript linenos %}
(function($, undefined){
	var ul = document.getElementById('list');
	var $ul = $('#list');
	$ul.hide();
})(jQuery);
{% endhighlight %}