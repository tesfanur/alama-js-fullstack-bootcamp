/**
 * Trainee: Tesfaye Belachew
 * Email: get.tesfaye.belachew@gmail.com
 * Remote Self Teaching Alama JS Full Stack Training Bootcamp
 * From Dec 14, 2019 to Feb 29, 2020
 * Addis Ababa, Ethiopia
 *
/**
 * Learning string interpolation aka template string
 */

let firstName = "Tesfaye",
  lastName = "Belachew";
let name = `Your full name: ${firstName} ${lastName}`;
console.log(name); //Your full name: Tesfaye Belachew

let fullName = (firstName, lastName) => `${firstName} ${lastName}`;
//the expression in the template string can be anything variable, function caall, object, etc
console.log(`Here is your full name: ${fullName("Tesfaye", "Belachew")}`); //Here is your full name: Tesfaye Belachew

//template literals inside another template literal
let tempLiteralInsideAnotherTempLiteral = `What's your name?
 ${name.replace("Your", "My")}`;
console.log(tempLiteralInsideAnotherTempLiteral);

//Write program inside template liters

let test = `${(() => `${firstName} ${lastName}`)()}`;
console.log(`test`, test);

//Tagged string literals
//Tagged function
let upper = (strings, ...values) => {
  let ret = "";
  for (let i = 0; i < strings.length; i++) {
    if (i > 0) ret += String(values[i]).toUpperCase();
    ret += strings[i];
  }
  return {ret, strings, values};
};

let f_name = "Tesfaye",
  github = "tesfanur",
  topicToLearn = "Tagged Functions";

 console.log(upper`Hello $f_name) (@$github)) , welcome to $topicToLearn)!`==="Hello TESFAYE (@TESFANUR), welcome to TAGGED FUNCTIONS!") 
 console.log(upper`Hello $f_name) (@$github)) , welcome to $topicToLearn)!`) 

