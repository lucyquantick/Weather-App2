weatherApp.service('cityService', function () {

	this.city = 'Bristol';

});


weatherApp.service('weatherService', ['$resource', function ($resource) {

	this.GetWeather = function (city, results) {

		var weatherAPI = $resource("https://api.openweathermap.org/data/2.5/forecast",
			{ get: { method: "JSONP" } });

		return weatherAPI.get({ q: city, cnt: results, APPID: "b1887bf2fd62dadae7cbe58ba9ea08f1" });
	};
	

}]);