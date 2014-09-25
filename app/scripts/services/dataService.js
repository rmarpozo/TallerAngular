'use strict';

angular.module('testAngularApp')
  .service('DataService', ['$http', function DataService($http) {

    this.getWeatherData = function(city) {
      return $http.get('http://api.openweathermap.org/data/2.5/weather?q=' + city).then(function (response) {
        return response.data;
      });
    };

  }
]);
