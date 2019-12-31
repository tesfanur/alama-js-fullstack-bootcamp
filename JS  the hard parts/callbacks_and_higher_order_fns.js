// Type JavaScript here and click "Run Code" or press Ctrl + s
//callange source: http://csbin.io/callbacks
console.log("Hello, world!");

// Challenge 1
function addTwo(num) {
  return num + 2;
}
function multiplyByTwo(num) {
  return num * 2;
}

// To check if you've completed it, uncomment these console.logs!
console.log(`addTwo(3) =`, addTwo(3));
console.log(`addTwo(10) =`, addTwo(10));

// Challenge 2
function addStoAWord(word) {
  return word + "s";
}

// uncomment these to check your work
console.log(`addStoAWord('pizza') =`, addStoAWord("pizza"));
console.log(`addStoAWord('bagel') =`, addStoAWord("bagel"));

// Challenge 3
function map(array, callback) {
  let tempArr = [];
  for (let i = 0; i < array.length; i++) {
    tempArr.push(callback(array[i]));
  }
  return tempArr;
}

console.log(`map([1, 2, 3], addTwo) =`, map([1, 2, 3], addTwo));
console.log(`map([1, 2, 3], multiplyByTwo) =`, map([1, 2, 3], multiplyByTwo));

// Challenge 4
/*
The function forEach takes an array and a callback, 
and runs the callback on each element of the array. 
forEach does not return anything.
let alphabet = '';
const letters = ['a', 'b', 'c', 'd'];
forEach(letters, function(char) {
  alphabet += char;
});
console.log(alphabet);   //prints 'abcd'

*/
let updatedArr = [];
function forEach(array, callback) {
  let tempArr = [];
  for (let i = 0; i < array.length; i++) {
    tempArr.push(callback(array[i]));
  }
  updatedArr = [...tempArr];
  // return tempArr;
}
console.log(
  `forEach([1,2,3],multiplyByTwo) =`,
  forEach([1, 2, 3], multiplyByTwo),
  updatedArr
);
// see for yourself if your forEach works!

//--------------------------------------------------
// Extension
//--------------------------------------------------

//Extension 1
function mapWith(array, callback) {}

//Extension 2
function reduce(array, callback, initialValue) {}

//Extension 3
function intersection(arrays) {}

// console.log(intersection([5, 10, 15, 20], [15, 88, 1, 5, 7], [1, 10, 15, 5, 20]));
// should log: [5, 15]

//Extension 4
function union(arrays) {}

// console.log(union([5, 10, 15], [15, 88, 1, 5, 7], [100, 15, 10, 1, 5]));
// should log: [5, 10, 15, 88, 1, 7, 100]

//Extension 5
function objOfMatches(array1, array2, callback) {}

// console.log(objOfMatches(['hi', 'howdy', 'bye', 'later', 'hello'], ['HI', 'Howdy', 'BYE', 'LATER', 'hello'], function(str) { return str.toUpperCase(); }));
// should log: { hi: 'HI', bye: 'BYE', later: 'LATER' }

//Extension 6
function multiMap(arrVals, arrCallbacks) {}

// console.log(multiMap(['catfood', 'glue', 'beer'], [function(str) { return str.toUpperCase(); }, function(str) { return str[0].toUpperCase() + str.slice(1).toLowerCase(); }, function(str) { return str + str; }]));
// should log: { catfood: ['CATFOOD', 'Catfood', 'catfoodcatfood'], glue: ['GLUE', 'Glue', 'glueglue'], beer: ['BEER', 'Beer', 'beerbeer'] }

//Extension 7
function objectFilter(obj, callback) {}

// const cities = {
// London: 'LONDON',
// LA: 'Los Angeles',
// Paris: 'PARIS',
// };
// console.log(objectFilter(cities, city => city.toUpperCase())) // Should log { London: 'LONDON', Paris: 'PARIS'}
