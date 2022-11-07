const numMinimo = 1;
const numMaximo = 50;
let numAleatorio = Math.round(Math.random() * (numMaximo - numMinimo) + numMinimo);
// console.log(numAleatorio);
let intentos = 5;

function iniciarJuego() {
    let opcion;

    do {
        opcion = parseInt(prompt('Introduce un número del 1 al 50'));

        if (opcion < numMinimo || opcion > numMaximo || isNaN(opcion)) alert('El número introducido no es válido. Introduzca uno de nuevo');

    } while (opcion < numMinimo || opcion > numMaximo || isNaN(opcion));

    comprobarRonda(numAleatorio, opcion);

}

function comprobarRonda(aleatorio, opcion) {
    intentos--;
    if (intentos === 0) {
        alert('HAS PERDIDO, OTRA VEZ SERÁ!!!');
        return;
    }

    if (aleatorio > opcion) {
        alert(`El número es mayor que el introducido, te quedan ${intentos} intentos`);
        iniciarJuego();
    } else if (aleatorio < opcion) {
        alert(`El número es menor que el introducido, te quedan ${intentos} intentos`);
        iniciarJuego();
    } else {
        alert('HAS GANADO, ERES UN CRACK!!!');

        let respuesta = confirm('¿Quieres jugar otra vez?');

        if (respuesta) {
            numAleatorio = Math.round(Math.random() * (numMaximo - numMinimo) + numMinimo);
            intentos = 5;
            iniciarJuego();
        }
    }
}

iniciarJuego();