function getCookie(key) {
    key = `${key}=`;

    let cookie = document.cookie.split(';');

    for (let i = 0; i < cookie.length; i++) {
        let c = cookie[i];
        c = c.trim();   // Para quitar el espacio del principio

        if (c.indexOf(key) === 0) {
            return c.substring(key.length, c.length);
        }
    }
    return '';
}

function crearCookie(key, value) {
    let cookie = getCookie(key);

    if (cookie === '') {
        document.cookie = `${key}=${value}; `;
    }
}

function actualizarCookie(key, nuevoValor) {
    let cookie = getCookie(key);

    if (cookie) {
        document.cookie = `${key}=${nuevoValor}`;
    }
}

function borrarCookie(key) {
    let cookie = getCookie(key);

    if (cookie) {
        document.cookie = `${key}=''; expires=1 Jan 1970, 00:00:00 GMT`;
    }
}

// document.cookie = "name=john";
// console.log(getCookie('name'));

// crearCookie('mensaje', 'hola');

// borrarCookie('mensaje');
// console.log(document.cookie);