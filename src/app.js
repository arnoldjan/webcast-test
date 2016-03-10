'use strict';
var appName = 'sample-angular-app';
var angular = require('angular');

require('mi-angular-resource-builder');
require('angular-resource');
require('angular-ui-router');

var requires = [
    'mi.ResourceBuilder',
    'ngResource',
    'ui.router',
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
    });
angular.bootstrap(document, [appName]);