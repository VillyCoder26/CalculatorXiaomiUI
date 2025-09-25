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
const btns = document.querySelectorAll("button");
const historialSpan = document.createElement("span");
const resultadoSpan = document.createElement("span");
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
  comprobante = false;
  resultado = "0";
  operando = "";
  historial.textContent = "";
  actualizarDisplay();
});
//Boton sumar
buttonMas.addEventListener("click", () => setOperando("+"));
//Boton borrar
buttonMen.addEventListener("click", () => setOperando("-"));
//Boton dividir
buttonDiv.addEventListener("click", () => setOperando("/"));
//Boton multiplicar
buttonMul.addEventListener("click", () => setOperando("*"));
//Boton porcentaje
buttonPor.addEventListener("click", () => setOperando("%"));
//Boton igual
buttonIgu.addEventListener("click", function () {
  comprobante = false;
  switch (operando) {
    case "+":
      resultado = Number(num1) + Number(num2);
      cajaDisplay.textContent = "";
      resultadoSpan.textContent = `= ${resultado}`;
      cajaDisplay.appendChild(resultadoSpan);
      historial.textContent = "";
      historialSpan.textContent += `${num2}`;
      historial.appendChild(historialSpan);
      historialSpan.classList.add("reducir");
      resultadoSpan.classList.add("pop");
      resultadoSpan.addEventListener("animationend", function () {
        resultadoSpan.classList.remove("pop");
      });
      num1 = "";
      num2 = "";
      operando = "";
      comprobante = false;
      break;
    case "-":
      resultado = Number(num1) - Number(num2);
      cajaDisplay.textContent = "";
      resultadoSpan.textContent = `= ${resultado}`;
      cajaDisplay.appendChild(resultadoSpan);
      historial.textContent = "";
      historialSpan.textContent += `${num2}`;
      historial.appendChild(historialSpan);
      historialSpan.classList.add("reducir");
      resultadoSpan.classList.add("pop");
      resultadoSpan.addEventListener("animationend", function () {
        resultadoSpan.classList.remove("pop");
      });
      num1 = "";
      num2 = "";
      operando = "";
      comprobante = false;
      break;
    case "/":
      resultado = Number(num1) / Number(num2);
      cajaDisplay.textContent = "";
      resultadoSpan.textContent = `= ${resultado}`;
      cajaDisplay.appendChild(resultadoSpan);
      historial.textContent = "";
      historialSpan.textContent += `${num2}`;
      historial.appendChild(historialSpan);
      historialSpan.classList.add("reducir");
      resultadoSpan.classList.add("pop");
      resultadoSpan.addEventListener("animationend", function () {
        resultadoSpan.classList.remove("pop");
      });
      num1 = "";
      num2 = "";
      operando = "";
      comprobante = false;
      break;
    case "*":
      resultado = Number(num1) * Number(num2);
      cajaDisplay.textContent = "";
      resultadoSpan.textContent = `= ${resultado}`;
      cajaDisplay.appendChild(resultadoSpan);
      historial.textContent = "";
      historialSpan.textContent += `${num2}`;
      historial.appendChild(historialSpan);
      historialSpan.classList.add("reducir");
      resultadoSpan.classList.add("pop");
      resultadoSpan.addEventListener("animationend", function () {
        resultadoSpan.classList.remove("pop");
      });
      num1 = "";
      num2 = "";
      operando = "";
      comprobante = false;
      break;
    case "%":
      resultado = (Number(num1) * Number(num2)) / 100;
      cajaDisplay.textContent = "";
      resultadoSpan.textContent = `= ${resultado}`;
      cajaDisplay.appendChild(resultadoSpan);
      historial.textContent = "";
      historialSpan.textContent += `${num2}`;
      historial.appendChild(historialSpan);
      historialSpan.classList.add("reducir");
      resultadoSpan.classList.add("pop");
      resultadoSpan.addEventListener("animationend", function () {
        resultadoSpan.classList.remove("pop");
      });
      num1 = "";
      num2 = "";
      operando = "";
      comprobante = false;
      break;

    default:
      num1 = "";
      num2 = "";
      operando = "";
      comprobante = false;
      cajaDisplay.textContent = "0";
      break;
  }
});
//Boton coma/punto
buttonCom.addEventListener("click", function () {
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

btns.forEach(btn => {
  btn.addEventListener("pointerdown", () => btn.classList.add("pulsa"));
  btn.addEventListener('pointerup', () => btn.classList.remove('pulsa'));
  btn.addEventListener('pointerleave', () => btn.classList.remove('pulsa'));
  btn.addEventListener('pointercancel', () => btn.classList.remove('pulsa'));
});

function setOperando(op) {
  if (op === "-" && !comprobante && num1 === "") {
    num1 = "-";
    actualizarDisplay();
    return;
  }
  if (op === "-" && comprobante && num2 === "") {
    num2 = "-";
    actualizarDisplay();
    return;
  }
  if (num1 === "" || num1 === "-" || num1 === ".") return;
  comprobante = true;
  operando = op;
  num2 = "";
  historialSpan.textContent = `${num1}${operando}`;
  historial.textContent = historialSpan.textContent;
  actualizarDisplay();
}

//Mapeado de teclas en PC.

function normalizarTecla(tecla) {
  const map = { 'x': '*', 'X': '*', '×': '*', '÷': '/', ',': '.', 'Enter': '=', 'Return': '=', '=': '=' };
  return map[tecla] ?? tecla;
}

const keyToId = {
  '0': 'button0', '1': 'button1', '2': 'button2', '3': 'button3', '4': 'button4',
  '5': 'button5', '6': 'button6', '7': 'button7', '8': 'button8', '9': 'button9',
  '.': 'buttonCom',
  '+': 'buttonMas', '-': 'buttonMen', '*': 'buttonMul', '/': 'buttonDiv', '%': 'buttonPor',
  '=': 'buttonIgu',
  'Backspace': 'buttonDEL',
  'Delete': 'buttonAC', 'Escape': 'buttonAC'
};

document.addEventListener('keydown', function (e) {
  const tecla = normalizarTecla(e.key);
  const id = keyToId[tecla];
  if (!id) return;
  e.preventDefault(); //Para evitar los scrolls etc que a veces interfiere.
  const btn = document.getElementById(id);
  if (btn && !btn.disabled) {
    btn.click();
    btn.classList.add("pulsa");
    btn.addEventListener("animationend", () => btn.classList.remove("pulsa"), { once: true });
  }
});

actualizarDisplay();

