const funciones = require('./calculadora');
const cadenas = require('./cadenas');

let suma = funciones.sumar(3, 2);
let resta = funciones.restar(5, 3);
let multi = funciones.multiplicar(2, 4);
let division = funciones.dividir(12, 3);

// console.log(suma);
// console.log(resta);
// console.log(multi);
// console.log(division);

cadenas.mostrarInfo('hola que tal');