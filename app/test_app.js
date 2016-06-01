'use strict';



var controllers = require("./controllers/main.js");

var app = angular.module('myApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.sortable',
    'LocalStorageModule',
    'controllers',
  ]);

app.config(['localStorageServiceProvider', function(localStorageServiceProvider){
  localStorageServiceProvider.setPrefix('ls');
  }])
.config(['$routeProvider',
  function($routeProvider) {
    // $locationProvider.hashPrefix();

    $routeProvider.
    when('/', {
      templateUrl: 'views/main.html',
      controller: 'mainControl'
    }).
    otherwise({
      redirectTo: '/404'
    });
  }]);


  // module.exports = app;
