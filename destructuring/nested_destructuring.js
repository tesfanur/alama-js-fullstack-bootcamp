/**
 * Trainee: Tesfaye Belachew
 * Email: get.tesfaye.belachew@gmail.com
 * Remote Self Teaching Alama JS Full Stack Training Bootcamp
 * From Dec 14, 2019 to Feb 29, 2020
 * Addis Ababa, Ethiopia
 * Date: Dec 28, 2019
 */
let destrureNestedArray = (arrayToDestructure = []) => {
  let [
    first = "first default value",
    [second, third] = ["2nd defualt value", "3rd default value"],
    fourth = "fourth defualt value"
  ] = arrayToDestructure;
  return { first, second, third, fourth };
};

console.log(destrureNestedArray([1, [2, 3], 4]));
//returns { first: 1, second: 2, third: 3, fourth: 4 }
console.log(destrureNestedArray([undefined, undefined, 4]));
/*returns { first: 'first default value',
  second: '2nd defualt value',
  third: '3rd default value',
  fourth: 4 }*/
  console.log(destrureNestedArray([undefined, [2,undefined], 4]));
/*returns { first: 'first default value',
  second: '2nd defualt value',
  third: '3rd default value',
  fourth: 4 }*/

  let destructureNestedArrayInisdeAnObject = (obj)=>{
 
    let {a, b, c} =obj;
    let [b1,b2,{b3}]=b;
    return {a,b,b1,b2,b3,c}
  }

  console.log(destructureNestedArrayInisdeAnObject({a:'A',b:['B1','B2',{b3:'B3'}],c:'C'}))
  /*
  returns:
  { a: 'A',
  b: [ 'B1', 'B2', { b3: 'B3' } ],
  b1: 'B1',
  b2: 'B2',
  b3: 'B3',
  c: 'C' }
  */
