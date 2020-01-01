let { log: print, info: showMsg } = console;
function printHello() {
    showMsg("Hello "+ msg);
}
msg ='1 sec';
setTimeout(printHello, 1000);
showMsg("Me first! after 1 sec");
msg ='0 sec';
setTimeout(printHello,0);
showMsg("Me first! after 0 sec");