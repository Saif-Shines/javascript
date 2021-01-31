#! /usr/bin/env node
/**
 *The range(..) function takes a number as its first argument, representing
 the first number in a desired range of numbers. The second argument is also a
 number representing the end of the desired range (inclusive). If the second
 argument is omitted, then another function should be returned that expects
 that argument.
 */

function range(start, end) {
  if ((start && end) || end == 0) {
    let result = [];
    for (i = start; i <= end; i++) {
      result.push(i);
    }
    return result;
  }

  if (arguments[1] === undefined) {
    return function rangeTill(end) {
      let result = [];
      for (i = start; i <= end; i++) {
        result.push(i);
      }
      return result;
    };
  }
}

console.log(range(3, 3)); // [3]
console.log(range(3, 8)); // [3,4,5,6,7,8]
console.log(range(3, 0)); // []

var start3 = range(3);
var start4 = range(4);

console.log(start3(3)); // [3]
console.log(start3(8)); // [3,4,5,6,7,8]
console.log(start3(0)); // []
console.log(start4(6)); // [4,5,6]
