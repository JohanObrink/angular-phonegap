'use strict';

angular.module('PhoneGap')
    .factory('Connection', ['$window', 'PhonegapReady', function ($window, PhonegapReady) {
		return {
			type: PhonegapReady(function () {
				return $window.navigator.network.connection.type;
			})
		};
    }]);