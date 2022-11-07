const enviarDatos = () => {
    const form = document.forms[0];
    const $nombre = document.getElementById('nombre');
    const $apellidos = document.getElementById('apellidos');
    const $email = document.getElementById('email');
    const $web = document.getElementById('web');

    if (form.getAttribute('handler') !== 'true') {
        form.addEventListener('submit', validarDatos);
        form.setAttribute('handler', 'true');
    }

    /**
     * 
     * @param {SubmitEvent} e 
     */
    function validarDatos(e) {
        e.preventDefault();

        const nombre = $nombre.value;
        const apellidos = $apellidos.value;
        const email = $email.value;
        const web = $web.value;

        let mensaje = '';

        if (!nombreOApellidosEsValido(nombre)) mensaje += 'El nombre no es correcto\n';

        if (!nombreOApellidosEsValido(apellidos)) mensaje += 'Los apellidos no son correctos\n';

        if (!emailEsValido(email)) mensaje += 'El email no es correcto\n';

        if (!webEsValida(web)) mensaje += 'La web no es correcta\n';

        if (mensaje) {
            // e.preventDefault();
            alert(mensaje);
        } else {
            const newUsuario = {
                'nombre': nombre,
                'apellidos': apellidos,
                'email': email,
                'web': web
            };
            const usuarioJson = JSON.stringify(newUsuario);
            console.log(usuarioJson);
            guardarCookie(newUsuario);
        }
    }

    function nombreOApellidosEsValido(nombre) {
        const pattern = /^([a-zA-Z]+|[a-zA-Z]+\s[a-zA-Z]+)$/;
        return pattern.test(nombre);
    }

    function emailEsValido(email) {
        const pattern = /^\w+\@\w+\.\w+$/;
        return pattern.test(email);
    }

    function webEsValida(web) {
        const pattern = /^[h][t][t][p][s]?\:\/\/([w]{3})?\.?\w+\.[a-z]+$/;
        return pattern.test(web);
    }

    function guardarCookie(usuario) {
        const diasExpiracion = 1;
        let fecha = new Date();
        let tiempoExp = diasExpiracion * 24 * 60 * 60 * 1000;
        fecha.setTime(fecha.getTime() + tiempoExp);

        document.cookie = `usuario=${usuario.nombre} ${usuario.apellidos}; expires=${fecha.toUTCString()}`;
        document.cookie = `email=${usuario.email}; expires=${fecha.toUTCString()}`;
    }
}