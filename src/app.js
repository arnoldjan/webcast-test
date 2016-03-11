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
require('angular-sanitize');
require('angular-translate');
require('angular-translate-loader-partial');

var requires = [
    'mi.ResourceBuilder',
    'ngResource',
    'ui.router',
    'ui.bootstrap',
    'angular-loading-bar',
    'formly',
    'formlyBootstrap',
    'ngSanitize',
    'pascalprecht.translate',
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

    // translation stuff /////////////////////////////////////////////////////////////////////////////////////////////////
    .config(function ($translateProvider) {
        $translateProvider.useSanitizeValueStrategy('escape');
        $translateProvider.useLoader('$translatePartialLoader', {
            urlTemplate: './i18n/{part}/{lang}.json'
        });
        $translateProvider
            .registerAvailableLanguageKeys(['de','en'], {
                'de_*': 'de',
                'en_*': 'en'
            })
            .determinePreferredLanguage();

        var language = $translateProvider.preferredLanguage();
        if (!language.match(/(en).*/) && !language.match(/(de).*/)) {
            return $translateProvider.preferredLanguage('en');
        }
    })

    // angular-loading-bar ///////////////////////////////////////////////////////////////////////////////////////////////
    .config(['cfpLoadingBarProvider', function (cfpLoadingBarProvider) {
        cfpLoadingBarProvider.includeSpinner = false;
    }]);
angular.bootstrap(document, [appName]);