/**
 * Trainee: Tesfaye Belachew
 * Email: get.tesfaye.belachew@gmail.com
 * Remote Self Teaching Alama JS Full Stack Training Bootcamp
 * From Dec 14, 2019 to Feb 29, 2020
 * Addis Ababa, Ethiopia
 */
//named arguments are suitable for destructuring
//without worrying the order of arguments

let lookupRecord = (store='person-records',id=21841)=>{
  return {store,id}
}

console.log(lookupRecord());//{ store: 'person-records', id: 21841 }
//TODO: to be revised again. didn't work as i intended. Needs further reading.
//how naming argument works with parameter destructuring pattern
console.log(lookupRecord({id:5555}))//{ store: { id: 5555 }, id: 21841 }

