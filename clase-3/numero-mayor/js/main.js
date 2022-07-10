// Algoritmo para obtener el numero mayor de un conjunto de numeros enteros positivos
// ingresados por prompt.

let numeroMayor = 0;
let numero;

// Solución con for con 5 numeros.
for (let i = 1; i <= 5; i++) {
  numero = prompt('Ingrese un numero (for)');
  const numeroParseado = parseInt(numero);

  if (numeroParseado < 0) {
    alert('Ingrese solo enteros positivos. El valor ingresado sera ignorado.');
    continue;
  } else if (numeroParseado > numeroMayor) {
    numeroMayor = numeroParseado;
  }
}

alert('El numero mayor es (ciclo for): ' + numeroMayor);

// Solución con while (ingresar numeros hasta que el usuario ingrese FIN).
numeroMayor = 0;

numero = prompt('Ingrese un numero e ingrese FIN para terminar (while)');

while (numero != 'FIN') {
  numero = prompt('Ingrese un numero e ingrese FIN para terminar');
  const numeroParseado = parseInt(numero);

  if (numeroParseado > numeroMayor) {
    numeroMayor = numeroParseado;
  }
}

alert('El numero mayor es (ciclo while): ' + numeroMayor);

// Solución con do while (ingresar numeros hasta que el usuario ingrese FIN).
numeroMayor = 0;

do {
  numero = prompt('Ingrese un numero e ingrese FIN para terminar (do while)');
  const numeroParseado = parseInt(numero);

  if (numeroParseado > numeroMayor) {
    numeroMayor = numeroParseado;
  }
} while (numero != 'FIN');

alert('El numero mayor es (ciclo do while): ' + numeroMayor);
