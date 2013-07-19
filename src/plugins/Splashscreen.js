'use strict';

angular.module('PhoneGap')
    .factory('Splashscreen', ['$window', 'PhonegapReady', function ($window, PhonegapReady) {
		return {
			show: PhonegapReady(function (key) {
				$window.navigator.splashscreen.show();
			}),
			hide: PhonegapReady(function (key, value) {
				$window.navigator.splashscreen.hide();
			})
		};
    }]);