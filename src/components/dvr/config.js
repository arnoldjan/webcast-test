'use strict';
/**
 * @ngInject
 */
module.exports = {
    'app': {
        url: '',
        abstract: false,
        views: {
            'main@': {
                templateUrl: './views/dvr/start.html'
            }
        }
    },
    'app.dvr': {
        url: '/dvr',
        abstract: false,
        views: {
            'main@': {
                templateUrl: './views/dvr/dvr.html',
                controller: 'AppController as appVm'
            }
        }
    }
};