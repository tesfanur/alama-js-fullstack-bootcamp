/**
 * Trainee: Tesfaye Belachew
 * Email: get.tesfaye.belachew@gmail.com
 * Remote Self Teaching Alama JS Full Stack Training Bootcamp
 * From Dec 14, 2019 to Feb 29, 2020
 * Addis Ababa, Ethiopia
 */
/*Destructuring is decomposing a structure into its individual parts
in ES6 we can destructure arrays, objects 
it means assigning/pulling individual parts that we need from an object(Arrays, JSON API, etc) to individual variables
Advantages:
    -it is self documenting
    -Assignments as inhertly equivalent to declaration of variables
*/

let data = () => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//Imperative Approach
let temp = data(),
  first = temp[0],
  second = temp[1],
  third = temp[2],
  fourth = temp[3],
  remaingNumbers = temp.slice(3), //remaining array elements starting from index 3=>gathering syntax
  eleventh = temp[10] != undefined ? temp[10] : 110; //assign a default value if the indexed item is not found

console.log({
  first,
  second,
  third,
  fourth,
  remaingNumbers,
  eleventh
}); /*
{ first: 1,
  second: 2,
  third: 3,
  fourth: 4,
  remaingNumbers: [ 4, 5, 6, 7, 8, 9, 10 ],
  eleventh: 110 }*/

//destructuring approach
[first, second, third, fourth = 400] = temp;
console.log({ first, second, third, fourth }); //{ first: 1, second: 2, third: 3, fourth: 4 }
//assign default value if the value in the destructure pattern doesn't exist in the object to be pulled
[first, second, third, fourth = 400] = [1, 2, 3];
console.log({ first, second, third, fourth }); //{ first: 1, second: 2, third: 3, fourth: 400 }
let remaining;
[first, second, third, fourth = 400, ...remaining] = temp; //using rest syntax to gather remaining elements
//the gather syntax should always be placed at the end of the destructure syntax. Not in the middle not in the beginning
console.log({
  first,
  second,
  third,
  fourth,
  remaining
}); /*{ first: 1,
    second: 2,
    third: 3,
    fourth: 4,
    remaining: [ 5, 6, 7, 8, 9, 10 ] }*/

// destructuring while declaring
//method 1:
let { a, b, c } = { a: "A", b: "B", c: "C" };
/*method 2: let a, b, c ;
 ({ a, b, c } = { a: "A", b: "B", c: "C" };)//use parenthesis to avoid overloading the block declaration
 
 method 3: let a, b, c,temp;//if don't want to use the parenthesis, use temp variable 
 temp={ a, b, c } = { a: "A", b: "B", c: "C" };//use temp variable and then the destructuring to avoid overloading the block declaration
*/
console.log({ a, b, c });

//swap elements using old ways i.e without using object destructuring
//just using temporary variable
let k = "value of k",
  m = "value of m",
  tempVar;
(tempVar = k), (k = m), (m = tempVar);
console.log("swap value of k & m with out using destructuring =>", { k, m });
//returns: swap value of k & m with out using destructuring => { k: 'value of m', m: 'value of k' }

//destructuring for swapping elements
//Note: it is not limited to two element swapping.
//We can use destructuring to swap elements more than two elements too
let x = "value of x",
  y = "value of y";
[y, x] = [x, y];

//swap value of x & y using destructuring => { x: 'value of y', y: 'value of x' }
console.log("swap value of x & y using destructuring =>", { x, y });

//swap elements of more than two elements
//this brings the assignment to the original value before
//we apply the swap as shown above
[y, x,k,m] = [x, y,m,k];
console.log(`swap elements of more than two elements =>`,{x,y,k,m})
/**
 * Returns:
 * swap elements of more than two elements => { x: 'value of x',
  y: 'value of y',
  k: 'value of k',
  m: 'value of m' }
 */



