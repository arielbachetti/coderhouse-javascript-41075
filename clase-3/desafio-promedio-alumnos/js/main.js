// Inicializamos 2 variables para ir sumando las notas del
// alumno y la cantidad de notas. Ambas inicializadas en 0.
let sumaNotas = 0;
let cantidadDeNotas = 0;

// Inicializamos la variable nota donde recibiremos las notas ingresadas por prompt.
let nota;

// Utilizamos do while ya que nos facilita el pedido de la primera entrada.
// Recordemos que el do while se ejecuta al menos una vez.
do {
  // Pedimos la nota con prompt.
  nota = prompt('Ingrese nota del alumno. Para finalizar de ingresar las notas ingrese "FIN"');
  // Recuerden que el prompt siempre devuelve un valor de tipo string (texto), por lo que debemos
  // parsearlo si queremos trabajar con numeros.
  const notaParseada = parseInt(nota);
  // Solo tenemos en cuenta las notas del 1 al 10, ignorando cualquier valor invalido.
  if (notaParseada >= 1 && notaParseada <= 10) {
    // Sumamos la nueva nota en la variable sumaNotas.
    sumaNotas = sumaNotas + notaParseada;
    // Incrementamos en 1 la cantidad de notas del alumno.
    cantidadDeNotas++;
  }
} while (nota != 'FIN');

// Calculamos el promedio dividiendo la suma de las notas por la cantidad de notas.
const promedio = sumaNotas / cantidadDeNotas;

// Inicializamos una variable donde guardaremos el mensaje diciendo si el alumno
// aprobó, aprobó con honores o desaprobó.
let textoAprobado;

// Con else if evaluamos el promedio para saber enque situación nos encontramos.
if (promedio < 4) {
  textoAprobado = 'desaprobado';
} else if (promedio >= 9) {
  textoAprobado = 'aprobado con honores';
} else {
  textoAprobado = 'aprobado';
}

// Concatenamos el promedio, con el textoAprobado enun mensaje amigable para el usuario.
alert('El promedio es: ' + promedio + '(' + textoAprobado + ')');
