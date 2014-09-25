'use strict';

angular.module('testAngularApp')
  .filter('uppercase', function() {

    return function(input) {
      input = input || '';
      return input.toUpperCase();
    };

  });
