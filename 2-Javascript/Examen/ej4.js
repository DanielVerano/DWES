function comprobarDatos() {
    const $dni = document.getElementById('dni');
    const $nombre = document.getElementById('nombre');
    const $fecha = document.getElementById('fecha');
    const $hora = document.getElementById('hora');
    const $movil = document.getElementById('movil');
    const $email = document.getElementById('email');

    const dni = $dni.value;
    const nombre = $nombre.value;
    const fecha = $fecha.value;
    const hora = $hora.value;
    const movil = $movil.value;
    const email = $email.value;

    let mensaje = '';

    if (!dniEsCorrecto(dni)) mensaje += 'El dni no es correcto.\n';
    if (!nombreEsCorrecto(nombre)) mensaje += 'El nombre no es correcto, debe ser mínimo 1 nombre y 1 apellido, máximo 2 nombre y 2 apellidos.\n';
    if (!fechaEsCorrecta(fecha)) mensaje += 'La fecha no tiene el formato correcto.\n';
    if (!horaEsValida(hora)) mensaje += 'La hora no tiene el formato correcto\n';

    if (movil !== '' || email !== '') {
        if (movil !== '' && !movilEsValido(movil)) mensaje += 'El formato de móvil introducido no es correcto\n';
        if (email !== '' && !emailEsValido(email)) mensaje += 'El formato de email introducido no es correcto\n';
    } else {
        mensaje += 'Debe introducir al menos un medio de confirmación\n';
    }

    if (mensaje) {
        alert(mensaje);
    } else {
        const usuario = {
            dni: dni,
            nombre: nombre,
            fecha: fecha,
            hora: hora,
            movil: movil,
            email: email
        };
        console.log(usuario);
        const usuarioJson = JSON.stringify(usuario);
        localStorage.setItem(usuario.dni, usuarioJson);
    }

    return false;
}

function dniEsCorrecto(dni) {
    const pattern = /\d{2}\.\d{3}\.\d{3}[A-Z]/;

    if (pattern.test(dni)) {
        const letras = 'TRWAGMYFPDXBNJZSQVHLCKET';

        let numeros = dni.substring(0, dni.length - 1);
        numeros = parseInt(numeros.replace(/\./g, ''));
        const letra = dni.charAt(dni.length - 1);

        if (numeros % 23 === letras.indexOf(letra)) return true;
    }
    return false;
}

function nombreEsCorrecto(nombre) {
    const pattern = /([a-zA-Z]+\s[a-zA-Z]+)(\s[a-zA-Z]+){0,2}/;
    return pattern.test(nombre);
}

function fechaEsCorrecta(fecha) {
    const pattern = /\d{2}\-\d{2}\-\d{4}/;
    return pattern.test(fecha);
}

function horaEsValida(hora) {
    const pattern = /\d{2}\:\d{2}/;
    return pattern.test(hora);
}

function movilEsValido(movil) {
    const pattern = /\+\d{2,3}\s\d{3}\s\d{3}\s\d{3}/;
    return pattern.test(movil);
}

function emailEsValido(email) {
    const pattern = /^(.+\@.+\..+)$/;
    return pattern.test(email);
}

let dni = prompt('Si quiere recargar sus datos introduzca su DNI, en caso contrario, pulse cancelar', '');

if (dni) {
    let usuario = localStorage.getItem(dni);

    if (usuario) {
        usuario = JSON.parse(usuario);

        document.getElementById('dni').value = usuario.dni;
        document.getElementById('nombre').value = usuario.nombre;
        document.getElementById('fecha').value = usuario.fecha;
        document.getElementById('hora').value = usuario.hora;
        document.getElementById('movil').value = usuario.movil;
        document.getElementById('email').value = usuario.email;
    } else {
        alert('El DNI especificado no es correcto o no existe');
    }
}