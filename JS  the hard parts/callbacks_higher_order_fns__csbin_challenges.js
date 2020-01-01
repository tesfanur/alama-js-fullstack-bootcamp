/**
 * Trainee: Tesfaye Belachew
 * Email: get.tesfaye.belachew@gmail.com
 * Remote Self Teaching Alama JS Full Stack Training Bootcamp
 * From Dec 14, 2019 to Feb 29, 2020
 * Date: Jan 01, 2020
 * Addis Ababa, Ethiopia
 */
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
let alphabet = "";
const letters = ["a", "b", "c", "d"];
function forEach(input, callbackFunc) {
  for (let i = 0; i < input.length; i++) {
    callbackFunc(input[i]);
  }
}
forEach(letters, function(char) {
  alphabet += char;
});
console.log(alphabet); //prints 'abcd'

// see for yourself if your forEach works!

//--------------------------------------------------
// Extension
//--------------------------------------------------

//Extension 1
/**
 * 
 * @param {*} array 
 * @param {*} callback 
 * Extension 1
In the first part of the extension, 
you're going to rebuild map as mapWith.
This time you're going to use forEach inside of mapWith 
instead of using a for loop. 
 */
function mapWith(array, callback) {
  forEach(array, callback);
}
alphabet = "";
mapWith(letters, function name(char) {
  alphabet += char;
});
console.log(alphabet);
/**
 * 
 * @param {*} array 
 * @param {*} callback 
 * @param {*} initialValue 
 * Extension 2
The function reduce takes an array and reduces the elements to a single value. For example it can sum all the numbers, multiply them, or any operation that you can put into a function.

const nums = [4, 1, 3];
const add = function(a, b) { return a + b; }
reduce(nums, add, 0);   //-> 8

Here's how it works. The function has an "accumulator value" which starts as the initialValue and accumulates the output of each loop. The array is iterated over, passing the accumulator and the next array element as arguments to the callback. The callback's return value becomes the new accumulator value. The next loop executes with this new accumulator value. In the example above, the accumulator begins at 0. add(0,4) is called. The accumulator's value is now 4. Then add(4, 1) to make it 5. Finally add(5, 3) brings it to 8, which is returned. 
 */

function reduce(array, callback, initialValue) {
  array.forEach((value, index) => {
    if (typeof value == "object" && index == 0) {
      initialValue = value;
    }
    initialValue = callback(value, initialValue);
  });
  return console.log(initialValue);
}

const nums = [4, 1, 3];
const add = function(a, b) {
  return a + b;
};
const product = function(a, b) {
  return a * b;
};

reduce(nums, add, 0); //-> 0+4+1+3=>8
reduce(nums, product, 1); //-> 1*4*1*3=>12

/**  
 * Extension 3
Construct a function intersection that compares input arrays and returns a new array with elements found in all of the inputs. BONUS: Use reduce! 
 */
//define callback function for reduce function used inside intersection funcion
function commonElements_cb(arr1, arr2) {
  let cmElements = [];
  arr1.forEach(elem => {
    if (arr2.includes(elem)) {
      cmElements.push(elem);
    }
  });
  console.log({ arr1, arr2, cmElements });
  return cmElements;
}

function intersection(arrays) {
  arrays = [...arguments]; //construct the input arguments
  return reduce(arrays, commonElements_cb, []);
}

console.log(
  intersection([5, 10, 15, 20], [15, 88, 1, 5, 7], [1, 10, 15, 5, 20])
); // should log: [5, 15]

/** 
 * Extension 4
Construct a function union that compares input arrays and returns a new array that contains all elements. If there are duplicate elements, only add it once to the new array. Preserve the order of the elements starting from the first element of the first input array. BONUS: Use reduce!
 */
//define callback function for reduce function used inside union funcion
function unionOfArrElements_cb(arr1, arr2) {
  let unionElements = arr2;
  arr1.forEach(elem => {
    if (!arr2.includes(elem)) {
      unionElements.push(elem);
    }
  });
  console.log({ arr1, arr2, unionElements });
  return unionElements;
}

function union(arrays) {
  arrays = [...arguments]; //construct the input arguments
  return reduce(arrays, unionOfArrElements_cb, []);
}

console.log(union([5, 10, 15], [15, 88, 1, 5, 7], [100, 15, 10, 1, 5]));
// should log: [5, 10, 15, 88, 1, 7, 100]

/**
 * 
 * @param {*} array1 
 * @param {*} array2 
 * @param {*} callback 
 * Extension 5
Construct a function objOfMatches that accepts two arrays and a callback. objOfMatches will build an object and return it. To build the object, objOfMatches will test each element of the first array using the callback to see if the output matches the corresponding element (by index) of the second array. If there is a match, the element from the first array becomes a key in an object, and the element from the second array becomes the corresponding value. 
 */

function objOfMatches(array1, array2, callback) {
  let matchingIndexValues = {};
  array1.forEach((value, index) => {
    if (index == array2.indexOf(callback(value))) {
      matchingIndexValues[value] = array2[index];
    }
  });
  return matchingIndexValues;
}

console.log(
  objOfMatches(
    ["hi", "howdy", "bye", "later", "hello"],
    ["HI", "Howdy", "BYE", "LATER", "hello"],
    function(str) {
      return str.toUpperCase();
    }
  )
);
// should log: { hi: 'HI', bye: 'BYE', later: 'LATER' }

/**
 * 
 * @param {*} arrVals 
 * @param {*} arrCallbacks 
 * Extension 6
Construct a function multiMap that will accept two arrays: an array of values and an array of callbacks. multiMap will return an object whose keys match the elements in the array of values. The corresponding values that are assigned to the keys will be arrays consisting of outputs from the array of callbacks, where the input to each callback is the key. 
 */
function multiMap(arrVals, arrCallbacks) {
  let obj = {};
  arrVals.forEach(value => {
    //apply all callbacks to each values in the arrVals and assign as
    //result to the result as object property
    obj[value] = arrCallbacks.map(cb => cb(value));
  });

  return obj;
}

console.log(
  multiMap(
    ["catfood", "glue", "beer"],
    [
      function(str) {
        return str.toUpperCase();
      },
      function(str) {
        return str[0].toUpperCase() + str.slice(1).toLowerCase();
      },
      function(str) {
        return str + str;
      }
    ]
  )
);
// should log: { catfood: ['CATFOOD', 'Catfood', 'catfoodcatfood'], glue: ['GLUE', 'Glue', 'glueglue'], beer: ['BEER', 'Beer', 'beerbeer'] }

/**
 * 
 * @param {*} obj 
 * @param {*} callback 
 * Extension 7
Construct a function objectFilter that accepts an object as the first parameter and a callback function as the second parameter. objectFilter will return a new object. The new object will contain only the properties from the input object such that the property's value is equal to the property's key passed into the callback. 
 */
function objectFilter(obj, callback) {
  let filterdObj = {};
  Object.keys(obj).forEach(key => {
    if (callback(key) == obj[key]) {
      filterdObj[key] = obj[key];
    }
  });
  return filterdObj;
}

const cities = {
  London: "LONDON",
  LA: "Los Angeles",
  Paris: "PARIS"
};
console.log(objectFilter(cities, city => city.toUpperCase())); // Should log { London: 'LONDON', Paris: 'PARIS'}
