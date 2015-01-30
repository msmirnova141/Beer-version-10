'use strict';

/**
 * @ngdoc function
 * @name beerAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the beerAppApp
 */
angular.module('beerAppApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
