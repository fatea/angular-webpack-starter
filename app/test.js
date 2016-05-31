require('babel-polyfill');
require('./bower_components/bootstrap/dist/css/bootstrap.css');
require('./main.css');
var jquery = require("./bower_components/jquery/dist/jquery.js");
var boostrap = require("./bower_components/bootstrap/dist/js/bootstrap.js");
var jqueryUI = require("./bower_components/jquery-ui/jquery-ui.js");
var angular = require("./bower_components/angular/angular.js");
var ngAnimate = require("./bower_components/angular-animate/angular-animate.js");
var ngCookies = require("./bower_components/angular-cookies/angular-cookies.js");
var ngResource = require("./bower_components/angular-resource/angular-resource.js");
var ngRoute = require("./bower_components/angular-route/angular-route.js");
var ngSanitize= require("./bower_components/angular-sanitize/angular-sanitize.js");
var ngTouch = require("./bower_components/angular-touch/angular-touch.js");

var ui = {};
ui.sortable = require("./bower_components/angular-ui-sortable/sortable.js");
var LocalStorageModule = require("./bower_components/angular-local-storage/dist/angular-local-storage.js");
// var mainCtrl = require("./controllers/main.js");
var app = require("./test_app.js");

