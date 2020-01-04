/**
 * Trainee: Tesfaye Belachew
 * Email: get.tesfaye.belachew@gmail.com
 * Remote Self Teaching Alama JS Full Stack Training Bootcamp
 * From Dec 14, 2019 to Feb 29, 2020
 * Addis Ababa, Ethiopia
 * Date: Jan 04, 2020
 *
/**
 * Learning JS Data Types
 */
let { log: showMsg } = console;

var bar = 2;
showMsg(`typeof bar =>`, typeof bar);
var bar;
showMsg(`typeof bar =>`, typeof bar); //redeclaring a variable doesn't affect the data type
var foo;
foo = new Array(1, 2, 3); //don't use array constructor to create an array
foo = [1, 2, 3]; //use the array literals to create array

foo = new Object(); //don't use Object constructor to create an aobject instead use object literals
foo.a = "a";
foo.b = "b";
foo.c = "c";
showMsg({ foo });
//use object literal to create an object instead of object constructor like above
foo = { a: "a", b: "b", c: "c" };
showMsg({ foo });

//using the new key word to create an object
var foo;
foo = new RegExp("a*b","g")//using regexp constructor
foo = /a*b/g;//literal regex exp

//note: there is no literal date creation: which is the missing gab of JS
foo = new Date()//this exact moment using timestamp
showMsg({ foo });
showMsg({ foo: Date.now()});
showMsg({month: foo.getMonth() });
showMsg({year: foo.getFullYear() });
showMsg({hour: foo.getHours() });
showMsg({minute: foo.getMinutes() });
showMsg({second: foo.getSeconds() });
showMsg({time: foo.getTime() });
showMsg({time: `${foo.getHours()}${foo.getMinutes()}${foo.getSeconds()}` });
//use third party module like momemt js if you want any date time formatting


