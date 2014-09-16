'use strict';

/**
 * @ngdoc function
 * @name testAngularApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the testAngularApp
 */
angular.module('testAngularApp')
  .controller('AboutCtrl', ['$scope','DataService', function ($scope, dataService) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    dataService.sayHello('Rubén');
  }
]);
