const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const existeDNI = require('./public/js/bbdd');

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('ejer1');
})

app.post('/procesar', (req, res) => {
    const usuario = {
        dni: req.body.dni,
        nombre: req.body.nombre,
        apellidos: req.body.apellidos,
        contrasena: req.body.contrasena,
        email: req.body.email,
        tlfno: req.body.tlfno
    }

    existeDNI(usuario.dni)
        .then((mensaje) => {
            res.render('dnireg', { dni: usuario.dni, nombre: usuario.nombre, apellidos: usuario.apellidos, contrasena: usuario.contrasena, email: usuario.email, tlfno: usuario.tlfno, mensaje: mensaje });
        })
        .catch((err) => {
            res.render('dnierr', { dni: usuario.dni, err: err });
        })
})

app.listen(3000, () => {
    console.log('Servidor escuchando en el puerto 3000...');
})