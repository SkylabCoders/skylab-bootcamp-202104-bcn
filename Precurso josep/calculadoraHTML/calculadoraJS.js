//CalculadoraJS
let suma, resta, division, multiplicacion;
let anterior;
let point = true;
let numeroNuevo;
function getPantalla() {
  return document.getElementById("resultado");
}
function showValue(value) {
  getPantalla().value += value;
  numeroNuevo += value;
}
function showBotton(value) {
  if (point === true) {
    getPantalla().value += value;
    numeroNuevo += value;
    point = false;
  }
}
function getResult() {
  return getPantalla().innerHTML;
}
function del() {
  showValue(0);
  point = true;
}
function sum() {
  suma = true;
  anterior = getPantalla().value;
  getPantalla().value = anterior + "+";
  numeroNuevo = "";
  point = true;
  return anterior;
}
function substraction() {
  resta = true;
  anterior = getPantalla().value;
  getPantalla().value = anterior + "-";
  numeroNuevo = "";
  point = true;
  return anterior;
}
function div() {
  division = true;
  anterior = getPantalla().value;
  getPantalla().value = anterior + "/";
  numeroNuevo = "";
  point = true;
  return anterior;
}
function multiplication() {
  multiplicacion = true;
  anterior = getPantalla().value;
  getPantalla().value = anterior + "*";
  numeroNuevo = "";
  point = true;
  return anterior;
}
function calc() {
  if (suma === true) {
    getPantalla().value = parseFloat(anterior) + parseFloat(numeroNuevo);
    suma = false;
    point = true;
  } else if (resta === true) {
    getPantalla().value = parseFloat(anterior) - parseFloat(numeroNuevo);
    resta = false;
    point = true;
  } else if (division === true) {
    getPantalla().value = parseFloat(anterior) / parseFloat(numeroNuevo);
    division = false;
    point = true;
  } else if (multiplicacion === true) {
    getPantalla().value = parseFloat(anterior) * parseFloat(numeroNuevo);
    multiplicacion = false;
    point = true;
  }
  numeroNuevo = true;
}
