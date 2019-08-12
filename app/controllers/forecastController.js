weatherApp.controller('forecastController', ['$scope', '$routeParams', '$log', 'cityService', 'weatherService', function ($scope, $routeParams, $log, cityService, weatherService) {

	$scope.city = cityService.city;

	$scope.results = $routeParams.results || '6';

	$scope.weatherResult = weatherService.GetWeather($scope.city, $scope.results);

	$scope.convertToCelsius = function (degK) {
		return Math.round(degK - 273);
	};

	$scope.convertToDate = function (dt) {
		return new Date(dt * 1000);
	};

}]);