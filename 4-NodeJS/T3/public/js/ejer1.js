function validarDatos(e) {
    const $dni = document.getElementById('dni');
    const $nombre = document.getElementById('nombre');
    const $apellidos = document.getElementById('apellidos');
    const $tlfno = document.getElementById('tlfno');
    const $comentario = document.getElementById('comentario');
    const $hora = document.getElementById('hora');

    const dni = $dni.value;
    const nombre = $nombre.value;
    const apellidos = $apellidos.value;
    const tlfno = $tlfno.value;
    const comentario = $comentario.value;
    const hora = $hora.value;

    let mensaje = '';

    if (!dniEsValido(dni)) mensaje += 'El DNI no es correcto\n';

    if (!nombreOApellidoEsValido(nombre)) mensaje += 'El nombre no es correcto\n';

    if (!nombreOApellidoEsValido(apellidos)) mensaje += 'Los apellidos no son correctos\n';

    if (!tlfnoEsValido(tlfno)) mensaje += 'El teléfono no es correcto\n';

    if (mensaje) {
        alert(mensaje);
        e.preventDefault();
    } else {
        const newUsuario = {
            'dni': dni,
            'nombre': nombre,
            'apellidos': apellidos,
            'tlfno': tlfno,
            'comentario': comentario,
            'hora': hora
        };
        const json = JSON.stringify(newUsuario);
        console.log(json);
    }
}

/**
 * 
 * @param {String} dni 
 */
function dniEsValido(dni) {
    const pattern = /^\d{2}\.\d{3}\.\d{3}\-[A-Z]$/;

    if (pattern.test(dni)) {
        const letras = 'TRWAGMYFPDXBNJZSQVHLCKET';

        let numeros = dni.substring(0, dni.length - 1);
        numeros = parseInt(numeros.replace(/\.|\-/g, ''));  // Quitamos los puntos y el guión del dni
        const letra = dni.charAt(dni.length - 1);

        // Si el resto de dividir los 8 números entre 23 es igual a la posición de la letra en la cadena superior, el dni es correcto
        if (numeros % 23 === letras.indexOf(letra)) return true;
    }
    return false;
}

function nombreOApellidoEsValido(nombre) {
    const pattern = /^([a-zA-Z]+|[a-zA-Z]+\s[a-zA-Z]+)$/;
    return pattern.test(nombre);
}

function tlfnoEsValido(tlfno) {
    const pattern = /^\+\d{1,3}\s\d{9}$/;
    return pattern.test(tlfno);
}

document.getElementById('formulario').addEventListener('submit', validarDatos);