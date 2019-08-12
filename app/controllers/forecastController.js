weatherApp.controller('forecastController', ['$scope', '$resource', '$routeParams', '$log', 'cityService', function ($scope, $resource, $routeParams, $log, cityService) {

	$scope.city = cityService.city;

	$scope.results = $routeParams.results || 6;

	$scope.weatherAPI = $resource("https://api.openweathermap.org/data/2.5/forecast",
		{ get: { method: "JSONP" } });

	$scope.weatherResult = $scope.weatherAPI.get({ q: $scope.city, cnt: $scope.results, APPID: "b1887bf2fd62dadae7cbe58ba9ea08f1" });	

	$scope.convertToCelsius = function (degK) {
		return Math.round(degK - 273);
	};

	$scope.convertToDate = function (dt) {
		return new Date(dt * 1000);
	};

	//$log.log($scope.weatherResult);

}]);