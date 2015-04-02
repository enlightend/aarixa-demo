// movieService -- data voorziening voor mijn movie app

(function () {
	'use strict';

	angular.module('movieApp')
		.service('movieService', movieService);

	movieService.$inject = ['$http', '$cacheFactory'];
	function movieService($http, $cacheFactory) {
		var url = 'http://www.omdbapi.com/?';

		this.getMovies = function (title) {
			return $http({
				method : 'get',
				url    : url + 's=' + title
			});
		};

		this.getMovie = function (movieId) {
			return $http({
				method : 'get',
				url    : url + 'i=' + movieId
			});
		}

		//********************************
		// Caching getters and setters
		var cache = $cacheFactory('movieCache');
		this.setMovieCache = function (movies) {
			cache.put('movieCache', movies);
		};
		this.getMovieCache = function () {
			return cache.get('movieCache');
		};
		// reset / clear cache
		this.clearMovieCache = function () {
			cache.removeAll();
		}
	}

})
();