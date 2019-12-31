/**
 * Trainee: Tesfaye Belachew
 * Email: get.tesfaye.belachew@gmail.com
 * Remote Self Teaching Alama JS Full Stack Training Bootcamp
 * From Dec 14, 2019 to Feb 29, 2020
 * Date: Dec 31, 2019
 * Addis Ababa, Ethiopia
 */
//Different: Methods of Object Creation
//Method 1: Using Object Liters=>define and create an object in one statement
let User1 = {
  name: "Username 1",
  score: 10,
  increment: function() {
    User1.score++;
  }
};
User1.increment();
User1.increment();

console.log(User1);
//Method 2: Declare empty Object and after that add properties and methods using dot notation
//or Using the JavaScript Keyword new
let User2 = {};

User2.name = "Username 2";
User2.score = 2;
User2.increment = function() {
  User2.score++;
};
User2.increment();
User2.increment();
User2.increment();
console.log({ User2 });

//Method 3 Using new operator with Object
let User3 = new Object();
User3.name = "username 3";
User3.score = 7;
User3.increment = function() {
  User3.score++;
};
console.log({ User3 });

//Method 4: Object Creation using functions/constructor functions
//i.e. Define an object constructor, and then create objects of the constructed type
function userCreator(name, score) {
  let newUser = {};
  newUser.name = name;
  newUser.score = score;
  newUser.increment = function() {
    newUser.score++;
  };
  return newUser;
}
// later
let user4_1 = userCreator("Obang", 4);
let user4_2 = userCreator("Meto", 2);
user4_1.increment();
user4_2.increment();

console.log({ user4_1, user4_2 });
//Method 5: Creating Object using prototypal nature of JS
const User5 = {
    name: 'username 5',
    score:8,
    increment: function () {
     this.score++;
    }
  };
  let user5_1 = Object.create(User5)
  
  user5_1.name = "tesfa"; // "name" is a property set on "me", but not on "person"
  user5_1.increment();// inherited properties can be overwritten
  console.log(user5_1) 
  
//Method 6: Using ES6 Classes

class User6 {
  constructor(name, score) {
    this.name = name;
    this.score = score;
  }

  increment() {
    this.score++;
  }
}

let user6_1 = new User6("tesfanur", 7);
user6_1.increment();
console.log(user6_1);
