const express = require('express');
const router = express.Router();
const { productos, validarUsuario } = require('../public/bbdd');

router.post('/', (req, res, next) => {
    const usuario = {
        nombre: req.body.nombre,
        direccion: req.body.direccion,
        email: req.body.email,
        telefono: req.body.telefono
    };

    validarUsuario(usuario.nombre)
        .then((mensaje) => {
            const cantidadProductos = req.body.cantidad;
            const userProducts = [];
            let subtotal = 0, iva = 0, total = 0;

            for (let i = 0; i < cantidadProductos.length; i++) {
                if (cantidadProductos[i] !== '0') {
                    const cantidad = Number(cantidadProductos[i]);
                    const baseImponible = cantidad * productos[i].precio;
                    subtotal += baseImponible;

                    productos[i].cantidad = cantidad;
                    productos[i].total = baseImponible.toFixed(2);
                    userProducts.push(productos[i]);
                }
            }
            iva = subtotal * 0.21;
            total = subtotal + iva;

            res.render('factura', { usuario: usuario, productos: userProducts, subtotal: subtotal.toFixed(2), iva: iva.toFixed(2), total: total.toFixed(2) });
        })
        .catch((error) => {
            res.render('usuarioerr', { usuario: usuario.nombre, error: error });
        })
});

module.exports = router;