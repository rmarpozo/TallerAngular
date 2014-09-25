'use strict';

angular.module('testAngularApp')
  .controller('CountriesCtrl', ['$scope', function ($scope) {
    $scope.countries = [
      {name : 'Chile'},
      {name : 'España'},
      {name : 'Argentina'},
      {name : 'Portugal'},
      {name : 'Francia'}
    ];
  }]);
