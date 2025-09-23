
const cajaDisplay = document.querySelector(".display");
const buttonAC = document.getElementById("buttonAC");
const buttonDEL = document.getElementById("buttonDEL");
const buttonPor = document.getElementById("buttonPor");
const buttonDiv = document.getElementById("buttonDiv");
const buttonMul = document.getElementById("buttonMul");
const buttonMen = document.getElementById("buttonMen");
const buttonMas = document.getElementById("buttonMas");
const buttonIgu = document.getElementById("buttonIgu");
const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
const button3 = document.getElementById("button3");
const button4 = document.getElementById("button4");
const button5 = document.getElementById("button5");
const button6 = document.getElementById("button6");
const button7 = document.getElementById("button7");
const button8 = document.getElementById("button8");
const button9 = document.getElementById("button9");
const button0 = document.getElementById("button0");
const buttonCom = document.getElementById("buttonCom");


cambiarDisplay();

function cambiarDisplay(){
    buttonAC.addEventListener("click", function(){
        cajaDisplay.textContent = "0";
    })
    button0.addEventListener("click", function(){
        cajaDisplay.textContent = "0";
    })
    button1.addEventListener("click", function(){
        cajaDisplay.textContent = "1";
    })
    button2.addEventListener("click", function(){
        cajaDisplay.textContent = "2";
    })
    button3.addEventListener("click", function(){
        cajaDisplay.textContent = "3";
    })
    button4.addEventListener("click", function(){
        cajaDisplay.textContent = "4";
    })
    button5.addEventListener("click", function(){
        cajaDisplay.textContent = "5";
    })
    button6.addEventListener("click", function(){
        cajaDisplay.textContent = "6";
    })
    button7.addEventListener("click", function(){
        cajaDisplay.textContent = "7";
    })
    button8.addEventListener("click", function(){
        cajaDisplay.textContent = "8";
    })
    button9.addEventListener("click", function(){
        cajaDisplay.textContent = "9";
    })
    
}
