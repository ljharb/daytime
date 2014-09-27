/*jslint node: true */

module.exports = (function () {
	'use strict';

	var toStr = Object.prototype.toString;
	var dateClass = '[object Date]';

	return function daytime(day, time) {
		if (toStr.call(day) !== dateClass || toStr.call(time) !== dateClass) {
			throw new TypeError('both day and time must be Date objects');
		}

		return new Date(
			day.getFullYear(),
			day.getMonth(),
			day.getDate(),
			time.getHours(),
			time.getMinutes()
		);
	};
}());

