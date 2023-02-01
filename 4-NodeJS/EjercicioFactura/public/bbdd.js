const productos = [
    { id: 1, nombre: 'Kit Reparación SUP Hinchable DVSport', precio: 4.99, descripcion: 'Kit Reparación SUP Hinchable DVSport' },
    { id: 2, nombre: 'Hinchador Manual DVSport para SUP', precio: 34.99, descripcion: 'Hinchador Manual DVSport para SUP' },
    { id: 3, nombre: 'Naish Nalu GTW 114"', precio: 1736.10, descripcion: 'Naish Nalu GTW 114"' },
    { id: 4, nombre: 'Naish Mana GTW 100"', precio: 1795.49, descripcion: 'Naish Mana GTW 100"' },
    { id: 5, nombre: 'Naish Glide GTW Touring 140"', precio: 2168.10, descripcion: 'Naish Glide GTW Touring 140"' },
    { id: 6, nombre: 'Naish Alana GS 810"', precio: 1350, descripcion: 'Naish Alana GS 810"' },
    { id: 7, nombre: 'Hinchador Red Paddle TITAN 2', precio: 99, descripcion: 'Hinchador Red Paddle TITAN 2' },
    { id: 8, nombre: 'Remo Red Paddle Co Alloy', precio: 99.50, descripcion: 'Remo Red Paddle Co Alloy' },
    { id: 9, nombre: 'Quilla US Plastic Red Paddle Co', precio: 25.99, descripcion: 'Quilla US Plastic Red Paddle Co' },
    { id: 10, nombre: 'Cinta Protectora Canto Paddle Surf 20m', precio: 99.99, descripcion: 'Cinta Protectora Canto Paddle Surf 20m' }
];

function validarUsuario(usuario) {
    return new Promise((resolve, reject) => {
        if (usuario === 'pepe') {
            reject(`El usuario ${usuario} ya existe en la base de datos`);
        } else {
            resolve('Se ha registrado la compra correctamente');
        }
    })
}

module.exports = { productos, validarUsuario };