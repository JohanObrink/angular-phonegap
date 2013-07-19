'use strict';
// Fallback for desktop testings
var Camera = Camera || {
    PictureSourceType: {
        PHOTOLIBRARY : 0,
        CAMERA : 1,
        SAVEDPHOTOALBUM : 2
    },
    DestinationType: {
        DATA_URL : 0,
        FILE_URI : 1,
        NATIVE_URI : 2
    },
    EncodingType: {
        JPEG : 0,
        PNG : 1
    },
    MediaType: {
        PICTURE: 0,
        VIDEO: 1,
        ALLMEDIA : 2
    },
    Direction: {
        BACK : 0,
        FRONT : 1
    }
};

angular.module('PhoneGap')
    .factory('Camera', ['$window', '$rootScope', 'PhonegapReady', function ($window, $rootScope, PhonegapReady) {
        var idCounter = 0;
        var watchMap = {};

        return {
            getPicture: PhonegapReady(function (onSuccess, onError, options) {
                $window.navigator.camera.getPicture(function () {
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
            cleanup: PhonegapReady(function (onSuccess, onError) {
                $window.navigator.camera.cleanup(function () {
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
                });
            }),
            PictureSourceType: Camera.PictureSourceType,
            DestinationType: Camera.DestinationType,
            EncodingType: Camera.EncodingType,
            MediaType: Camera.MediaType,
            Direction: Camera.Direction
        };
    }]);