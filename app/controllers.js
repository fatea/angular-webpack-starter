'use strict';
var _ = require('lodash');

var controllers = angular.module('controllers', []);
controllers.controller('mainControl', ['$scope', function($scope) {
  $scope.test_word = 'Hello';
}]);