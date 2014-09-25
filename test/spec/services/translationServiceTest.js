'use strict';

describe('Service: TranslationService', function () {

  // load the controller's module
  beforeEach(module('testAngularApp'));

  var translationService;

  // Initialize the service
  beforeEach(inject(function (_TranslationService_) {
    translationService = _TranslationService_;
  }));

  it('should translate some words form english into spanish', function () {

    var completed = false;
    var translatedValue;

    translationService.translate('hello','en','es').then(function (result) {
      console.log(result);
      translatedValue = result;
      completed = true;
    });

    /*waitsFor(function () {
      return completed;
    }, 10000);*/

    waits(3000);

    runs(function () {
      expect(translatedValue).toBe('feo');
    });
  });
});
