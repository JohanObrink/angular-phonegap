'use strict';

angular.module('PhoneGap')
    .factory('Compass', ['$window', '$rootScope', 'PhonegapReady', function ($window, $rootScope, PhonegapReady) {
        var idCounter = 0;
        var watchMap = {};

        return {
            getCurrentHeading: PhonegapReady(function (onSuccess, onError, options) {
                $window.navigator.compass.getCurrentHeading(function () {
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
            watchHeading: PhonegapReady(function (onSuccess, onError, options) {
                var watchId = (++idCounter).toString(10);
                watchMap[watchId] = $window.navigator.compass.watchHeading(function () {
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
                return watchId;
            }),
            clearWatch: PhonegapReady(function (watchId) {
                if (watchMap[watchId]) {
                    $window.navigator.compass.clearWatch(watchMap[watchId]);
                    delete watchMap[watchId];
                }
            })
        };
    }]);