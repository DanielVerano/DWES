function mostrarInformacion() {
    const inputCadena = document.getElementById('cadena');
    const cadena = inputCadena.value;
    let palabras = cadena.split(' ');

    if (cadena === '') {
        alert('La cadena introducida no puede estar vacía');
        return;
    }

    let numPalabras = 0;
    let primeraPalabra, ultimaPalabra;

    for (let i = 0; i < palabras.length; i++) {
        if (i === 0) primeraPalabra = palabras[i];
        if (i === palabras.length - 1) ultimaPalabra = palabras[i];
        numPalabras++;
    }

    alert(`La cadena introducida tiene ${numPalabras} palabras\nLa primera palabra es ${primeraPalabra}\nLa última palabra es ${ultimaPalabra}`);

    if (esPalindroma(cadena)) alert('La frase introducida es palíndroma');

    alert(`Las palabras ordenadas de mayor a menor longitud son: ${palabras.sort((a, b) => b.length - a.length)}`);
}

/**
 * 
 * @param {String} cadena 
 */
function esPalindroma(cadena) {
    let cadenaAlReves = '';
    cadena = cadena.toLowerCase().replaceAll(' ', '');

    for (let i = cadena.length - 1; i >= 0; i--) {
        cadenaAlReves += cadena[i];
    }

    if (cadena === cadenaAlReves) return true;

    return false;
}