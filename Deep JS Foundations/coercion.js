/**
 * Trainee: Tesfaye Belachew
 * Email: get.tesfaye.belachew@gmail.com
 * Remote Self Teaching Alama JS Full Stack Training Bootcamp
 * From Dec 14, 2019 to Feb 29, 2020
 * Addis Ababa, Ethiopia
 * Date: Jan 04, 2020
 *
/**
 * Learning JS Coercion
 * Coercion: is a way expressing how dynamic languages like JS convert one data type into another
 * */
//Abstraction Value operation
let { log: showMsg } = console;
let obj = new Object();
let arrOfValues = [[], [1, 2, 3], [null, undefined]];
arrOfValues.forEach(value => {
  showMsg(`[${value}]` + `.toString() =>`, value.toString());
});

let abstractOperations = [
  {
    addition: `2+3+"test"`,
    result: 2 + 3 + "test",
    info: "js computes left to right. Adding numbers with string"
  },
  {
    addition: `true+3+"test"`,
    result: true + 3 + "test",
    info: "js computes left to right. Adding numbers, boolean and string"
  },
  {
    addition: `4+true+"2"`,
    result: 4 + true + "2",
    info: "js computes left to right. Adding numbers, boolean and string"
  },
  {
    subtraction: `4-"4"`,
    result: 4 - "4",
    info:
      "js computes left to right. subtracting a number and number in quotation mark"
  },
  {
    subtraction: `4-false`,
    result: 4 - false,
    info: "js computes left to right. subtracting a number and boolean value"
  },
  {
    subtraction: `4-true`,
    result: 4 - true,
    info: "js computes left to right. subtracting a number and boolean value"
  }
];
//Note: boolean value true is considerd as a literal number 1, where as false is considerd as liter number 0

abstractOperations.forEach(value => {
  showMsg(value);
});

let numbers = [
  -5000.25,
  -40000,
  -3,
  -2,
  -1,
  -0.5,
  0,
  0.5,
  1,
  2,
  3,
  40000,
  5000.25
];

showMsg(`===========Numbers to Boolean conversion==========`);
numbers.forEach(value => {
  showMsg(`Boolean(${value}) =`, Boolean(value));
});

let strings = ["", " ", "any string", "2", "-2"];
showMsg(`============Strings type Conversion=========`);
strings.forEach(value => {
  showMsg(`Boolean(${value}) =`, Boolean(value));
  showMsg(`Number(${value}) =`, Number(value));
});

let objects = [
  [],
  [[]],
  [[], [], [], []],
  [1, 2, 3],
  [null, undefined],
  {},
  [{}, {}]
];

showMsg(`============Objects type Conversion=========`);
objects.forEach(value => {
    //explict type conversion using Boolean constructor function
  showMsg(`Boolean(${value}) =`, Boolean(value));
  //explict type conversion using toString function and String contructor function
  showMsg(`${value}.toString()) =`, value.toString(),String(value));
});
//Keep in mind that typeof always returns a string type.

showMsg(`============JS type System=========`);
showMsg(`typeof typeof 26 =>`, typeof typeof 26); // 'string'
showMsg(
  `typeof 'you are awesome string!' =>`,
  typeof "you are awesome string!"
); // 'string'
showMsg(`typeof 42 =>`, typeof 42); // 'number'
showMsg(`typeof true =>`, typeof true); // 'boolean'
showMsg(`typeof undefined  =>`, typeof undefined); // 'undefined'
showMsg(`typeof {name: 'aman'} =>`, typeof { name: "aman" }); // 'object'
showMsg(`typeof [] =>`, typeof []); // 'object'
showMsg(`typeof Symbol() =>`, typeof Symbol()); // 'symbol'
//============
let foo = function funcExpName(params) {
  return;
};
function normalFunc(params) {
  return;
}
showMsg(`typeof function foo(){} =>`, typeof function foo() {}); // 'function'
showMsg(`typeof foo =>`, typeof foo); // 'function'
showMsg(`typeof funcExpName =>`, typeof funcExpName); // 'undefined'
showMsg(`typeof normalFunc =>`, typeof normalFunc); // 'function'

//valueof and tostring functions

showMsg(`============valueOf and toString JS functions=========`);
showMsg(`valueOf function foo(){} =>`, function foo() {}.valueOf());
showMsg(`valueOf foo =>`, foo.valueOf());
//showMsg(`valueOf funcExpName =>`,funcExpName.valueOf() )
showMsg(`valueOf normalFunc =>`, normalFunc.valueOf());

showMsg(`foo.toString() =>`, foo.toString());
showMsg(`normalFunc.toString() =>`, normalFunc.toString());

showMsg(`============toNumber Coercion=========`);
listOfValues = [
  "",
  "0",
  "-0",
  "  008 ",
  "3.14159",
  "0.",
  ".0",
  ".",
  "0xaf",
  false,
  true,
  NaN,
  undefined,
  null,
  { arr: ["1", "2"] },
  {},
  [],
  [[], {}]
];
listOfValues.forEach(value => {
  showMsg(`Number(${value}) =`, Number(value));
});

//falsy and truthy values
let falsyValues = ["", 0, +0, -0, null, NaN, false, undefined];
let truthyValues = [
  "any string different from empty string",
  28,
  { a: "A" },
  {},
  [],
  [1, 2, [9]],
  true,
  foo
];
[...falsyValues, ...truthyValues].forEach(value => {
    //explict type conversion using Boolean constructor function
  showMsg({ value, valueToBoolean: Boolean(value) });
});

//explicit and implict type coercion
foo =+"123";//the + unary operator here, explicitily converts the string into number

showMsg({foo})
showMsg(`Number('123') =>`,Number('123'))//explicit type conversion from string to number using
//Number constructor function
showMsg(`!!foo =>`,!!foo)//using negate unary operator twice
//explicitly implict coercion
let baz =foo?true:false;
showMsg({baz})

/**
 * [].toString() =>
[1,2,3].toString() => 1,2,3
[,].toString() => ,
{ addition: '2+3+"test"',
  result: '5test',
  info: 'js computes left to right. Adding numbers with string' }
{ addition: 'true+3+"test"',
  result: '4test',
  info:
   'js computes left to right. Adding numbers, boolean and string' }
{ addition: '4+true+"2"',
  result: '52',
  info:
   'js computes left to right. Adding numbers, boolean and string' }
{ subtraction: '4-"4"',
  result: 0,
  info:
   'js computes left to right. subtracting a number and number in quotation mark' }
{ subtraction: '4-false',
  result: 4,
  info:
   'js computes left to right. subtracting a number and boolean value' }
{ subtraction: '4-true',
  result: 3,
  info:
   'js computes left to right. subtracting a number and boolean value' }
===========Numbers to Boolean conversion==========
Boolean(-5000.25) = true
Boolean(-40000) = true
Boolean(-3) = true
Boolean(-2) = true
Boolean(-1) = true
Boolean(-0.5) = true
Boolean(0) = false
Boolean(0.5) = true
Boolean(1) = true
Boolean(2) = true
Boolean(3) = true
Boolean(40000) = true
Boolean(5000.25) = true
============Strings type Conversion=========
Boolean() = false
Number() = 0
Boolean( ) = true
Number( ) = 0
Boolean(any string) = true
Number(any string) = NaN
Boolean(2) = true
Number(2) = 2
Boolean(-2) = true
Number(-2) = -2
============Objects type Conversion=========
Boolean() = true
.toString()) =
Boolean() = true
.toString()) =
Boolean(,,,) = true
,,,.toString()) = ,,,
Boolean(1,2,3) = true
1,2,3.toString()) = 1,2,3
Boolean(,) = true
,.toString()) = ,
Boolean([object Object]) = true
[object Object].toString()) = [object Object]
Boolean([object Object],[object Object]) = true
[object Object],[object Object].toString()) = [object Object],[object Object]
============JS type System=========
typeof typeof 26 => string
typeof 'you are awesome string!' => string
typeof 42 => number
typeof true => boolean
typeof undefined  => undefined
typeof {name: 'aman'} => object
typeof [] => object
typeof Symbol() => symbol
typeof function foo(){} => function
typeof foo => function
typeof funcExpName => undefined
typeof normalFunc => function
============valueOf and toString JS functions=========
valueOf function foo(){} => function foo(){}
valueOf foo => function funcExpName(params) {
        return;
    }
valueOf normalFunc => function normalFunc(params) {
        return;
    }
foo.toString() => function funcExpName(params) {
        return;
    }
normalFunc.toString() => function normalFunc(params) {
        return;
    }
    ============toNumber Coercion=========
Number() = 0
Number(0) = 0
Number(-0) = 0
Number(  008 ) = 8
Number(3.14159) = 3.14159
Number(0.) = 0
Number(.0) = 0
Number(.) = NaN
Number(0xaf) = 175
Number(false) = 0
Number(true) = 1
Number(NaN) = NaN
Number(undefined) = NaN
Number(null) = 0
Number([object Object]) = NaN
Number([object Object]) = NaN
Number() = 0
Number(,[object Object]) = NaN

{ value: '', valueToBoolean: false }
{ value: 0, valueToBoolean: false }
{ value: 0, valueToBoolean: false }
{ value: -0, valueToBoolean: false }
{ value: null, valueToBoolean: false }
{ value: NaN, valueToBoolean: false }
{ value: false, valueToBoolean: false }
{ value: undefined, valueToBoolean: false }
{ value: 'any string different from empty string',
  valueToBoolean: true }
{ value: 28, valueToBoolean: true }
{ value: { a: 'A' }, valueToBoolean: true }
{ value: {}, valueToBoolean: true }
{ value: [], valueToBoolean: true }
{ value: [ 1, 2, [ 9 ] ], valueToBoolean: true }
{ value: true, valueToBoolean: true }
{ value: [Function: funcExpName], valueToBoolean: true }

 */
