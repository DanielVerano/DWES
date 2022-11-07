function validarDatos() {
    const $dni = document.getElementById('dni');
    const $nombre_completo = document.getElementById('nombre_completo');
    const $fecha_nac = document.getElementById('fecha_nac');
    const $email = document.getElementById('email');
    const $web = document.getElementById('web');
    const $contrasena = document.getElementById('contrasena');

    const dni = $dni.value;
    const nombre_completo = $nombre_completo.value;
    const fecha_nac = $fecha_nac.value;
    const email = $email.value;
    const web = $web.value;
    const contrasena = $contrasena.value;

    let mensaje = '';

    if (!dniEsValido(dni)) mensaje += 'El DNI no es correcto\n';

    if (!nombreEsValido(nombre_completo)) mensaje += 'El nombre no es correcto\n';

    if (!fechaEsValida(fecha_nac)) mensaje += 'La fecha de nacimiento no es correcta\n';

    if (!emailEsValido(email)) mensaje += 'El email no es correcto\n';

    if (!webEsValida(web)) mensaje += 'La web no es correcta\n';

    if (!contrasenaEsValida(contrasena)) mensaje += 'La contraseña no es correcta\n';

    if (mensaje) {
        alert(mensaje);
        return false;
    } else {
        const newUsuario = {
            'dni': dni,
            'nombre': nombre_completo,
            'fecha': fecha_nac,
            'email': email,
            'web': web,
            'contrasena': contrasena
        };
        const usuarioJson = JSON.stringify(newUsuario);
        console.log(usuarioJson);
        guardarDatosSessionStorage(newUsuario);
        return true;
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
        numeros = parseInt(numeros.replace(/\.|\-/g, ''));
        const letra = dni.charAt(dni.length - 1);

        if (numeros % 23 === letras.indexOf(letra)) return true;
    }
    return false;
}

function nombreEsValido(nombre) {
    const pattern = /(?:[a-zA-Z]+\s[a-zA-Z]+)(?:\s[a-zA-Z]+){0,2}/;
    return pattern.test(nombre);
}

function fechaEsValida(fecha) {
    const pattern = /^\d{2}\/\d{2}\/\d{4}$/;
    return pattern.test(fecha);
}

function emailEsValido(email) {
    const pattern = /^(.+\@.+\..+)$/;
    return pattern.test(email);
}

function webEsValida(web) {
    const pattern = /^(?:https?\:\/\/)?(?:[a-z0-9][a-z0-9\-]*\.)+[a-z0-9][a-z0-9\-]*$/;
    return pattern.test(web);
}

function contrasenaEsValida(contrasena) {
    const pattern = /[\w\W]{8,10}/;
    return pattern.test(contrasena);
}

function guardarDatosSessionStorage(usuario) {
    for (const key of Object.keys(usuario)) {
        sessionStorage.setItem(key, usuario[key]);
    }
}

function recargarDatos() {
    const dni = sessionStorage.getItem('dni');
    const nombre = sessionStorage.getItem('nombre');
    const fecha = sessionStorage.getItem('fecha');
    const email = sessionStorage.getItem('email');
    const web = sessionStorage.getItem('web');
    const contrasena = sessionStorage.getItem('contrasena');

    document.getElementById('dni').value = dni;
    document.getElementById('nombre_completo').value = nombre;
    document.getElementById('fecha_nac').value = fecha;
    document.getElementById('email').value = email;
    document.getElementById('web').value = web;
    document.getElementById('contrasena').value = contrasena;
}