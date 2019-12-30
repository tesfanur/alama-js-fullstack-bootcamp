/**
 * Trainee: Tesfaye Belachew
 * Email: get.tesfaye.belachew@gmail.com
 * Remote Self Teaching Alama JS Full Stack Training Bootcamp
 * From Dec 14, 2019 to Feb 29, 2020
 * Addis Ababa, Ethiopia
 * Date: Dec 30, 2019
 */
//lookbehind and lookahead assertions to avoid undesired matches
let message ="Hello World";
console.log(`message.match(/l./g) =>`,message.match(/l./g));
console.log(`message.match(/(l.)$/g) =>`,message.match(/(l.)$/g));
console.log(`message.match(/(l.)(?=o)/g) =>`,message.match(/(l.)(?=o)/g));
console.log(`message.match(/(l.)(?!o)/g) =>`,message.match(/(l.)(?!o)/g));
/**
 * message.match(/l./g) => [ 'll', 'ld' ]
message.match(/(l.)$/g) => [ 'ld' ]
message.match(/(l.)(?=o)/g) => [ 'll' ]
message.match(/(l.)(?!o)/g) => [ 'lo', 'ld' ]
 */



//Named capture groups
let msg="Hello World";
console.log(`msg =>`,msg)
console.log(`msg.match(/.(l.)/) =>`,msg.match(/.(l.)/));  
//whatever come before o
console.log(`msg.match(/([jkl])o wor\l/) =>`,msg.match(/([jkl])o wor\1/));
console.log(`msg.match(/(?<cap>l.)/).groups =>`,msg.match(/(?<cap>l.)/).groups);  
console.log(`msg.match(/(?<cap>[jkl])o Wor\k<cap>/).groups) =>`,msg.match(/(?<cap>[jkl])o Wor\k<cap>/).groups); 


//regex exercise
//The Power of a Smile
//by Tupac Shakur
let poem =`
The power of a gun can kill 
and the power of fire can burn 
the power of wind can chill 
and the power of a mind can learn 
the power of anger can rage 
inside until it tears u apart 
but the power of a smile 
especially yours can heal a frozen heart`;

//return a thing and a thing can do from a poem above
//using lookbehined assertion both + and -

for (const power of powers(poem)) {
    console.log(power ,'\n')
}

function *powers (poem){
  let match, regEx = /(?<=power of )(?<thing>(?:a)?\w+).*?(?<=can)(?<verb>)/gs;
  

  while(match = regEx.exec(poem)){
      let {groups :{
          thing,verb
      }}=match;
      yield `{${thing}:${verb}}`
  }
}

 