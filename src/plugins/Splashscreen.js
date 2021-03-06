
angular.module('PhoneGap')
.factory('Splashscreen', ['$window', 'PhonegapReady', function ($window, PhonegapReady) {
	'use strict';
	return {
		show: PhonegapReady(function () {
			$window.navigator.splashscreen.show();
		}),
		hide: PhonegapReady(function () {
			$window.navigator.splashscreen.hide();
		})
	};
}]);