'use strict';

/**
 * @ngdoc overview
 * @name beerAppApp
 * @description
 * # beerAppApp
 *
 * Main module of the application.
 */
angular
  .module('beerAppApp', [
    'ngAnimate',
    'ngAria',
    'ngMessages',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngMaterial',
    'hammerJs',
    
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/beermenu.html',
        controller: 'MainCtrl'
              })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
