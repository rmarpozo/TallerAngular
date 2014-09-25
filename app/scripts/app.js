'use strict';

/**
 * @ngdoc overview
 * @name testAngularApp
 * @description
 * # testAngularApp
 *
 * Main module of the application.
 */
angular
  .module('testAngularApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'google-maps'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/mainView.html',
        controller: 'MainCtrl'
      })
      .when('/countries', {
        templateUrl: 'views/countries.html'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
