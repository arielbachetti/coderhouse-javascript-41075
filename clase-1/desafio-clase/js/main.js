// Pedir nombre mediante prompt y mostrarlo en consola junto con algún texto de saludo. 
// Ejemplo:  ¡Hola, Juan!
let entradaNombre = prompt('Ingrese un nombre');
let salidaSaludo = "Hola " + entradaNombre;
alert(salidaSaludo);

// Pedir un número mediante prompt, parsearlo, sumarlo a otro que se encuentre almacenado en una variable y luego mostrar el resultado en consola.
let entradaNumero = prompt("Ingrese un numero para sumarle 10");
const numeroASumar = 10;
let entradaNumeroParseada = parseInt(entradaNumero);
let salidaNumero  = entradaNumeroParseada + numeroASumar;
console.log(salidaNumero);

// Pedir un texto mediante prompt, luego otro, concatenarlos y mostrarlo en un alerta.
let entradaTextoPrimera = prompt('Ingrese un texto');
let entradaTextoSegunda = prompt('Ingrese otro texto');
let salidaTexto = entradaTextoPrimera + entradaTextoSegunda;
alert(salidaTexto);
