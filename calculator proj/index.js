let display = document.getElementById("display");
const oprtns = ['+','-','*','/'];
const zroOprtns = ['+0','-0','*0','/0'];

function dsplyNum(val){

    const last2Char = display.value.slice(-2);

    if (display.value=="0"){
        display.value = val;
    } else if (zroOprtns.includes(last2Char)){
        display.value = display.value.toString().slice(0,-1);
        display.value += val;
    } else {
    display.value += val;
    }
}
function dsplyZero(val){

    const lastChar = display.value.slice(-1);
    const last2Char = display.value.slice(-2);

    if (display.value=="0"){
        display.value = "0";
    } else if (oprtns.includes(lastChar)){
        display.value += "0";
    } else if (zroOprtns.includes(last2Char)){
        return(display.value);
    } else {
        display.value += val;
    }
}
function del(){
    if (display.value.length == 1){
        display.value = "0";
    } else {
        display.value = display.value.toString().slice(0,-1);
    }
}
function clr(){
    display.value = "0";
}
function dsplyOperation(val){

    const lastChar = display.value.slice(-1);

    if (oprtns.includes(lastChar)){
        display.value = display.value.toString().slice(0,-1);
        display.value += val;
    } else if (
        (display.value.includes("+"))||
        (display.value.includes("-"))||
        (display.value.includes("*"))||
        (display.value.includes("/"))
        ){
        equal + val;
    } else if (display.value.slice(-1) =="."){
        display.value = display.value.toString().slice(0,-1);
        display.value += val;
    } else {
        display.value += val;
    }
}
function dot(){
    
    const lastChar = display.value.slice(-1);
    
    if (oprtns.includes(lastChar)){
        display.value += "0."
    } else if (
        display.value.indexOf('.')>=
        (display.value.indexOf('+')
        +display.value.indexOf('-')
        +display.value.indexOf('*')
        +display.value.indexOf('/')+4) /*+4 is used to balance indexes*/
        ){
        return(display.value) 
    } else {
        display.value += "."
    }
}
function equal(){
    display.value = eval(display.value);
}
