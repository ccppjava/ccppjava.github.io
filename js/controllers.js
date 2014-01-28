---
---

// the combination of jekyll and angular is a bit confusing, 
// { { } } and { % % } will be evaluate and replaced by jekyll
// note the extra comma in array might cause issue in old version of IE
 
posts = [
    {% for post in site.posts %}
        {date: "{{ post.date | date_to_string }}", title: "{{ post.title }}", url: "{{ post.url }}" },
    {% endfor %}
];

if (undefined !== typeof dengs) {
	dengs.controller('PostListCtrl', function ($scope) {
		$scope.posts = posts;
	});
}