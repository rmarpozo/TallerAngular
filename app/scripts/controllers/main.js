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

      });
    };
}]);
