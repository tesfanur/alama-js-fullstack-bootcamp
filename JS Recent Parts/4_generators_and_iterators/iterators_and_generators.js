/**
 * Trainee: Tesfaye Belachew
 * Email: get.tesfaye.belachew@gmail.com
 * Remote Self Teaching Alama JS Full Stack Training Bootcamp
 * From Dec 14, 2019 to Feb 29, 2020
 * Addis Ababa, Ethiopia
 * Date: Dec 28, 2019
 */
//object is not iterable
let obj = {
  a: 1,
  b: 2,
  c: 3,
  *[Symbol.iterator]() {
    let keys = Object.keys(this);
    for (let key of keys) yield [key, this[key]];
  }
};

console.log([...obj]); //[ [ 'a', 1 ], [ 'b', 2 ], [ 'c', 3 ] ]
console.log([...Object.keys(obj)]); //[ 'a', 'b', 'c' ]
console.log([...Object.values(obj)]); //[ 1, 2, 3 ]

function* main() {
  yield 1;
  yield 2;
  yield 3;
  return 4;
}

let it = main();
console.log(`it.next() =>`, it.next());
console.log(`it.next() =>`, it.next());
console.log(`it.next() =>`, it.next());
console.log(`it.next() =>`, it.next());

console.log(`[...main()] =>`, [...main()]);
/**
  *it.next() => { value: 1, done: false }
it.next() => { value: 2, done: false }
it.next() => { value: 3, done: false }
it.next() => { value: 4, done: true }
[...main()] => [ 1, 2, 3 ]
  */

//exercise
let numbers = {
  *[Symbol.iterator]({
      start=0,
      end = 100,
      step = 1
  }={}) {
    for (let i = start; i <=end; i+=step) yield i;
  }
};
//test
console.log(`My Lucky number are: ${[...numbers[Symbol.iterator]({
    start:10,
    end : 60,
    step : 5
})]}`)
/**10
15
20
25
30
35
40
45
50
55
60 */
// console.log(num)