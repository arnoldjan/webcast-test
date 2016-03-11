'use strict';
var appName = 'sample-angular-app';
var angular = require('angular');

require('mi-angular-resource-builder');
require('angular-resource');
require('angular-ui-router');
require('angular-ui-bootstrap');
require('angular-loading-bar');
require('angular-formly');
require('angular-formly-templates-bootstrap');

var requires = [
    'mi.ResourceBuilder',
    'ngResource',
    'ui.router',
    'ui.bootstrap',
    'angular-loading-bar',
    'formly',
    'formlyBootstrap',
    require('./components').name
];


angular.module(appName, requires)
    .config(function ($urlRouterProvider, $locationProvider, $resourceProvider) {
        $urlRouterProvider.otherwise(function ($injector) {
            var $state;
            $state = $injector.get('$state');
            $state.go('app');
        });
        $resourceProvider.defaults.stripTrailingSlashes = true;
    })
    // angular-loading-bar ///////////////////////////////////////////////////////////////////////////////////////////////
    .config(['cfpLoadingBarProvider', function (cfpLoadingBarProvider) {
        cfpLoadingBarProvider.includeSpinner = false;
    }]);
angular.bootstrap(document, [appName]);