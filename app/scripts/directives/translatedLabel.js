'use strict';

angular.module('testAngularApp')
  .directive('translatedLabel', ['TranslationService', function (translationService) {

    function link(scope, element, attrs) {
      scope.$watch('text', function(value) {
        translationService.translate(value, attrs.from, attrs.to).then(function (translatedValue) {
          scope.translatedValue = translatedValue;
        });
      });
    }

    return {
      restrict : 'E',
      scope : {
        text : '=',
        from : '=',
        to : '=',
      },
      template : '<span>{{translatedValue}}</span>',
      link : link
    };
  }]);

