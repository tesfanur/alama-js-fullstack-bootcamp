/**
 * Trainee: Tesfaye Belachew
 * Email: get.tesfaye.belachew@gmail.com
 * Remote Self Teaching Alama JS Full Stack Training Bootcamp
 * From Dec 14, 2019 to Feb 29, 2020
 * Addis Ababa, Ethiopia
 */
let str = "Hello";
//left start padding
console.log("str.padStart(5) =>", str.padStart(5));
console.log("str.padStart(8) =>", str.padStart(8));
console.log("str.padStart(8,'*') =>", str.padStart(8, "*"));
console.log("str.padStart(8,'12345') =>", str.padStart(8, "12345"));
console.log("str.padStart(8,'ab') =>", str.padStart(8, "ab"));
/**
 * Result:
 * str.padStart(5) => Hello
str.padStart(8) =>    Hello
str.padStart(8,'*') => ***Hello
str.padStart(8,'12345') => 123Hello
str.padStart(8,'ab') => abaHello
 */

//Right end padding
console.log("\nstr.padEnd(5) =>", str.padEnd(5));
console.log("str.padEnd(8) =>", str.padEnd(8));
console.log("str.padEnd(8,'*') =>", str.padEnd(8, "*"));
console.log("str.padEnd(8,'12345') =>", str.padEnd(8, "12345"));
console.log("str.padEnd(8,'ab') =>", str.padEnd(8, "ab"));
/**
 * Result:
 * str.padEnd(5) => Hello
str.padEnd(8) => Hello
str.padEnd(8,'*') => Hello***
str.padEnd(8,'12345') => Hello123
str.padEnd(8,'ab') => Helloaba
 */

//Using trim methods: to remove unecessary spaces from a string

str = "   some stuff   \t\t";
console.log("\nstr.trim() =>", str.trim());
console.log("str.trimStart() =>", str.trimStart());
console.log("str.trimEnd() =>", str.trimEnd());
/**
  * Result: 
  * str.trim() => some stuff
str.trimStart() => some stuff
str.trimEnd() =>    some stuff
  */


  //destructuring for swapping elements

  let x =1,y=2;
  [y,x]=[x,y];
  console.log({x,y})
