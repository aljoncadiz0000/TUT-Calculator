let upperDisplay = document.getElementById("display1");
//let upperDisplay = $("#display1");
let lowerDisplay = document.getElementById("display2");
//let lowerDisplay = $("#display2");
const oprtns = ['+','-','*','/'];
const numberSizeRegEx = /^[\d\.\d]{1,8}$/;

function dsplyNum(val){

    if (lowerDisplay.value=="0"){
        lowerDisplay.value = val;
    } else if (!numberSizeRegEx.test(lowerDisplay.value)){
        return(lowerDisplay.value);
    } else {
    lowerDisplay.value += val;
    }
} 
function dsplyZero(val){

    const lastChar = lowerDisplay.value.slice(-1);
    const last2Char = lowerDisplay.value.slice(-2);

    if (lowerDisplay.value=="0"){
        lowerDisplay.value = "0";
    } else if (oprtns.includes(lastChar)){
        lowerDisplay.value += "0";
    } else {
        lowerDisplay.value += val;
    }
}
function del(){
    if (lowerDisplay.value.length == 1){
        lowerDisplay.value = "0";
    } else {
        lowerDisplay.value = lowerDisplay.value.toString().slice(0,-1);
    }
}
function clr(){
    lowerDisplay.value = "0";
    upperDisplay.value = "0";
}
function dsplyOperation(val){

    const lastOperation = upperDisplay.value.slice(-1);

    if (oprtns.includes(lastOperation)){
        //upperDisplay.value = upperDisplay.value.toString().slice(0,-1);
        equal();
        upperDisplay.value += val;//wrong code based on testing evaluating even with just zero in lower value
    } else {
        equal();
        upperDisplay.value += val;
    }
}
function dot(){
    
    const lastChar = lowerDisplay.value.slice(-1);
    
    if (oprtns.includes(lastChar)){
        lowerDisplay.value += "0.";
    } else if (lowerDisplay.value.includes('.')){
        return(lowerDisplay.value);
    } else {
        lowerDisplay.value += ".";
    }
}
function equal(){
    upperDisplay.value = eval((upperDisplay.value)+(lowerDisplay.value));
    lowerDisplay.value = "0";
}
