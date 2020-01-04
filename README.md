# Alama-JS-Fullstack-Bootcamp
Alama Javascript Fullstack Bootcamp Training
## JS The Recent Parts Video Lecture by Kyle Simpson
    Personal Note:By Tesfaye Belachew 
## Day 1 Practice
    Watched half of design for developers video by Sarah Drasner.
## Day 2 Practice		 
    The video is not a complete training and hence you need to surf for additional features whenever
    you need to extend your awareness for the available new features
### Interpolated string literals=> aka template strings
### Practiced template interpolation:
-   By using variables, function calls, immediately invoked functions(***IIfs***), even template literals as values to be placed in the template literals' expression place holder.

### Challenges
-   I face while practicing template literals is that Kyle said we can place anything inside the place holders ${}, for instance he said we can put a whole js program inside the curly braces(```${}```). I tried a for loop to be interpolated but it couldn't work. Anyone who understands what Kyle want to teach in his template string video around 5:40?
- Didn't practiced using literals with inline markdown(to be practiced with the front end markdown techs)
- Tagged function for string preprocessing. Couldn't understand them. Would you please list npm packages related to tagged function?

### Destructuring:
-  Assign or pull a value from an object(object, array, JSON API)
-  We can assign a default  value as a fall back if we  couldn't get from the object we want to pull a value
-  We can also give a new name for the value we want to pull from an object
-  Using destructuring pattern to swap elements without using temporary variable
-  Parameter destructuring(taking only the parameter we want form the object passed to a function
-  Using graceful fallback/default value assignment  while attempting un existing value  ```data || [],   data || {} ```
-  Nested array/object destructuring
-  Note: with arrays order of destructuring matters by in objects doesn't
-  Using parenthesis () in order to avoid Overloading of curly braces(block scoping) is a must in object destructuring, hence you should embrace the whole object destructuring pattern inside braces i.e ```({a:first,b:second}=obj;)``` or Use temporary variable assignment along with the destructuring pattern as : ```let temp ={a:first,b:second}=obj;```
-   Destructuring an array pattern inside and object pattern or vice versa
-   Destructuring object inside another object or array inside another array
-   Named arguments using destructuring pattern for function parameters

    **TODO**: readme to be styled using github's markdown. Added github markdwon preview package on my ide vs code and it makes it easy for me to preview it before i push the code to the remote repo. Marked the readme file but you can further use othe markdowns like code block to style your readme file.
    
## Day 3 Practice
-   Reviewed GitHub markdown syntax and updated my GitHub repo readme file markdown so that I keep formatted personal notes while practicing JS the recent parts. To preview my readme file I installed GitHub markdown preview to my vs code ide
- Tried to understand all about named argument in JS
    -   There are no named argument in JS but we can use parameter destructuring pattern to use name arguments
		-   Pros and cons of named argument
			- **Pros**: you don’t need to worry about the order of arguments
			- **Cons**: You need to remember the name of the arguments
			- **Solution**: to use naming conventions strictly like if a function take callback name it cb everywhere in your code etc
		
	- **Note**d: using named argument is common and widely used feature of object destructuring.
	- Destructuring Objects Restructuring
### Challenges
-   Unable to push/pull/fetch code from remote repository while working in proxy based internet connection. Configuration of git to work with proxy setting
-   Frustrated at first but finally got a solution after googling for the problem I face.  Just by using ```
		git config --global http.proxy http://localhost:61521```
- Couldn't work with flat and flatMap array methods. They return TypeError: undefined function(may this be due to my node version?)
Eventually I have got a solution by defining a prototype property for array object as: 
```
//Array.prototype.flatMap() polyfill: source: https://blog.travismclarke.com/post/flatmap-vs-map/
if (!Array.prototype.flatMap) {
  Object.defineProperty(Array.prototype, "flatMap", {
    value: function(callback, thisArg) {
      return this.map(callback, thisArg).reduce((a, b) => a.concat(b), []);
    },
    configurable: true,
    writable: true
  });
} 
//Array.prototype.flat 
Object.defineProperty(Array.prototype, "flat", {
  value: function(depth = 1) {
    return this.reduce(function(flat, toFlatten) {
      return flat.concat(
        Array.isArray(toFlatten) && depth > 1
          ? toFlatten.flat(depth - 1)
          : toFlatten
      );
    }, []);
  }
});

```

	
 - Using array methods
 - Find and findIndex
	***Find method***
 - Cons of find method
 - It returns undefined when it doesn't find a value that match the condition returned by the callback function passed to it. This can create an ambiguity whether it returns an undefined value from the array that exists as an element or if it returns it as there is no a matching element
-   To solve this ambiguity we can use findIndex method that returns the index of the matching element or -1 if there is no matching element
	   findIndex method did the same with indexOf method but with callback as an argument
## Day 4 Practice ##
### JS The Hard Parts Video By Will Sentance(CodeSmith CEO)
 Practiced [callbacks](http://csbin.io/callbacks), [Closure](http://csbin.io/closures) and [OOP with JS](http://csbin.io/oop)  Challenges
 
**Principles of JS Program**

  ***Global & local execution Context***

  ***Global execution context***: 
  - is generated as soon as we start running JS code
		Local Execution Context: is generated in block scope like function call and block variable declaration
The thread in JavaScript (JS is single thread Programming language)
	- Single threaded (one thing at a time) 
	- Synchronous or Asynchronous execution
Function default return value is undefined

***Running | invoking |calling a function***

When you execute a function you create a new execution context comprising;

	1. Thread Of execution (we go through the code in the function line by line) 
	2. A local memory ('Variable environment') where anything defined in the function is stored 

**Global memory /local memory** 
***Call Stack***: used to keep track of execution order 
	- It keeps track of the functions being called in JS 
	- Tracks which execution context we are in - that is, what 
	function is currently being run and where to return to 
	after an execution context is popped off the stack 
	
	One global execution context, multiple function contexts 
	
	
***Functional Programming***: is a paradigm or a means of structuring and thinking about how you code at scale.
Functional programming core features:

	1. Pure functions (no side effects) 
	2. 'Higher order functions' - highly valuable tool 
	3. Don't repeat yourself/DRY: the master rule for using functions/
	4. Generalize your function so that you DRY

Callbacks and higher order functions:
Checkout the challenge exercise from [csbin](http://csbin.io/callbacks)

# Day 6 Practice #

Y. I completed solving/exercising all challenges and their extensions on:
  - [Callbacks and Higher order functions](https://github.com/tesfanur/alama-js-fullstack-bootcamp/blob/master/JS%20%20the%20hard%20parts/callbacks_higher_order_fns__csbin_challenges.js),
  - [Closures](https://github.com/tesfanur/alama-js-fullstack-bootcamp/blob/master/JS%20%20the%20hard%20parts/closure_csbin_challenges.js), and 
  - [Different ways of OOP implementation with JS](https://github.com/tesfanur/alama-js-fullstack-bootcamp/blob/master/JS%20%20the%20hard%20parts/OOP/oop_csbin_challenges.js) on  http://csbin.io.

***Note*** :  Challenge on OOP EXTENSION: Mixins to be solved today.

In addition to that I have also studied topics on the Deep JS Foundations up to closure

C. Vague challenge description on closures particularly Extension challenge number 5.

T. I am going to continue studying contents on the Deep JS Foundations.
## Day 8 Practice ##
  Studied JS coercion. ***Coercion*** is a way of expressing how dynamic languages like JS convert one data type into another. There are two types of Type Coercion. Implicit and Explicit. If we use Primitive Data Type constuctor functions like Number and Boolean we are doing explicit coercion. Using toString object function is also categorized under this.
  If we try JS to coerce by itself for example ***1+true*** , since we didn't explicitly tell JS to convert the type to a specific data type, it tries to convert to its simplest form. This way of coercion is known as implicit coercion. Here below are list of examples of the two types of coercion.

  ``` 

  [].toString() =>
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
,,,.toString()) = ,,, ,,,
Boolean(1,2,3) = true
1,2,3.toString()) = 1,2,3 1,2,3
Boolean(,) = true
,.toString()) = , ,
Boolean([object Object]) = true
[object Object].toString()) = [object Object] [object Object]
Boolean([object Object],[object Object]) = true
[object Object],[object Object].toString()) = [object Object],[object Object] [object Object],[object Object]
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
valueOf function foo(){} => function foo() {}
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

```
### Tilde(~) operator ###

```
 for (let i = 0; i <=5; i++) {
     showMsg(`~${i} =`, `-(${i}+1) =`,~i)
 }
/**
  * tilde(~) operator does the mathematical formula ~N -> -(N+1)
  * the for loop above then returns
   
~0 = -(0+1) = -1
~1 = -(1+1) = -2
~2 = -(2+1) = -3
~3 = -(3+1) = -4
~4 = -(4+1) = -5
~5 = -(5+1) = -6
  * 
  */
  ```

