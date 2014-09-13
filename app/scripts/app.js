'use strict';

/**
 * @ngdoc overview
 * @name vrigzonlinegithubioApp
 * @description
 * # vrigzonlinegithubioApp
 *
 * Main module of the application.
 */
angular
  .module('vrigzonlinegithubioApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
