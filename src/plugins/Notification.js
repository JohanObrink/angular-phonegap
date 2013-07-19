'use strict';

angular.module('PhoneGap')
 	.factory('Notification', ['$window', '$rootScope', 'PhonegapReady', function ($window, $rootScope, PhonegapReady) {
	    return {
			alert: PhonegapReady(function (message, alertCallback, title, buttonName) {
				$window.navigator.notification.alert(message, function () {
					var that = this,
					args = arguments;

					$rootScope.$apply(function () {
						alertCallback.apply(that, args);
					});
				}, title, buttonName);
			}),
			confirm: PhonegapReady(function (message, confirmCallback, title, buttonLabels) {
				$window.navigator.notification.confirm(message, function () {
					var that = this,
					args = arguments;

					$rootScope.$apply(function () {
						confirmCallback.apply(that, args);
					});
				}, title, buttonLabels);
			}),
			beep: PhonegapReady(function (times) {
				$window.navigator.notification.beep(times);
			}),
			vibrate: PhonegapReady(function (milliseconds) {
				$window.navigator.notification.vibrate(milliseconds);
			})
		};
  }]);