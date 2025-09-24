//DOM
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
const historial = document.querySelector(".historial");
//Variables
var num1 = "";
var num2 = "";
var resultado = 0;
var comprobante = false;
var operando = "";
//Display
function actualizarDisplay() {
  comprobante === false
    ? (cajaDisplay.textContent = num1 || "0")
    : (cajaDisplay.textContent = num2 || "0");
}
//Funcion añadir numero
function addNumero(btn) {
  btn.addEventListener("click", function () {
    historial.classList.remove("reducir");
    comprobante === false ? historial.textContent = "" : historial.textContent;
    comprobante === false
      ? (num1 += btn.textContent)
      : (num2 += btn.textContent);
    actualizarDisplay();
  });
}
//Boton Borrar
buttonDEL.addEventListener("click", function () {
  comprobante == false
    ? (num1 = num1.slice(0, -1))
    : (num2 = num2.slice(0, -1));
  actualizarDisplay();
});
//Boton limpiar
buttonAC.addEventListener("click", function () {
  num1 = "";
  num2 = "";
  historial.textContent = "";
  actualizarDisplay();
});
//Boton sumar
buttonMas.addEventListener("click", function () {
  comprobante = true;
  operando = "+";
  historial.textContent = `${num1}${operando}`;
  actualizarDisplay();
});
//Boton borrar
buttonMen.addEventListener("click", function () {
  comprobante = true;
  operando = "-";
  historial.textContent = `${num1}${operando}`;
  actualizarDisplay();
});
//Boton dividir
buttonDiv.addEventListener("click", function () {
  comprobante = true;
  operando = "/";
  historial.textContent = num1 + operando;
  actualizarDisplay();
});
//Boton multiplicar
buttonMul.addEventListener("click", function () {
  comprobante = true;
  operando = "*";
  actualizarDisplay();
});
//Boton porcentaje
buttonPor.addEventListener("click", function () {
  comprobante = true;
  operando = "%";
  actualizarDisplay();
});
//Boton igual
buttonIgu.addEventListener("click", function () {
  comprobante = false;
  switch (operando) {
    case "+":
      resultado = Number(num1) + Number(num2);
      cajaDisplay.textContent = `= ${resultado}`;
      historial.textContent += `${num2}`;
      historial.classList.add("reducir");
      historial.classList.add("pop");
      historial.addEventListener("animationend", function(){
        historial.classList.remove("pop");
      });
      num1 = "";
      num2 = "";
      comprobante = false;
      break;
    case "-":
      resultado = Number(num1) - Number(num2);
      cajaDisplay.textContent = resultado;
      num1 = "";
      num2 = "";
      comprobante = false;
      break;
    case "/":
      resultado = Number(num1) / Number(num2);
      cajaDisplay.textContent = resultado;
      num1 = "";
      num2 = "";
      comprobante = false;
      break;
    case "*":
      resultado = Number(num1) * Number(num2);
      cajaDisplay.textContent = resultado;
      num1 = "";
      num2 = "";
      comprobante = false;
      break;
    case "%":
      resultado = (Number(num1) * Number(num2)) / 100;
      cajaDisplay.textContent = resultado;
      num1 = "";
      num2 = "";
      comprobante = false;
      break;
  }
});
//Boton coma/punto
buttonCom.addEventListener("click", function(){
  comprobante === false ?
  num1 += "." : num2 += ".";
  actualizarDisplay();
});
//Array de botones para no declararlos uno a uno
[
  button0,
  button1,
  button2,
  button3,
  button4,
  button5,
  button6,
  button7,
  button8,
  button9,
].forEach(addNumero);

actualizarDisplay();
