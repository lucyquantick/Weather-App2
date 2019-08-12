// MODULE
var weatherApp = angular.module('weatherApp', ['ngRoute', 'ngResource']);

weatherApp.config(function ($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: 'pages/home.html',
			controller: 'controller/homeController.js'
		})
		.when('/forecast', {
			templateUrl: 'pages/forecast.html',
			controller: 'controllers/forecastController.js'
		});
});