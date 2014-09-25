'use strict';

angular.module('testAngularApp')
  .service('TranslationService', ['$http', function DataService($http) {

    this.translate = function(item, fromLanguage, toLanguage) {
      return $http.get('http://mymemory.translated.net/api/get?q=' + item + '&langpair=' + fromLanguage + '|' + toLanguage)
        .then(function (response) {
          var translations = response.data.matches;
          for(var i=0; i < translations.length; i++) {
            if(translations[i].reference.indexOf('Google') !== -1) {
              return translations[i].translation;
            }
          }
        });
    };
  }
]);
