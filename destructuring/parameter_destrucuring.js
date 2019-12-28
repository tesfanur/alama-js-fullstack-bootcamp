/**
 * Trainee: Tesfaye Belachew
 * Email: get.tesfaye.belachew@gmail.com
 * Remote Self Teaching Alama JS Full Stack Training Bootcamp
 * From Dec 14, 2019 to Feb 29, 2020
 * Addis Ababa, Ethiopia
 */
//parameter destructuring

let destrucureArrayParameter =([first='one',second='second',...remaining]=[])=>{
   return {first,second,remaining}
}
//{ first: 1, second: 2, remaining: [ 3, 4, 5, 6 ] }
console.log(destrucureArrayParameter([1,2,3,4,5,6]))
// { first: 1, second: 'second', remaining: [] }
console.log(destrucureArrayParameter([1]))

//receives only the first and second parameter of the object passed to
//the function below
let destrucureObjectParameter =({one:first='one',two:second='two'}={})=>{
    return {first,second}
 }
 /*{ first: 1,
  second: 2,
  remaining: { three: 3, four: 4, five: 5, six: 6 } }*/
  
 console.log(destrucureObjectParameter({one:1,two:2,three:3,four:4,five:5,six:6}))
//  { first: 1, second: 2 }

console.log(destrucureObjectParameter({one:1}))
// { first: 1, second: 'two' }

//no argument passed for destruturing => the default values will be returned
console.log(destrucureObjectParameter())
//{ first: 'one', second: 'two' }

