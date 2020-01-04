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
let {log:showMsg}=console;
 function isNegativeZero(num) {
     return num===0 && (1/num)===-Infinity;
 }

 showMsg(`isNegativeZero(0/-3) =>`,isNegativeZero(0/-3))
 showMsg(`isNegativeZero(0/3) =>`,isNegativeZero(0/3))

 showMsg(`NaN===NaN =>`,NaN===NaN)//returns false. which is identity crisis
 showMsg(`Object.is(NaN,NaN) =>`,Object.is(NaN,NaN))

 // Infinity and -Infinity, NaN
 showMsg(`1/0 =>`,1/0)//1/0 => Infinity
 showMsg(`-1/0 =>`,-1/0)//-3*1/0 => -Infinity
 showMsg(`1/"num" =>`,1/"num")//1/"num" => NaN


 