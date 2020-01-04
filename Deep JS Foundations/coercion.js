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
    result:4+true+"2",
    info: "js computes left to right. Adding numbers, boolean and string"
  },
  {
    subtraction: `4-"4"`,
    result: 4-"4",
    info: "js computes left to right. subtracting a number and number in quotation mark"
  },
  {
    subtraction: `4-false`,
    result: 4-false,
    info: "js computes left to right. subtracting a number and boolean value"
  },
  {
    subtraction: `4-true`,
    result: 4-true,
    info: "js computes left to right. subtracting a number and boolean value"
  }
];
//Note: boolean value true is considerd as a literal number 1, where as false is considerd as liter number 0

abstractOperations.forEach(value => {
  showMsg(value);
});


let numbers =[-5000.25,-40000,-3,-2,-1,-0.5,0,0.5,1,2,3,40000,5000.25,];

showMsg(`===========Numbers to Boolean conversion==========`)
numbers.forEach(value => {
    showMsg(`Boolean(${value}) =`,Boolean(value));
  });

let strings = ['',' ','any string','2','-2'];
showMsg(`============Strings type Conversion=========`)
strings.forEach(value => {
    showMsg(`Boolean(${value}) =`,Boolean(value));
    showMsg(`Number(${value}) =`,Number(value));
  });

  let objects = [[],[[]],{},[{},{}]];

  showMsg(`============Objects type Conversion=========`)
  objects.forEach(value => {
    showMsg(`Boolean(${value}) =`,Boolean(value)); 
  });
//Keep in mind that typeof always returns a string type.
    
  showMsg(`============JS type System=========`)
    showMsg(`typeof typeof 26 =>`,typeof typeof 26) // 'string'
    showMsg(`typeof 'you are awesome string!' =>`,typeof 'you are awesome string!') // 'string'
    showMsg(`typeof 42 =>`,typeof 42)                 // 'number'
    showMsg(`typeof true =>`,typeof true)               // 'boolean'
    showMsg(`typeof undefined  =>`,typeof undefined )         // 'undefined'
    showMsg(`typeof {name: 'aman'} =>`,typeof {name: 'aman'})    // 'object'
    showMsg(`typeof [] =>`,typeof [])    // 'object'
    showMsg(`typeof Symbol() =>`,typeof Symbol())           // 'symbol'
    //============
    let foo = function funcExpName(params) {
        
    }
    function normalFunc(params) {
        
    }
    showMsg(`typeof function foo(){} =>`,typeof function foo(){})  // 'function'
    showMsg(`typeof foo =>`,typeof foo)  // 'function'
    showMsg(`typeof funcExpName =>`,typeof funcExpName)  // 'undefined'
    showMsg(`typeof normalFunc =>`,typeof normalFunc)  // 'undefined'



