/**
 * Trainee: Tesfaye Belachew
 * Email: get.tesfaye.belachew@gmail.com
 * Remote Self Teaching Alama JS Full Stack Training Bootcamp
 * From Dec 14, 2019 to Feb 29, 2020
 * Date: Dec 31, 2019
 * Addis Ababa, Ethiopia
 */
//clousre challenge source: http://csbin.io/closures
let {log:print,info:showMsg} =console
//closure
function instructionGenerator() {
    function multiplyBy2 (num){
    return num*2;
    }
    return multiplyBy2;
    }
    let generatedFunc = instructionGenerator()   
    let result = generatedFunc(3) //6

    showMsg(generatedFunc,instructionGenerator)
    showMsg({result})
   