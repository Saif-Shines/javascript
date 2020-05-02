// Type JavaScript here and click "Run Code" or press Ctrl + s
console.log("Hello, world!");

// Challenge 1
function addTwo(num) {
  return num + 2;
}

// To check if you've completed it, uncomment these console.logs!
console.log(addTwo(3));
console.log(addTwo(10));

// Challenge 2
function addS(word) {
  return `${word}s`;
}

// uncomment these to check your work
console.log(addS("pizza"));
console.log(addS("bagel"));

// Challenge 3
function map(array, callback) {
  let newArray = [];
  array.forEach((el) => {
    newArray.push(addTwo(el));
  });
  return newArray;
}

console.log(map([1, 2, 3], addTwo));

// Challenge 4

let alphabet = "";
const letters = ["a", "b", "c", "d"];

function forEach(array, callback) {
  array.forEach((el) => {
    callback(el);
  });
}

forEach(letters, function (char) {
  alphabet += char;
});

console.log(alphabet);

// see for yourself if your forEach works!

// Challenge 5
function mapWith(array, callback) {
  let mapWithArray = [];
  for (let i = 0; i < array.length; i++) {
    mapWithArray.push(addTwo(array[i]));
  }
  return mapWithArray;
}

console.log(mapWith([1, 2, 3], addTwo));

// Challenge 6
const nums = [1, 2, 3];

const multiplyAllElements = function (a, b) {
  return a * b;
};

function reduce(array, callback, initialValue) {
  let result = initialValue;
  array.forEach((el) => {
    result = callback(el, result);
  });
  return result;
}

console.log(reduce(nums, multiplyAllElements, 1));

// Challenge 7
// const intersection = (xs, ys) => xs.filter(x => ys.indexOf(x) > -1);
// intersection([5, 10, 15, 20, 3], [15, 88, 3, 1, 5, 7]); //=> [5, 15, 3]

// const intersectAll = (...xss) => xss.reduce(intersection);
// intersectAll([5, 10, 15, 20, 3], [15, 88, 3, 1, 5, 7],  [1, 10, 15, 5, 20]);

const intersect = (acc, br) => {
  return acc.filter((a) => br.includes(a));
};

function intersection(...arrays) {
  return arrays.reduce(intersect);
}

console.log(
  intersection([5, 10, 15, 20, 21], [15, 88, 1, 5, 7], [1, 10, 15, 5, 20])
);
// should log: [5, 15]

// Challenge 8

// union(...arrays) {
//   return reduce(
//     arrays,
//     (a, b) => {
//       let result = Array.from(a);
//       for (let elem of b) {
//         if (a.indexOf(elem) == -1) {
//           result.push(elem);
//         }
//       }
//       return result;
//     },
//     []
//   );
// }

const unionIt = (acc, cur) => {
  let result = Array.from(acc);
  // console.log(`Result initially: ${result}`)
  for (let el of cur) {
    // console.log(`Value of el: ${el}`);
    // console.log(`Value of cur: ${cur}`)
    // console.log(`Value of acc.indexOf(el): ${acc.indexOf(el)}`)
    if (acc.indexOf(el) == -1) {
      result.push(el);
      // console.log(`result:${result}`);
    }
  }
  return result;
};

function union(...arrays) {
  return arrays.reduce(unionIt, []);
}

console.log(union([5, 10, 15], [15, 88, 1, 5, 7], [100, 15, 10, 1, 5]));
// should log: [5, 10, 15, 88, 1, 7, 100]

// Challenge 9

function objOfMatches(array1, array2, callback) {
  let resultObj = {};
  let Temp;
  for (let i = 0; i < array1.length; i++) {
    Temp = callback(array1[i]);
    if (Temp == array2[i]) resultObj[array1[i]] = Temp;
  }
  return resultObj;
}

console.log(
  objOfMatches(
    ["hi", "howdy", "bye", "later", "hello"],
    ["HI", "Howdy", "BYE", "LATER", "hello"],
    function (str) {
      return str.toUpperCase();
    }
  )
);
// should log: { hi: 'HI', bye: 'BYE', later: 'LATER' }

// Challenge 10
function multiMap(arrVals, arrCallbacks) {
  let resultObj = {};
  let resultArray = [];
  // for(let j=0; j<arrCallbacks.length;j++){
  for (let i = 0; i < arrVals.length; i++) {
    resultArray.push(arrCallbacks[i](arrVals[i]));
    resultObj[arrVals[i]] = resultArray;
  }
  return resultObj;
}

console.log(
  multiMap(
    ["catfood", "glue", "beer"],
    [
      function (str) {
        return str.toUpperCase();
      },
      function (str) {
        return str[0].toUpperCase() + str.slice(1).toLowerCase();
      },
      function (str) {
        return str + str;
      },
    ]
  )
);

// should log: { catfood: ['CATFOOD', 'Catfood', 'catfoodcatfood'], glue: ['GLUE', 'Glue', 'glueglue'], beer: ['BEER', 'Beer', 'beerbeer'] }

// Challenge 11
function objectFilter(obj, callback) {
  let resultObj = {};
  for (let each_attribute in obj) {
    if (each_attribute.toUpperCase() === callback(obj[each_attribute])) {
      resultObj[each_attribute] = obj[each_attribute];
    }
  }
  return resultObj;
}

const cities = {
  London: "LONDON",
  LA: "Los Angeles",
  Paris: "PARIS",
};

console.log(objectFilter(cities, (city) => city.toUpperCase())); // Should log { London: 'LONDON', Paris: 'PARIS'}

// Challenge 12
function majority(array, callback) {
  let nTrue = 0,
    nFalse = 0;
  let result;
  for (let num of array) {
    if (callback(num)) {
      nTrue++;
      // console.log(`nTrue: ${nTrue}`);
    } else {
      nFalse++;
      // console.log(`nFalse: ${nFalse}`);
    }
  }
  if (nTrue == nFalse) return false;
  return true;
}

/*** Uncomment these to check your work! ***/
const isOdds = function (num) {
  return num % 2 === 1;
};
console.log(majority([1, 2, 3, 4, 5], isOdds)); // should log: true
console.log(majority([2, 3, 4, 5], isOdds)); // should log: false

// Challenge 13
function prioritize(array, callback) {}

// /*** Uncomment these to check your work! ***/
// const startsWithS = function(str) { return str[0] === 's' || str[0] === 'S'; };
// console.log(prioritize(['curb', 'rickandmorty', 'seinfeld', 'sunny', 'friends'], startsWithS)); // should log:
// ['seinfeld', 'sunny', 'curb', 'rickandmorty', 'friends']

// Challenge 14
function countBy(array, callback) {
  let Obj = {};
  for (let el of array) {
    let key = callback(el);
    Obj[key] = Obj[key] + 1 || 1;
  }
  return Obj;
}

/*** Uncomment these to check your work! ***/
console.log(
  countBy([1, 2, 3, 4, 5, 6, 7], function (num) {
    if (num % 2 === 0) return "even";
    else return "odd";
  })
); // should log: { odd: 3, even: 2 }

// Challenge 15
function groupBy(array, callback) {
  let Obj = {};
  for (let el of array) {
    let key = callback(el);
    if (Obj[key] == undefined) {
      Obj[key] = [];
    }
    Obj[key].push(el);
  }
  return Obj;
}

/*** Uncomment these to check your work! ***/
const decimals = [1.3, 2.1, 2.4, 3.5];
const floored = function (num) {
  return Math.floor(num);
};
console.log(groupBy(decimals, floored)); // should log: { 1: [1.3], 2: [2.1, 2.4] }

// Challenge 16
function goodKeys(obj, callback) {
  let resultArray = [];
  for (const key in obj) {
    if (callback(obj[key]) == true) resultArray.push(key);
  }
  return resultArray;
}

/*** Uncomment these to check your work! ***/
const sunny = {
  mac: "priest",
  dennis: "calculating",
  charlie: "birdlaw",
  dee: "bird",
  frank: "warthog",
};
const startsWithBird = function (str) {
  return str.slice(0, 4).toLowerCase() === "bird";
};
console.log(goodKeys(sunny, startsWithBird)); // should log: ['charlie', 'dee']

// Challenge 17
function commutative(func1, func2, value) {
  if (func1(func2(value)) == func2(func1(value))) return true;
  return false;
}

/*** Uncomment these to check your work! ***/
const multBy3 = (n) => n * 3;
const divBy4 = (n) => n / 4;
const subtract5 = (n) => n - 5;
console.log(commutative(multBy3, divBy4, 11)); // should log: true
console.log(commutative(multBy3, subtract5, 10)); // should log: false
console.log(commutative(divBy4, subtract5, 48)); // should log: false

// Challenge 18
function objFilter(obj, callback) {
  let resultObj = {};
  for (let key in obj) {
    if (obj[key] == callback(key)) {
      resultObj[key] = callback(key);
    }
  }
  return resultObj;
}

/*** Uncomment these to check your work! ***/
const startingObj = {};
startingObj[6] = 3;
startingObj[2] = 1;
startingObj[12] = 4;
const half = (n) => n / 2;
console.log(objFilter(startingObj, half)); // should log: { 2: 1, 6: 3 }

// Challenge 19
function rating(arrOfFuncs, value) {
  let total = arrOfFuncs.length;
  let trues = 0;
  for (let fn of arrOfFuncs) {
    if (fn(value) == true) ++trues;
  }
  return (trues / total) * 100;
}

/*** Uncomment these to check your work! ***/
const isEven = (n) => n % 2 === 0;
const greaterThanFour = (n) => n > 4;
const isSquare = (n) => Math.sqrt(n) % 1 === 0;
const hasSix = (n) => n.toString().includes("6");
const checks = [isEven, greaterThanFour, isSquare, hasSix];
console.log(rating(checks, 64)); // should log: 100
console.log(rating(checks, 66)); // should log: 75

// Challenge 20
function pipe(arrOfFuncs, value) {
  let fnResult = value;
  for (let fn of arrOfFuncs) {
    fnResult = fn(fnResult);
  }
  return fnResult;
}

/*** Uncomment these to check your work! ***/
const capitalize = (str) => str.toUpperCase();
const addLowerCase = (str) => str + str.toLowerCase();
const repeat = (str) => str + str;
const capAddlowRepeat = [capitalize, addLowerCase, repeat];
console.log(pipe(capAddlowRepeat, "cat")); // should log: 'CATcatCATcat'

// Challenge 21
function highestFunc(objOfFuncs, subject) {
  let resultObj = {};
  for (let key in objOfFuncs) {
    resultObj[key] = objOfFuncs[key](subject);
  }
  return Object.keys(resultObj).reduce((a, b) =>
    resultObj[a] > resultObj[b] ? a : b
  );
}

/*** Uncomment these to check your work! ***/
const groupOfFuncs = {};
groupOfFuncs.double = (n) => n * 2;
groupOfFuncs.addTen = (n) => n + 10;
groupOfFuncs.inverse = (n) => n * -1;
console.log(highestFunc(groupOfFuncs, 5)); // should log: 'addTen'
console.log(highestFunc(groupOfFuncs, 11)); // should log: 'double'
console.log(highestFunc(groupOfFuncs, -20)); // should log: 'inverse'

// Challenge 22
function combineOperations(startVal, arrOfFuncs) {
  let resultCallback = startVal;
  for (let func of arrOfFuncs) {
    resultCallback = func(resultCallback);
  }
  return resultCallback;
}

function add100(num) {
  return num + 100;
}

function divByFive(num) {
  return num / 5;
}

function multiplyByThree(num) {
  return num * 3;
}

const multiplyFive = (n) => n * 5;
const addTen = (n) => n + 10;

/*** Uncomment these to check your work! ***/
console.log(combineOperations(0, [add100, divByFive, multiplyByThree])); // Should output 60 -->
console.log(combineOperations(0, [divByFive, multiplyFive, addTen])); // Should output 10

// Challenge 23
function myFunc(array, callback) {
  for (let el of array) {
    if (callback(el) == true) return array.indexOf(el);
  }
  return -1;
}

const numbers = [2, 3, 6, 64, 10, 8, 12];
const evens = [2, 4, 6, 8, 10, 12, 64];

function isOdd(num) {
  return num % 2 !== 0;
}

/*** Uncomment these to check your work! ***/
console.log(myFunc(numbers, isOdd)); // Output should be 1
console.log(myFunc(evens, isOdd)); // Output should be -1

// Challenge 24
function myForEach(array, callback) {
  for (let el of array) {
    callback(el);
  }
}

let sum = 0;

function addToSum(num) {
  sum += num;
}

/*** Uncomment these to check your work! ***/
const numss = [1, 2, 3];
myForEach(numss, addToSum);
console.log(sum); // Should output 6
