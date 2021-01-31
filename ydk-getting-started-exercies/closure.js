#! /usr/bin/env node
/**
 *The range(..) function takes a number as its first argument, representing
 the first number in a desired range of numbers. The second argument is also a
 number representing the end of the desired range (inclusive). If the second
 argument is omitted, then another function should be returned that expects
 that argument.
 */



function range(start, end) {
	let range = [];
	if (start && end) return printRange(start, end);

	function printRange(start,end) {
		for (let i = start; i <= end, i++) {
			range.push(i);
		}
		console.log(range);
	}

	if (!end) {
		return printRange(start);
	}
}

range(3, 3); // [3]
range(3, 8); // [3,4,5,6,7,8]
range(3, 0); // []

var start3 = range(3);
var start4 = range(4);

start3(3); // [3]
start3(8); // [3,4,5,6,7,8]
start3(0); // []

start4(6); // [4,5,6]
