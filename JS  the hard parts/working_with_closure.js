/**
 * Trainee: Tesfaye Belachew
 * Email: get.tesfaye.belachew@gmail.com
 * Remote Self Teaching Alama JS Full Stack Training Bootcamp
 * From Dec 14, 2019 to Feb 29, 2020
 * Date: Dec 31, 2019
 * Addis Ababa, Ethiopia
 */
//clousre challenge source: http://csbin.io/closures
let { log: print, info: showMsg } = console,
  count = 0,
  retult;
//closure
/**
 * Challenge 1
Create a function createFunction that creates and returns a function. 
When that created function is called, it should print "hello". 
 */

function createFunction() {
  return function name() {
    showMsg("hello");
  };
}

// UNCOMMENT THESE TO TEST YOUR WORK!
const function1 = createFunction();
function1();

/**
 * 
 *
Challenge 2
Create a function createFunctionPrinter that accepts one input 
and returns a function. When that created function is called, 
it should print out the input that was used when the function was created.

const printSample = createFunctionPrinter('sample');
const printHello = createFunctionPrinter('hello')
// now we'll call the functions we just created
printSample(); //should console.log('sample');
printHello(); //should console.log('hello');


 */

function createFunctionPrinter(input) {
  return function name() {
    showMsg(input);
  };
}

// UNCOMMENT THESE TO TEST YOUR WORK!
const printSample = createFunctionPrinter("sample");
printSample();
const printHello = createFunctionPrinter("hello");
printHello();

/**
 * Challenge 3
Examine the code for the outer function. Notice that we 
are returning a function and that function is using variables that are outside of its scope.
Uncomment those lines of code. Try to deduce the output before executing. 
 */

function outer() {
  let counter = 0; // this variable is outside incrementCounter's scope

  function incrementCounter() {
    counter++;
    showMsg("counter", counter);
  }
  return incrementCounter;
}

const willCounter = outer();
const jasCounter = outer();

// Uncomment each of these lines one by one.
// Before your do, guess what will be logged from each function call.

willCounter();
willCounter();
willCounter();

jasCounter();
willCounter();
/**
 * 
 * Challenge 4
Now we are going to create a function addByX 
that returns a function that will add an input by x. 
 */

// let input =0;
function addByX(x) {
  return function(input) {
    return showMsg(input + x);
  };
}

const addByTwo = addByX(2); //2

// now call addByTwo with an input of 1
addByTwo(1);

// now call addByTwo with an input of 2
addByTwo(2);

// const addByTwo = addByX(2);
addByTwo(1); //should return 3
addByTwo(2); //should return 4
addByTwo(3); //should return 5
const addByFour = addByX(4);
addByFour(4); //should return 8
addByFour(10); //should return 14

//--------------------------------------------------
// Extension
//--------------------------------------------------
/**
 * 
 * Extension: Challenge 5
Write a function once that accepts a callback as input and returns a function. 
When the returned function is called the first time, it should call the callback and 
return that output. If it is called any additional times, instead of calling 
the callback again it will simply return the output value from the first time it was called. 
TODO: rewrite the solutuon again 
*/
function once(cbFunc) {
  return function(input) {
    count++;
    if (count == 1) {
      retult = cbFunc(input);
      return cbFunc(input);
    } else return retult;
  };
}

const onceFunc = once(addByTwo);

// UNCOMMENT THESE TO TEST YOUR WORK!
console.log(onceFunc(4)); //should log 6
console.log(onceFunc(10)); //should log 6
console.log(onceFunc(9001)); //should log 6

/**
 * 
 *Extension: Challenge 6
Write a function after that takes the number of times the callback needs to be called 
before being executed as the first parameter and the callback as the second parameter. 
 */

let funcCallCounter = 1;
function after(countFuncCall, callbackFunc) {
  return function() {
    return funcCallCounter == countFuncCall
      ? callbackFunc()
      : funcCallCounter++;
  };
}

const called = function() {
  console.log("hello");
};
const afterCalled = after(3, called);

afterCalled(); // -> nothing is printed
afterCalled(); // -> nothing is printed
afterCalled(); // -> 'hello' is printed
/**
 * 
 * Extension: Challenge 7
Write a function delay that accepts a callback as the first parameter and 
the wait in milliseconds before allowing the callback to be invoked as the second parameter.
Any additional arguments after wait are provided to func when it is invoked. HINT: research setTimeout(); 
 */

function delay(cbFunc, wait) {
  setTimeout(() => {
    return cbFunc(wait);
  }, wait);
}
function waitFunc(wait) {
  return console.log(
    `callback function invoked after time delay of ${wait} milli seconds`
  );
}
delay(waitFunc, 3000);
/**
 * 
 *Extension: Challenge 8
Write a function rollCall that accepts an array of names and returns a function.
The first time the returned function is invoked, it should log the first name to the console. 
The second time it is invoked, it should log the second name to the console, and so on,
until all names have been called. Once all names have been called, it should log 'Everyone accounted for'. 
 */
let rollCallIndexCounter = 0;
function rollCall(names) {
  return function name() {
    console.log(names[rollCallIndexCounter]);
    return rollCallIndexCounter++;
  };
}

// UNCOMMENT THESE TO TEST YOUR WORK!
const rollCaller = rollCall(["Victoria", "Juan", "Ruth"]);
rollCaller(); // -> Should log 'Victoria'
rollCaller(); // -> Should log 'Juan'
rollCaller(); // -> Should log 'Ruth'
rollCaller(); // -> Should log 'Everyone accounted for'
