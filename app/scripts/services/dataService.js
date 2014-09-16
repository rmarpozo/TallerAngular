'use strict';

angular.module('testAngularApp')
  .service('DataService', ['$http', function DataService($http) {

    this.sayHello = function(name) {
      console.log('Hola ' + name + ', ¿qué tal?');
    };

    this.getWeatherData = function() {
      return $http.get('http://api.openweathermap.org/data/2.5/weather?q=London').then(function (response) {
        return response.data;
      });
    };

  }
]);
