'use strict';

/**
 * Global Imports
 * =============================================================================
 *
 * Imports all the global script files that are
 * used throughout the application.
 */
require('angular');
require('angular-animate');
require('angular-cookies');
require('angular-sanitize');
require('angular-ui-router');
require('angular-toastr');


// Custom created components
require('./templatescache');

//============================================================================//
// angular modules import
//============================================================================//
var constants = require('./app.constants');
var config = require('./app.config');
var onRunConfig = require('./app.onrun');

//============================================================================//
// create and bootstrap application
//============================================================================//
const requires = [
  /** For angular animations **/
  'ngAnimate',
  /** For angular cookiestore **/
  'ngCookies',
  /** Sanitization for angular messages **/
  'ngSanitize',
  /** For routing options **/
  'ui.router',
  /** For creating toastr notifications **/
  'toastr',
  /** Caching all html pages into one file **/
  'templatescache'
  // Add more vendor or custom modules
];

/** The application component name **/
/** Do not use this name in any other component **/
const appName = 'yourAppName';

// mount on window for testing, disable this for production
window.app = angular.module(appName, requires);
var app = angular.module(appName);

//============================================================================//
// Define constants here
//============================================================================//
app.constant('AppConstants', constants);

//============================================================================//
// Define controllers here
//============================================================================//
var controllers = [
  // Include controllers here. example require('/path-to-your-controller-file')
  require('./components/home/home.controller'),
  require('./components/sample/sample.controller'),
  require('./components/home1/home1.controller'),
  require('./components/checkout/checkOut.controller')
];


//============================================================================//
// Define services here
//============================================================================//
var services = [
  // Include services here. example require('/path-to-your-service-file')
  require('./components/home/home.service')
];


//============================================================================//
// Define directives here
//============================================================================//
var directives = [
  // Include directives here. example require('/path-to-your-directive-file')
  require('./shared/my-custom/my-custom.directive'),
  require('./shared/my-custom1/my-custom1.directive')

];


//============================================================================//
// Define filters here
//============================================================================//
var filters = [
  // Include filters here. example require('/path-to-your-filter-file')
];


//============================================================================//
// Mapping components happens here - Dont edit these sections
//============================================================================//

_.each(controllers, function(item){ // Mapping controllers
  if(item.fn && typeof item.fn === 'function') {
    app.controller(item.name, item.fn);
  }
});

_.each(services, function(item){ // Mapping services
  if(item.fn && typeof item.fn === 'function') {
    app.factory(item.name, item.fn);
  }
});

_.each(directives, function(item){ // Mapping directives
  if(item.fn && typeof item.fn === 'function') {
    app.directive(item.name, item.fn);
  }
});

_.each(filters, function(item){ // Mapping filters
  if(item.fn && typeof item.fn === 'function') {
    app.filter(item.name, item.fn);
  }
});


//============================================================================//
// Application configurations
//============================================================================//
app.config(config);
app.run(onRunConfig);

//============================================================================//
// Map the app as the module to the DOM - Dont edit these sections
// This will set the app that is created to the dom when page gets loaded.
//============================================================================//
angular.bootstrap(document, [appName], {
  strictDi: true
});
