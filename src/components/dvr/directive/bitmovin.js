'use strict';
/**
 * @ngInject
 */

function bitmovin($window, $document) {
    return {
        templateUrl: 'views/dvr/bitmovin.html',
        link: function (scope, element) {

            var conf = {
                key: 'f48fbdb3-d36b-449d-be3e-142e0c544de9',
                source: {
                    hls: 'http://10.10.4.14:1935/mi-webcast/myStream8b/master.m3u8?DVR'
                },
                style: {
                    width: '100%'
                },
                playback: {
                    autoplay: true,
                    timeShift: false
                },
                events: {
                    onMetadata: function (data) {
                        if (data.metadata.frames[0] !== undefined) {
                            scope.$broadcast('newSlide', data.metadata.frames[0].data);
                        }
                    }
                }
            };
            conf.style.aspectratio = '1,775';
            conf.style.autoHideControls = true;
            conf.skin = 'player/player_bitmovin_skin_default.json';


            // initialize the player
            var player = $window.window.bitdash('bitmovin-player');
            var supportedTech = player.getSupportedTech();

            // force HLS / Flash playback if available
            var hlsTech = [];
            var flashForce = false;
            var cuepointsSupported = false;

            angular.forEach(supportedTech, function (tech, key) {
                if ('hls' === tech.streaming) {
                    hlsTech.push(tech.player + '.' + tech.streaming);
                }
            });

            if (-1 !== hlsTech.indexOf('flash.hls')) {
                flashForce = true;
                cuepointsSupported = true;
            }

            if (-1 !== hlsTech.indexOf('native.hls')) {
                flashForce = false;
                cuepointsSupported = true;
                //todo: check for Android, Android does not support CuePoints via HTML5
            }

            if (flashForce) {
                player.setup(conf, 'flash.hls');
            } else {
                player.setup(conf);
            }

            if (!cuepointsSupported) {
                // show info about not supported slide synchronization
                scope.showInfoUnsupportedCuepoints = true;
            } else {
                scope.showInfoUnsupportedCuepoints = false;
            }
        }
    };
}

module.exports = bitmovin;
