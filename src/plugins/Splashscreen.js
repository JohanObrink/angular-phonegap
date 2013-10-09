'use strict';

angular.module('PhoneGap')
    .factory('Splashscreen', ['$window', 'PhonegapReady', function ($window, PhonegapReady) {
		return {
			show: PhonegapReady(function () {
				$window.navigator.splashscreen.show();
			}),
			hide: PhonegapReady(function () {
				$window.navigator.splashscreen.hide();
			})
		};
    }]);