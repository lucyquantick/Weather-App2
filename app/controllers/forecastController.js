weatherApp.controller('forecastController', ['$scope', '$resource', '$log', 'cityService', function ($scope, $resource, $log, cityService) {

	$scope.city = cityService.city;

	$scope.weatherAPI = $resource("https://api.openweathermap.org/data/2.5/forecast",
		{ get: { method: "JSONP" } });

	$scope.weatherResult = $scope.weatherAPI.get({ q: $scope.city, cnt: 2, APPID: "b1887bf2fd62dadae7cbe58ba9ea08f1" });	

	$scope.convertToCelsius = function (degK) {
		return Math.round(degK - 273);
	};

	//$log.log($scope.weatherResult);

}]);