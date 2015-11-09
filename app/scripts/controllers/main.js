'use strict';

/**
 * @ngdoc function
 * @name angularYeomanTodoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularYeomanTodoApp
 */
angular.module('angularYeomanTodoApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
