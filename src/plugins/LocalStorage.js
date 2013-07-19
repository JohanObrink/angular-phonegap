'use strict';

angular.module('PhoneGap')
    .factory('LocalStorage', ['$window', 'PhonegapReady', function ($window, PhonegapReady) {
		return {
			getItem: PhonegapReady(function (key) {
				return $window.localStorage.getItem(key);
			}),
			setItem: PhonegapReady(function (key, value) {
				$window.localStorage.setItem(key, value);
			}),
			removeItem: PhonegapReady(function (key) {
				$window.localStorage.removeItem(key);
			}),
			clear: PhonegapReady(function () {
				$window.localStorage.clear();
			}),
			key: PhonegapReady(function (index) {
				$window.localStorage.key(index);
			})
		};
    }]);