weatherApp.controller('forecastController', ['$scope', 'cityService', function ($scope, cityService) {

	$scope.city = cityService.city;

}]);