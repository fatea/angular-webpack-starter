'use strict';

/**
 * @ngdoc function
 * @name myAngularProjectApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the myAngularProjectApp
 */




'use strict';
// var _ = require('lodash');

var controllers = angular.module('controllers', []);

controllers.controller('mainControl', ['$scope', 'localStorageService', function ($scope, localStorageService) {
  async function sleep(timeout) {
    return new Promise((resolve, reject) => {
      setTimeout(function() {
        resolve();
      }, timeout);
    });
  }

  (async function() {
    console.log('Do some thing, ' + new Date());
    await sleep(3000);
    console.log('Do other things, ' + new Date());
  })();





    var todosInStore = localStorageService.get('todos');
    $scope.todos = todosInStore || [];

    $scope.$watch('todos', function() {
      localStorageService.set('todos', $scope.todos);
    }, true);

    $scope.addTodo = function () {
      $scope.todos.push($scope.todo);
      $scope.todo = '';
    };

    $scope.removeTodo = function (index) {
      $scope.todos.splice(index, 1);
    };
  }]);
