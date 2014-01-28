describe('PostList controllers', function() {
	describe('PostListCtrl', function() {

		it('should create "posts" with current posts', function(){
			var scope = {},
				ctrl = new PostListCtrl(scope);

			// the length might change ...
			expect(scope.posts.length).toBe(2);
		});
	});
});