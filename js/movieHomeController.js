// movie Home Controller

(function () {
	'use strict';

	angular.module('movieApp') // <== GETTER
		.controller('movieHomeController', movieHomeController);

	movieHomeController.$inject=['movieService'];
	function movieHomeController(movieService) {
		var vm = this;

		vm.searchMovie = function () {
			movieService.getMovies(vm.movieTitle)
				.then(function(movieData){
					vm.movies = movieData.data.Search;
					movieService.setMovieCache(vm.movies);
				})
				.catch(function(err){
					alert('HELAAS: FOUT:' + err);
				})



		};

		vm.clearMovies = function () {
			vm.movies = undefined;
			movieService.clearMovies();
		};

		function init(){
			vm.movies=movieService.getMovieCache();
		}

		init();

	}

})();