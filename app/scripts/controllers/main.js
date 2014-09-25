'use strict';

/**
 * @ngdoc function
 * @name testAngularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the testAngularApp
 */
angular.module('testAngularApp')
  .controller('MainCtrl', ['$scope','DataService', function ($scope, dataService) {
    $scope.getWeatherData = function(city) {
      dataService.getWeatherData(city).then(function (weatherData) {
        $scope.weatherData = weatherData;
        $scope.map = {
          center: {
            latitude: weatherData.coord.lat,
            longitude: weatherData.coord.lon
          },
          zoom: 10
        };
        $scope.showMap = true;
      });
    };
}]);
