module.exports.mostrarInfo = (cadena) => {
    cadena = cadena.split(' ');
    let numPalabras = 0;
    let primeraPalabra, ultimaPalabra;

    for (let i = 0; i < cadena.length; i++) {
        if (i === 0) primeraPalabra = cadena[i];
        if (i === cadena.length - 1) ultimaPalabra = cadena[i];
        numPalabras++;
    }
    console.log(numPalabras);
    console.log(primeraPalabra);
    console.log(ultimaPalabra);
}