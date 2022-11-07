function validarDatos() {
    const $fecha = document.getElementById('fecha');
    const $cocinero = document.getElementById('cocinero');
    const $destinatario = document.getElementById('destinatario');
    const $gramos = document.getElementById('gramos');
    const $composicion = document.getElementById('composicion');
    const $num_cuenta = document.getElementById('num_cuenta');

    const fecha = $fecha.value;
    const cocinero = $cocinero.value;
    const destinatario = $destinatario.value;
    const gramos = $gramos.value;
    const composicion = $composicion.value;
    const num_cuenta = $num_cuenta.value;

    let mensaje = '';

    if (!fechaEsValida(fecha)) mensaje += 'La fecha no es válida\n';
    if (!cocineroEsValido(cocinero)) mensaje += 'El cocinero no es válido\n';
    if (!destinatarioEsValido(destinatario)) mensaje += 'El destinatario no es válido\n';
    if (!gramosEsValido(gramos)) mensaje += 'Los gramos no son válidos\n';
    if (!composicionEsValido(composicion, gramos)) mensaje += 'La composición no es válida\n';
    // if (!numeroCuentaEsValida(num_cuenta)) mensaje += 'El número de cuenta no es válido\n';

    if (mensaje) {
        alert(mensaje);
        return false;
    } else {
        const newRegistro = {
            'fechaCreacion': fecha,
            'cocinero': cocinero,
            'destinatario': destinatario,
            'gramos': gramos,
            'composicion': composicion,
            'numCuenta': num_cuenta
        };
        const registroJson = JSON.stringify(newRegistro);
        console.log(registroJson);
        // alert('Todo es correcto');
        guardarDatosLocalStorage(newRegistro);
        return true;
    }
}

function fechaEsValida(fecha) {
    const pattern = /\d{2}\/\d{2}\/\d{4}/;
    return pattern.test(fecha);
}

function cocineroEsValido(cocinero) {
    const pattern = /[A-Z]{2}\W\d{4}/;
    return pattern.test(cocinero);
}

function destinatarioEsValido(destinatario) {
    const pattern = /[A-Z]{2,3}\_[a-z]+\:\d{4}/;
    return pattern.test(destinatario);
}

function gramosEsValido(gramos) {
    const pattern = /\d{3,4}/;
    return pattern.test(gramos);
}

function composicionEsValido(composicion, gramos) {
    const pattern = /(\d{3,4})g(?:[A-Z]{1,2}\d?){2}/;
    const composicionGramos = composicion.match(pattern)[1];

    return pattern.test(composicion) && parseInt(composicionGramos) === parseInt(gramos);
}

/**
 * 
 * @param {HTMLFormElement} num_cuenta 
 */
function numeroCuentaEsValida(num_cuenta) {
    const pattern = /([a-zA-Z]{2})(\d{2})\-(\d{12})\-(\d{2})/;
    const result = num_cuenta.value.match(pattern);

    if (result !== null && result.length == 5) {
        const dosLetras = result[1];
        const dosDigitos = result[2];
        const digitosCuenta = result[3];
        const digitosControl = result[4];

        // Comprobacion de los 4 primeros caracteres (2 letras y 2 dígitos)
        if (!comprobarCuatroPrimerosCaracteres(dosLetras, dosDigitos)) return false;

        // Comprobación de los 12 dígitos de cuenta
        const primerosSeis = parseInt(digitosCuenta.slice(0, 6));
        const ultimosSeis = parseInt(digitosCuenta.slice(6, digitosCuenta.length));
        const primerDigitoControl = parseInt(digitosControl.charAt(0));
        const segundoDigitoControl = parseInt(digitosControl.charAt(1));

        if (!digitoControlEsValido(primerosSeis, primerDigitoControl)) return false;
        if (!digitoControlEsValido(ultimosSeis, segundoDigitoControl)) return false;

        // Otra alternativa: Usar el método replaceAll()
        let numero = num_cuenta.value.replace(/\-/g, ' ');     // g flag: all matches

        // Si todo es correcto añadir el número de cuenta al lado del input sin los guiones
        document.getElementById('num_correcto').value = numero;
        return true;
    }

    function comprobarCuatroPrimerosCaracteres(letras, digitos) {
        // Los dos dígitos deben ser iguales a la suma de los valores de la 1ra y 2da letra; si la suma es < 10, se añade un cero.
        const abecedario = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

        const primeraLetra = letras.charAt(0).toLowerCase();
        const segundaLetra = letras.charAt(1).toLowerCase();
        const primeraLetraNumero = abecedario.indexOf(primeraLetra) + 1;
        const segundaLetraNumero = abecedario.indexOf(segundaLetra) + 1;
        let suma = primeraLetraNumero + segundaLetraNumero;
        if (suma < 10) suma = suma * 10;
        if (suma !== parseInt(digitos)) return false;
        return true;
    }

    function digitoControlEsValido(numeros, digitoControl) {
        let digito;
        let suma = 0;

        while (numeros >= 1) {
            digito = numeros % 10;
            numeros = Math.trunc(numeros / 10);
            suma += digito;
        }

        const valor = Math.trunc(suma / 6);
        return valor === digitoControl;
    }
}

function guardarDatosLocalStorage(registro) {
    for (const key of Object.keys(registro)) {
        localStorage.setItem(key, registro[key]);
    }
}

function recargarDatos() {
    const fecha = localStorage.getItem('fechaCreacion');
    const cocinero = localStorage.getItem('cocinero');
    const destinatario = localStorage.getItem('destinatario');
    const gramos = localStorage.getItem('gramos');
    const composicion = localStorage.getItem('composicion');
    const numCuenta = localStorage.getItem('numCuenta');

    document.getElementById('fecha').value = fecha;
    document.getElementById('cocinero').value = cocinero;
    document.getElementById('destinatario').value = destinatario;
    document.getElementById('gramos').value = gramos;
    document.getElementById('composicion').value = composicion;
    document.getElementById('num_cuenta').value = numCuenta;
    document.getElementById('num_correcto').value = numCuenta;
}