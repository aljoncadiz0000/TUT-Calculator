let display = document.getElementById("display")
let operation = document.getElementsByClassName("operation")

function one(){
    display.value += "1"
}
function two(){
    display.value += "2"
}
function three(){
    display.value += "3"
}
function four(){
    display.value += "4"
}
function five(){
    display.value += "5"
}
function six(){
    display.value += "6"
}
function seven(){
    display.value += "7"
}
function eight(){
    display.value += "8"
}
function nine(){
    display.value += "9"
}
function zero(){
    if (display.value==""){
        display.value = "";
    } else {
        display.value += "0";
    }
}
function dzero(){
    if (display.value==""){
        display.value = "";
    } else {
        display.value += "00";
    }
}
function del(){
    display.value = display.value.toString().slice(0,-1)
}
function clr(){
    display.value = ""
}
function add(){
    display.value += "+"
}
function sub(){
    display.value += "-"
}
function mult(){
    display.value += "*"
}
function dvde(){
    display.value += "/"
}
function dot(){
    display.value += "."
}
function equal(){
    display.value = eval(display.value)
}
