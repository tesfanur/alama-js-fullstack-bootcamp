/**
 * Trainee: Tesfaye Belachew
 * Email: get.tesfaye.belachew@gmail.com
 * Remote Self Teaching Alama JS Full Stack Training Bootcamp
 * From Dec 14, 2019 to Feb 29, 2020
 * Date: Dec 29, 2019
 * Addis Ababa, Ethiopia
 */

let arr = [{ a: 1 }, { a: 2 }];
//pass a callback function that matches your requirement for both find and findIndex array methods
let resut1 = arr.find(
  (match = value => {
    return value && value.a > 1;
  })
);
let resut2 = arr.find(
  (match = value => {
    return value && value.a > 10;
  })
);
let resut3 = arr.findIndex(
  (match = value => {
    return value && value.a > 10;
  })
);

console.log({ resut1, resut2, resut3 }); //{ resut1: { a: 2 }, resut2: undefined, resut3: -1 }

arr = [10,20,NaN,30,40,50]
console.log('arr =',arr)
console.log(`arr.indexOf(30)!==-1 =>`,arr.indexOf(30)!==-1) //true
console.log(`arr.indexOf(20)!==-1 =>`,arr.indexOf(20)!==-1) //-2 (truthy)
console.log(`arr.indexOf(NaN)!==-1 =>`,arr.indexOf(NaN)!==-1) //-o (falsy)
//better way option for the above is to use ES6's includes array method
console.log('arr =',arr)
//Syntax array.includes(element, start=0)=> start index defaults to 0
console.log(`arr.includes(20) =>`,arr.includes(20))//start index 0
console.log(`arr.includes(60) =>`,arr.includes(60))
console.log(`arr.includes(20,3) =>`,arr.includes(20,3))
console.log(`arr.includes(10,-2) =>`,arr.includes(10,-2))
console.log(`arr.includes(40,-2) =>`,arr.includes(40,-2))
console.log(`arr.includes(NaN) =>`,arr.includes(NaN))
/**
 * arr = [ 10, 20, NaN, 30, 40, 50 ]
arr.indexOf(30)!==-1 => true
arr.indexOf(20)!==-1 => true
arr.indexOf(NaN)!==-1 => false
arr = [ 10, 20, NaN, 30, 40, 50 ]
arr.includes(20) => true
arr.includes(60) => false
arr.includes(20,3) => false
arr.includes(10,-2) => false
arr.includes(40,-2) => true
arr.includes(NaN) => true
 */




