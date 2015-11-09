'use strict';

/**
 * @ngdoc function
 * @name angularYeomanTodoApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularYeomanTodoApp
 */
angular.module('angularYeomanTodoApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
