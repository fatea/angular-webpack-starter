'use strict';


var controllers = require("./controllers.js");


var app = angular.module('myApp', [
  'ngRoute',
  'controllers'
]);



app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
    when('/index', {
      templateUrl: 'index.html',
      controller: 'mainControl'
    }).
    otherwise({
      redirectTo: '/404'
    });
  }]);
