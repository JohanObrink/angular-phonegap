'use strict';

angular.module('PhoneGap')
    .factory('Capture', ['$window', '$rootScope', 'PhonegapReady', function ($window, $rootScope, PhonegapReady) {
        //var idCounter = 0;
        //var watchMap = {};

        return {
            captureAudio: PhonegapReady(function (onSuccess, onError, options) {
                $window.navigator.capture.captureAudio(function () {
                    var that = this,
                    args = arguments;

                    if (onSuccess) {
                        $rootScope.$apply(function () {
                            onSuccess.apply(that, args);
                        });
                    }
                }, function () {
                    var that = this,
                    args = arguments;

                    if (onError) {
                        $rootScope.$apply(function () {
                            onError.apply(that, args);
                        });
                    }
                },
                options);
            }),
            captureImage: PhonegapReady(function (onSuccess, onError, options) {
                $window.navigator.capture.captureImage(function () {
                    var that = this,
                    args = arguments;

                    if (onSuccess) {
                        $rootScope.$apply(function () {
                            onSuccess.apply(that, args);
                        });
                    }
                }, function () {
                    var that = this,
                    args = arguments;

                    if (onError) {
                        $rootScope.$apply(function () {
                            onError.apply(that, args);
                        });
                    }
                },
                options);
            }),
            captureVideo: PhonegapReady(function (onSuccess, onError, options) {
                $window.navigator.capture.captureVideo(function () {
                    var that = this,
                    args = arguments;

                    if (onSuccess) {
                        $rootScope.$apply(function () {
                            onSuccess.apply(that, args);
                        });
                    }
                }, function () {
                    var that = this,
                    args = arguments;

                    if (onError) {
                        $rootScope.$apply(function () {
                            onError.apply(that, args);
                        });
                    }
                },
                options);
            })
        };
    }]);