
angular.module('PhoneGap')
.factory('Geolocation', ['$window', '$rootScope', 'PhonegapReady', function ($window, $rootScope, PhonegapReady) {
  'use strict';
  var idCounter = 0;
  var watchMap = {};

  return {
    getCurrentPosition: PhonegapReady(function (onSuccess, onError, options) {
      $window.navigator.geolocation.getCurrentPosition(function () {
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
    watchPosition: PhonegapReady(function (onSuccess, onError, options) {
      var watchId = (++idCounter).toString(10);
      watchMap[watchId] = $window.navigator.geolocation.watchPosition(function () {
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
        $window.navigator.geolocation.clearWatch(watchMap[watchId]);
        delete watchMap[watchId];
      }
    })
  };
}]);