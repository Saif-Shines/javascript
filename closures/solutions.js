// Type JavaScript here and click "Run Code" or press Ctrl + s
console.log("Hello, world!");

// CHALLENGE 1
function createFunction() {
  function logsHello() {
    console.log("hello");
  }
  return logsHello;
}

// /*** Uncomment these to check your work! ***/
// const function1 = createFunction();
// function1(); // => should console.log('hello');

// CHALLENGE 2
function createFunctionPrinter(input) {
  let param = input;
  function printer() {
    console.log(param);
  }
  return printer;
}

// /*** Uncomment these to check your work! ***/
// const printSample = createFunctionPrinter('sample');
// printSample(); // => should console.log('sample');
// const printHello = createFunctionPrinter('hello');
// printHello(); // => should console.log('hello');

// CHALLENGE 3
function outer() {
  let counter = 0; // this variable is outside incrementCounter's scope
  function incrementCounter() {
    counter++;
    console.log("counter", counter);
  }
  return incrementCounter;
}

const willCounter = outer();
const jasCounter = outer();

// Uncomment each of these lines one by one.
// Before your do, guess what will be logged from each function call.

// /*** Uncomment these to check your work! ***/
// willCounter();
// willCounter();
// willCounter();

// jasCounter();
// willCounter();

function addByX(x) {}

// /*** Uncomment these to check your work! ***/
// const addByTwo = addByX(2);
// addByTwo(1); // => should return 3
// addByTwo(2); // => should return 4
// addByTwo(3); // => should return 5

// const addByThree = addByX(3);
// addByThree(1); // => should return 4
// addByThree(2); // => should return 5

// const addByFour = addByX(4);
// addByFour(4); // => should return 8
// addByFour(5); // => should return 9

// CHALLENGE 4
function addBy2(a) {
  return a + 2;
}

function once(func) {
  let counter = 0;
  let res = func(0);
  function resultFunc(a) {
    if (counter == 0) {
      counter++;
      res = func(a);
      return func(a);
    }
    return res;
  }
  return resultFunc;
}

/*** Uncomment these to check your work! ***/
const onceFunc = once(addBy2);
// console.log(`addBy2: ${addBy2(2)}`)
console.log(onceFunc(4)); // => should log 6
console.log(onceFunc(10)); // => should log 6
console.log(onceFunc(9001)); // => should log 6

// CHALLENGE 5
function after(count, func) {
  let counter = 1;
  function resultPrint() {
    if (counter == count) {
      func();
      return;
    }
    console.log("nothing");
    counter++;
  }
  return resultPrint;
}

/*** Uncomment these to check your work! ***/
const called = function () {
  console.log("hello");
};
const afterCalled = after(3, called);
afterCalled(); // => nothing is printed
afterCalled(); // => nothing is printed
afterCalled(); // => 'hello' is printed

// CHALLENGE 6
function delay(func, wait) {}

// CHALLENGE 7
function rollCall(names) {
  let arrayOfNames = names;
  let count = 0;
  function caller() {
    if (count < arrayOfNames.length) {
      console.log(arrayOfNames[count]);
      count++;
    } else {
      console.log(`Everyone accounted for`);
    }
  }
  return caller;
}

/*** Uncomment these to check your work! ***/
const rollCaller = rollCall(["Victoria", "Juan", "Ruth"]);
// console.log(`rollCall[names]: ${rollCall['Victoria','Juan','Ruth']}`)
rollCaller(); // => should log 'Victoria'
rollCaller(); // => should log 'Juan'
rollCaller(); // => should log 'Ruth'
rollCaller(); // => should log 'Everyone accounted for'

// CHALLENGE 8
function saveOutput(func, magicWord) {
  let Obj = {};
  let callback = func;
  let pass = magicWord;
  function addToObj(x) {
    if (pass == x) {
      return Obj;
    }
    Obj[x] = callback(x);
    return callback(x);
  }
  return addToObj;
}

/*** Uncomment these to check your work! ***/
const multiplyBy2 = function (num) {
  return num * 2;
};
const multBy2AndLog = saveOutput(multiplyBy2, "boo");
console.log(multBy2AndLog(2)); // => should log 4
console.log(multBy2AndLog(9)); // => should log 18
console.log(multBy2AndLog("boo")); // => should log { 2: 4, 9: 18 }

// CHALLENGE 9
function cycleIterator(array) {
  let count = -1;
  let limit = array;
  function returner() {
    if (count == array.length - 1) {
      count = 0;
      return array[count];
    }
    count++;
    return array[count];
  }
  return returner;
}

/*** Uncomment these to check your work! ***/
const threeDayWeekend = ["Fri", "Sat", "Sun"];
const getDay = cycleIterator(threeDayWeekend);
console.log(getDay()); // => should log 'Fri'
console.log(getDay()); // => should log 'Sat'
console.log(getDay()); // => should log 'Sun'
console.log(getDay()); // => should log 'Fri'

// CHALLENGE 10
function defineFirstArg(func, arg) {
  function resFunc(b) {
    return func(arg, b);
  }
  return resFunc;
}

/*** Uncomment these to check your work! ***/
const subtract = function (big, small) {
  return big - small;
};
const subFrom20 = defineFirstArg(subtract, 20);
console.log(subFrom20(5)); // => should log 15

// CHALLENGE 11
function dateStamp(func) {
  let resultObj = {};
  let funcResult = func;
  function retrnfn(val) {
    resultObj["date"] = Date().toString();
    resultObj["output"] = func(val);
    return resultObj;
  }
  return retrnfn;
}

/*** Uncomment these to check your work! ***/
const stampedMultBy2 = dateStamp((n) => n * 2);
console.log(stampedMultBy2(4)); // => should log { date: (today's date), output: 8 }
console.log(stampedMultBy2(6)); // => should log { date: (today's date), output: 12 }

// CHALLENGE 12
function censor() {
  let p;
  let obj = {};
  function scene(arg1, arg2) {
    if (arguments.length == 1) {
      p = arguments[0];
      for (let key in obj) {
        p = p.replace(key, obj[key]);
      }
      return p;
    }
    obj[arg1] = arg2;
  }
  return scene;
}

/*** Uncomment these to check your work! ***/
const changeScene = censor();
changeScene("dogs", "cats");
changeScene("quick", "slow");
console.log(changeScene("The quick, brown fox jumps over the lazy dogs.")); // => should log 'The slow, brown fox jumps over the lazy cats.'

// CHALLENGE 13
function createSecretHolder(secret) {
  let srt = secret;
  return {
    getSecret: () => {
      return srt;
    },
    setSecret: (x) => {
      srt = x;
    },
  };
}

/*** Uncomment these to check your work! ***/
obj = createSecretHolder(5);

console.log(obj.getSecret()); // => returns 5
console.log(obj.setSecret(2));
console.log(obj.getSecret()); // => returns 2

// CHALLENGE 14
function callTimes() {
  let count = 0;
  function called() {
    count++;
    console.log(count);
  }
  return called;
}

/*** Uncomment these to check your work! ***/
let myNewFunc1 = callTimes();
let myNewFunc2 = callTimes();

myNewFunc1(); // => 1
myNewFunc1(); // => 2
myNewFunc2(); // => 1
myNewFunc2(); // => 2

// CHALLENGE 15
function russianRoulette(num) {
  let limit = num;
  let count = 0;
  function playGame() {
    count++;
    if (count < num) {
      return "click";
    } else if (count == num) {
      return "bang";
    } else {
      return "reload to play again";
    }
  }
  return playGame;
}

/*** Uncomment these to check your work! ***/
const play = russianRoulette(3);
console.log(play()); // => should log 'click'
console.log(play()); // => should log 'click'
console.log(play()); // => should log 'bang'
console.log(play()); // => should log 'reload to play again'
console.log(play()); // => should log 'reload to play again'

// CHALLENGE 16
function average() {
  let count = 1;
  let sum = 0;
  let avg;
  function soFarAvg(arg) {
    if (arg == undefined) {
      if (count == 1) {
        count = 0;
        return 0;
      }
      return sum / count;
    }
    count++;
    sum = arg + sum;
    avg = sum / count;
    return avg;
  }
  return soFarAvg;
}

/*** Uncomment these to check your work! ***/
const avgSoFar = average();
console.log(avgSoFar()); // => should log 0
console.log(avgSoFar(4)); // => should log 4
console.log(avgSoFar(8)); // => should log 6
console.log(avgSoFar()); // => should log 6
console.log(avgSoFar(12)); // => should log 8
console.log(avgSoFar()); // => should log 8

// CHALLENGE 17
function makeFuncTester(arrOfTests) {
  function funcTest(callback) {
    for (let arr of arrOfTests) {
      if (callback(arr[0]) != arr[1]) {
        return false;
      }
      return true;
    }
  }
  return funcTest;
}

/*** Uncomment these to check your work! ***/
const capLastTestCases = [];
capLastTestCases.push(["hello", "hellO"]);
capLastTestCases.push(["goodbye", "goodbyE"]);
capLastTestCases.push(["howdy", "howdY"]);
const shouldCapitalizeLast = makeFuncTester(capLastTestCases);
const capLastAttempt1 = (str) => str.toUpperCase();
const capLastAttempt2 = (str) => str.slice(0, -1) + str.slice(-1).toUpperCase();
console.log(shouldCapitalizeLast(capLastAttempt1)); // => should log false
console.log(shouldCapitalizeLast(capLastAttempt2)); // => should log true

// CHALLENGE 18
function makeHistory(limit) {
  let count = -1;
  let strStack = [];
  function printHistory(str) {
    if (str == "undo") {
      count--;
      if (count == -1) {
        return `Nothing to undo`;
      }
      return `${strStack.pop()} undone`;
    }
    strStack.push(str);
    count++;
    return `${strStack[count]} done`;
  }
  return printHistory;
}

/*** Uncomment these to check your work! ***/
const myActions = makeHistory(2);
console.log(myActions("jump")); // => should log 'jump done'
console.log(myActions("undo")); // => should log 'jump undone'
console.log(myActions("walk")); // => should log 'walk done'
console.log(myActions("code")); // => should log 'code done'
console.log(myActions("pose")); // => should log 'pose done'
console.log(myActions("undo")); // => should log 'pose undone'
console.log(myActions("undo")); // => should log 'code undone'
console.log(myActions("undo")); // => should log 'nothing to undo'

// CHALLENGE 19
function blackjack(array) {
  let index = 0;
  return function dealer(num1, num2) {
    let hasLostGame = false;
    let currentSum = 0;
    return function player() {
      if (hasLostGame) {
        return `Your are done!`;
      }

      if (currentSum == 0) {
        currentSum = num1 + num2;
        return currentSum;
      }

      currentSum += array[index++];

      if (currentSum > 21) {
        hasLostGame = true;
        return `bust`;
      }

      return currentSum;
    };
  };
}


// /*** Uncomment these to check your work! ***/

// /*** DEALER ***/
// const deal = blackjack([2, 6, 1, 7, 11, 4, 6, 3, 9, 8, 9, 3, 10, 4, 5, 3, 7, 4, 9, 6, 10, 11]);

// /*** PLAYER 1 ***/
// const i_like_to_live_dangerously = deal(4, 5);
// console.log(i_like_to_live_dangerously()); // => should log 9
// console.log(i_like_to_live_dangerously()); // => should log 11
// console.log(i_like_to_live_dangerously()); // => should log 17
// console.log(i_like_to_live_dangerously()); // => should log 18
// console.log(i_like_to_live_dangerously()); // => should log 'bust'
// console.log(i_like_to_live_dangerously()); // => should log 'you are done!'
// console.log(i_like_to_live_dangerously()); // => should log 'you are done!'

// /*** BELOW LINES ARE FOR THE BONUS ***/

// /*** PLAYER 2 ***/
// const i_TOO_like_to_live_dangerously = deal(2, 2);
// console.log(i_TOO_like_to_live_dangerously()); // => should log 4
// console.log(i_TOO_like_to_live_dangerously()); // => should log 15
// console.log(i_TOO_like_to_live_dangerously()); // => should log 19
// console.log(i_TOO_like_to_live_dangerously()); // => should log 'bust'
// console.log(i_TOO_like_to_live_dangerously()); // => should log 'you are done!
// console.log(i_TOO_like_to_live_dangerously()); // => should log 'you are done!

// /*** PLAYER 3 ***/
// const i_ALSO_like_to_live_dangerously = deal(3, 7);
// console.log(i_ALSO_like_to_live_dangerously()); // => should log 10
// console.log(i_ALSO_like_to_live_dangerously()); // => should log 13
// console.log(i_ALSO_like_to_live_dangerously()); // => should log 'bust'
// console.log(i_ALSO_like_to_live_dangerously()); // => should log 'you are done!
// console.log(i_ALSO_like_to_live_dangerously()); // => should log 'you are done!
