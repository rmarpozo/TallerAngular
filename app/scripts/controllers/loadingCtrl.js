'use strict';

angular.module('testAngularApp')
  .controller('LoadingCtrl', ['$scope', function ($scope) {

    $scope.$on('loadingBegins', function () {
      $scope.showTranslating = true;
    });

    $scope.$on('loadingEnds', function () {
      $scope.showTranslating = false;
    });



  }]);
