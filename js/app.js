// app.js - bootstrap my movie App

(function () {
	'use strict';

	angular.module('movieApp', ['ngRoute']) // <== SETTER
		.config(configFunction);

	configFunction.$inject = ['$routeProvider']; // <== MINIFY- SAFE!!
	function configFunction($routeProvider) {
		$routeProvider
			.when('/', {
				templateUrl  : 'views/home.html',
				controller   : 'movieHomeController',
				controllerAs : 'vm'
			})
			.when('/detail/:id', {
				templateUrl : 'views/detail.html',
				controller   : 'movieDetailController',
				controllerAs : 'vm'
			})
			.otherwise({redirectTo : '/'})
	}
})();