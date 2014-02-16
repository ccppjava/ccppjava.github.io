describe('PostList controllers', function() {
	describe('PostListCtrl', function() {

		it('should create "posts" with current posts', function() {
			var scope = {},
				ctrl = new PostListCtrl(scope);

			// the length might change ...
			expect(scope.posts.length).toBe(2);
		});
	});
});

// if the controller function is not in global namespace
describe('PostList controllers', function() {
	beforeEach(module('dengs'));

	describe('PostListCtrl', function() {
		it('should create "posts" with current posts', inject(function($controller) {
			var scope = {},
				ctrl = $controller('PostListCtrl', { $scope: scope });

			expect(scope.posts.length).toBe(2);
		}));
	});
});