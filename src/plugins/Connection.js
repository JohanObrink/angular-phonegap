
angular.module('PhoneGap')
.factory('Connection', ['$window', 'PhonegapReady', function ($window, PhonegapReady) {
  'use strict';

  return {
    type: PhonegapReady(function () {
      return $window.navigator.network.connection.type;
    })
  };
}]);