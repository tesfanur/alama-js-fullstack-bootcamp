let nestedValues = [1, [2, 3], [[]], [4, [5]], 6]; 
//TODO: flat and flatmap method is not known as a function in my coding environments
//it returns undefined flat function. try to read why and fix it.
//add the property to the array prototype  since flat function is still under experiment
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
//also apply property definition for flatMap
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
console.log(`nestedValues = `, nestedValues);
console.log(`nestedValues.flat(0) => `, nestedValues.flat(0));
console.log(`nestedValues.flat() => `, nestedValues.flat());
console.log(`nestedValues.flat(2) => `, nestedValues.flat(2));

let arr = [1, 2, 3];
console.log(
  `arr.map(tuples=(value)=>[value*2,String(value*2)]) =>`,
  arr.map((tuples = value => [value * 2, String(value * 2)]))
);

//TypeError: arr.map(...).flat is not a function
//solution

console.log(
  `arr.map(tuples=(value)=>[value*2,String(value*2)]).flat() =>`,
  arr.map((tuples = value => [value * 2, String(value * 2)])).flat()
);

console.log(
    `arr.flatMap(tuples=(value)=>[value*2,String(value*2)]) =>`,
    arr.flatMap((tuples = value => [value * 2, String(value * 2)]))
  );
//update arr variable so that it holds integers fromm 1 to 6
arr =[...arr,4,5,6];
//remove an item and replace it with another item
//depeneding upon some senario/codnition
console.log(
    `
    arr.flatMap((doubelEvens = value => {
        if (value%2==0) {
            return [value,value*2]
        } else{
            return [];
        }
        
    })) =>`,
    arr.flatMap((doubelEvens = value => {
        if (value%2==0) {
            return [value,value*2]
        } else{
            return [];
        }
        
    }))
  );

/** 
nestedValues =  [ 1, [ 2, 3 ], [ [] ], [ 4, [ 5 ] ], 6 ]
nestedValues.flat(0) =>  [ 1, 2, 3, [], 4, [ 5 ], 6 ]
nestedValues.flat() =>  [ 1, 2, 3, [], 4, [ 5 ], 6 ]
nestedValues.flat(2) =>  [ 1, 2, 3, 4, 5, 6 ]
arr.map(tuples=(value)=>[value*2,String(value*2)]) => [ [ 2, '2' ], [ 4, '4' ], [ 6, '6' ] ]
arr.map(tuples=(value)=>[value*2,String(value*2)]).flat() => [ 2, '2', 4, '4', 6, '6' ]
arr.flatMap(tuples=(value)=>[value*2,String(value*2)]) => [ 2, '2', 4, '4', 6, '6' ]


    arr.flatMap((doubelEvens = value => {
        if (value%2==0) {
            return [value,value*2]
        } else{
            return [];
        }

    })) => [ 2, 4, 4, 8, 6, 12 ]
 */
