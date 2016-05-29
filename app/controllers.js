

'use strict';
var _ = require('lodash');

var controllers = angular.module('controllers', []);
controllers.controller('mainControl', ['$scope', function($scope) {
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
}]);