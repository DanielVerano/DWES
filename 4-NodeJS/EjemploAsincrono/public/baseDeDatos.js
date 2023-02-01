function validarUsuario(nombre) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (nombre !== 'danvermor') {
                resolve('El usuario se ha creado correctamente.');
            } else {
                reject('El nombre de usuario ya existe.');
            }
        }, 1000);
    })
}

module.exports = validarUsuario;