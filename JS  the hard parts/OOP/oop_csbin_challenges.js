/**
 * Trainee: Tesfaye Belachew
 * Email: get.tesfaye.belachew@gmail.com
 * Remote Self Teaching Alama JS Full Stack Training Bootcamp
 * From Dec 14, 2019 to Feb 29, 2020
 * Date: Jan 01, 2020
 * Addis Ababa, Ethiopia
 */

/****************************************************************
                  WORKING WITH OBJECT LITERALS
****************************************************************/
//source: http://csbin.io/oop
/*** CHALLENGE 1 of 1 
 * 
 * Challenge 1/1
Create a function that accepts two inputs (name and age) and returns an object. Let's call this function makePerson. This function will:

    1. create an empty object
    2. add a name property to the newly created object with its value being the 'name' argument passed into the function
    3. add an age property to the newly created object with its value being the 'age' argument passed into the function
    4. return the objec
 * ***/
let { log: print, info: showMsg } = console;
function makePerson(name, age) {
  // add code here
  this.name = name;
  this.age = age;
  return this;
}

const vicky = makePerson("Vicky", 24);

// /********* Uncomment these lines to test your work! *********/
showMsg(vicky.name); // -> Logs 'Vicky'
showMsg(vicky.age); // -> Logs 24

/****************************************************************
                       USING OBJECT.CREATE
****************************************************************/

/*** CHALLENGE 1 of 3 
 * Using Object.create 
Inside personStore object, create a property greet where the value is a function that logs "hello". 
 * ***/

const personStore = {
  // add code here
  greet :function () {
     showMsg('hello')
     return;
  }
};

// /********* Uncomment this line to test your work! *********/
personStore.greet(); // -> Logs 'hello'

/*** CHALLENGE 2 of 3  
Create a function personFromPersonStore that takes as input a name and an age. When called, the function will create person objects using the Object.create method on the personStore object. 
 * ***/

function personFromPersonStore(name, age) {
  // add code here
  this.name=name;
  this.age=age;
  this.greet=function () {
    showMsg(`hello`)
}
  return Object.create(this) 
}

const sandra = personFromPersonStore("Sandra", 26);

// /********* Uncomment these lines to test your work! *********/
showMsg(sandra.name); // -> Logs 'Sandra'
showMsg(sandra.age); //-> Logs 26
sandra.greet(); //-> Logs 'hello'

/*** hallenge 3/3
Without editing the code you've already written, add an introduce method to the personStore object that logs "Hi, my name is [name]". 
 ***/
// add code here
sandra.introduce =function () {
    console.log(`Hi, my name is ${this.name}`)
}


sandra.introduce(); // -> Logs 'Hi, my name is Sandra'

/****************************************************************
                    USING THE 'NEW' KEYWORD
****************************************************************/

/*** CHALLENGE 1 of 3 
 * Using the NEW keyword 
Create a function PersonConstructor that uses the this keyword to save a single property onto its scope called greet. greet should be a function that logs the string 'hello'. 
 * ***/

function PersonConstructor() {
  // add code here
  this.greet = function () {
    showMsg('hello')
  }
}

// /********* Uncomment this line to test your work! *********/
const simon = new PersonConstructor();
simon.greet(); // -> Logs 'hello'

/*** CHALLENGE 2 of 3 
 * Challenge 2/3
Create a function personFromConstructor that takes as input a name and an age. When called, the function will create person objects using the new keyword instead of the Object.create method. 
 * ***/

function personFromConstructor(name, age) {
  // add code here
  this.name =name;
  this.age =age;
  this.greet = function () {
    showMsg('hello')
  }
  return this;
}

const mike = new personFromConstructor("Mike", 30);

// /********* Uncomment these lines to test your work! *********/
showMsg(mike.name); // -> Logs 'Mike'
showMsg(mike.age); //-> Logs 30
mike.greet(); //-> Logs 'hello'

/*** CHALLENGE 3 of 3 
 * 
 * Challenge 3/3
Without editing the code you've already written, add an introduce method to the PersonConstructor function that logs "Hi, my name is [name]". 
 * ***/
// add code here
mike.introduce = function () {
  showMsg(`Hi, my name is ${this.name}`)
}

mike.introduce(); // -> Logs 'Hi, my name is Mike'

/****************************************************************
                        USING ES6 CLASSES
****************************************************************/

/*** 
 * Challenge 1/2
Create a class PersonClass. PersonClass should have a constructor that is passed an input of name and saves it to a property by the same name. PersonClass should also have a method called greet that logs the string 'hello'. 
 * ***/

class PersonClass {
  constructor(name) {
    // add code here
    this.name=name;
  }

  // add code here
  greet(){
    showMsg(`hello`)
  } 
}

// /********* Uncomment this line to test your work! *********/
const george = new PersonClass();
george.greet(); // -> Logs 'hello'

/*** 
 * Challenge 2/2
Create a class DeveloperClass that creates objects by extending the PersonClass class. In addition to having a name property and greet method, DeveloperClass should have an introduce method. When called, introduce should log the string 'Hello World, my name is [name]'. 
 * ***/

// add code here 
class DeveloperClass extends PersonClass {
     introduce (){
     showMsg(`Hello World, my name is ${this.name}`)
   }

}

// /********* Uncomment these lines to test your work! *********/
const thai = new DeveloperClass('Thai', 32);
showMsg(thai.name); // -> Logs 'Thai'
thai.introduce(); //-> Logs 'Hello World, my name is Thai'

/****************************************************************
                      EXTENSION: SUBCLASSING
****************************************************************/
/**
 * Challenge 1/5
Create an object adminFunctionStore that has access to all methods in the userFunctionStore object, without copying them over individually. 
 */

const userFunctionStore = {
  sayType: function() {
    showMsg("I am a " + this.type);
  }
};

function userFactory(name, score) {
  let user = Object.create(userFunctionStore);
  user.type = "User";
  user.name = name;
  user.score = score;
  return user;
}
//solution
const adminFunctionStore = new userFactory('tesfanur',8);
showMsg({adminFunctionStore})
/**
 * 
 Challenge 2/5
Create an adminFactory function that creates an object with all the same data fields (and default values) as objects of the userFactory class, but without copying each data field individually. 
 */
function adminFactory(name, score) {
  // Put code here
  return userFactory(name,score)
  
}
//test adminFactory
showMsg({adminFactory: adminFactory('tesfanur',12)})
/* Put code here for a method called sharePublicMessage*/
const adminFromFactory = new adminFactory("Eva", 5);
adminFromFactory.sharePublicMessage = function () {
  showMsg(`Welcome users!`)
}

// /********* Uncomment these lines to test your work! *********/
adminFromFactory.sayType() // -> Logs "I am a Admin"
adminFromFactory.sharePublicMessage() // -> Logs "Welcome users!"

/****************************************************************
EXTENSION: MIXINS
****************************************************************/
/**
 * 
EXTENSION: Mixins
Mixins are a tool in object-oriented programming that allows objects to be given methods and properties beyond those provided by their inheritance. For this challenge, complete the missing code, giving all of the robotMixin properties to robotFido. Do this in a single line of code, without adding the properties individually. 
 */

class Dog {
  constructor() {
    this.legs = 4;
  }
  speak() {
    showMsg("Woof!");
  }
}

const robotMixin = {
  skin: "metal",
  speak: function() {
    showMsg(`I have ${this.legs} legs and am made of ${this.skin}`);
  }
};

let robotFido = new Dog();

robotFido = {...robotFido,...robotMixin};/* Put code here to give Fido robot skills */

// /********* Uncomment to test your work! *********/
robotFido.speak() // -> Logs "I am made of metal"
