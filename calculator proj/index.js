let display = document.getElementById("display");

function dsplyNum(val){
    if (display.value=="0"){
        display.value = val
    } else if (
        (display.value.slice(-2) =="+0")||
        (display.value.slice(-2) =="-0")||
        (display.value.slice(-2) =="*0")||
        (display.value.slice(-2) =="/0")
        ){
        display.value = display.value.toString().slice(0,-1)
        display.value += val
    } else {
    display.value += val
    }
}
function dsplyZero(val){
    if (display.value=="0"){
        display.value = "0"
    } else if (
        (display.value.slice(-1) =="+")||
        (display.value.slice(-1) =="-")||
        (display.value.slice(-1) =="*")||
        (display.value.slice(-1) =="/")
        ){
        display.value += "0"
    } else if (
        (display.value.slice(-2) =="+0")||
        (display.value.slice(-2) =="-0")||
        (display.value.slice(-2) =="*0")||
        (display.value.slice(-2) =="/0")
        ){
        display.value += ""
    } else {
        display.value += val
    }
}
function del(){
    if (display.value.length == 1){
        display.value = "0"
    } else {
    display.value = display.value.toString().slice(0,-1)
    }
}
function clr(){
    display.value = "0"
}
function dsplyOperation(val){
    if (
        (display.value.slice(-1) =="+")||
        (display.value.slice(-1) =="-")||
        (display.value.slice(-1) =="*")||
        (display.value.slice(-1) =="/")||
        (display.value.slice(-1) ==".")
        ){
        display.value = display.value.toString().slice(0,-1)
        display.value += val
    } else if (
        (display.value.includes("+"))||
        (display.value.includes("-"))||
        (display.value.includes("*"))||
        (display.value.includes("/"))
        ){
        display.value += ""
    } else {
        display.value += val
    }
}
function dot(){
    if (
        (display.value.slice(-1) =="+")||
        (display.value.slice(-1) =="-")||
        (display.value.slice(-1) =="*")||
        (display.value.slice(-1) =="/")||
        (display.value=="")
        ){
        display.value += "0."
    } else if (display.value.slice(-1) =="."){
        display.value += ""
    } else {
        display.value += "."
    }
}
function equal(){
    display.value = eval(display.value)
}
