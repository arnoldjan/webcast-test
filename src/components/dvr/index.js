'use strict';
/**
 * @ngInject
 */
var ModuleName = 'dvr',
    RoutingConfig = require('./config');

module.exports = angular.module(ModuleName, [])
    .controller('AppController', require('./controller/AppController'))
    .controller('DvrController', require('./controller/DvrController'))
    .directive('bitmovin', require('./directive/bitmovin'))
    .config(function ($stateProvider) {
        angular.forEach(RoutingConfig, function (config, name) {
            $stateProvider.state(name, config);
        });
    })
;
