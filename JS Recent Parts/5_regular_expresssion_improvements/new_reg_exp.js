/**
 * Trainee: Tesfaye Belachew
 * Email: get.tesfaye.belachew@gmail.com
 * Remote Self Teaching Alama JS Full Stack Training Bootcamp
 * From Dec 14, 2019 to Feb 29, 2020
 * Addis Ababa, Ethiopia
 * Date: Dec 30, 2019
 */
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
//assertions, look ahead


//Named capture groups
let msg="Hello World";
console.log(`msg =>`,msg)
console.log(`msg.match(/.(l.)/) =>`,msg.match(/.(l.)/));  
console.log(`msg.match(/([jkl])o wor\l/) =>`,msg.match(/([jkl])o wor\l/));
console.log(`msg.match(/(?<cap>l.)/).groups =>`,msg.match(/(?<cap>l.)/).groups);  
console.log(`msg.match(/(?<cap>[jkl])o Wor\k<cap>/).groups) =>`,msg.match(/(?<cap>[jkl])o Wor\k<cap>/).groups); 
 