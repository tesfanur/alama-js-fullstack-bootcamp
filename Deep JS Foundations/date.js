/**
 * Trainee: Tesfaye Belachew
 * Email: get.tesfaye.belachew@gmail.com
 * Remote Self Teaching Alama JS Full Stack Training Bootcamp
 * From Dec 14, 2019 to Feb 29, 2020
 * Addis Ababa, Ethiopia
 * Date: Jan 04, 2020
 * 
 * Learning JS Coercion
 * Coercion: is a way expressing how dynamic languages like JS convert one data type into another
 * */
 var {log:showMsg}=console;
 var now = +new Date();
 showMsg({now,date:Date()})
 //now = Date.now();// ES5 only!
 var foo = "foo"
 //~N -> -(N+1)
 if(~foo.indexOf("f")){
  showMsg(`~foo`,~foo,"found it!",`~foo.indexOf("f") =>`,~foo.indexOf("f"))
 }

 //using tilde(~) operator

 for (let i = 0; i <=5; i++) {
     showMsg(`~${i} =`, `-(${i}+1) =`,~i)
 }
 /**
  * tilde(~) operator does the mathematical formula ~N -> -(N+1)
  * the for loop above then returns 
~0 = -(0+1) = -1
~1 = -(1+1) = -2
~2 = -(2+1) = -3
~3 = -(3+1) = -4
~4 = -(4+1) = -5
~5 = -(5+1) = -6
  * 
  */