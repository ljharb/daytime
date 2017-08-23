'use strict';

require('es5-shim');

var test = require('tape');
var daytime = require('./index');

var toStr = Object.prototype.toString;
var type = function (item) {
	return toStr.call(item).slice(8, -1).toLowerCase();
};

test('argument validation', function (t) {
	var error = new TypeError('both day and time must be Date objects');
	var date = new Date();
	var args = [
		'undefined',
		null,
		true,
		false,
		'foo',
		{},
		[],
		/a/g,
		function () {}
	];

	var cases = [];
	args.forEach(function (arg) {
		cases.push([date, arg], [arg, date]);
		args.forEach(function (arg2) {
			cases.push([arg === 'undefined' ? undefined : arg, arg2 === 'undefined' ? undefined : arg2]);
			if (arg !== arg2) {
				cases.push([arg2, arg]);
			}
		});
	});

	t.plan(cases.length + 1);
	t.equal(cases.length, 171);
	cases.forEach(function (aCase) {
		t['throws'](function () {
			daytime.apply(null, aCase);
		}, error, aCase.map(type).join(' + '));
	});
	t.end();
});

test('combining dates', function (t) {
	var day = new Date('1/2/3');
	var time = new Date('11/11/1111 11:11');
	var expected = new Date('1/2/3 11:11');

	var actual = daytime(day, time);

	t.plan(6);

	t.notEqual(day.getTime(), expected.getTime(), 'day does not match expected');
	t.notEqual(time.getTime(), expected.getTime(), 'time does not match expected');

	t.notEqual(actual, day, 'actual is not a mutated `day` Date');
	t.notEqual(actual, time, 'actual is not a mutated `time` Date');

	t.equal(type(actual), type(expected), 'actual is a Date object');
	t.equal(actual.getTime(), expected.getTime(), 'actual matches expected');

	t.end();
});

