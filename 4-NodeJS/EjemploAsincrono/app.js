const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const validarUsuario = require('./public/baseDeDatos');

// app.set('views', __dirname + '/views');      // Para hacer debug
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.render('formulario');
})

app.post('/process', (req, res) => {
    const usuario = {
        nombre: req.body.nombre,
        password: req.body.password,
        email: req.body.email
    };

    validarUsuario(usuario.nombre)
        .then((mensaje) => {
            res.render('usuarioreg', { usuarioNombre: usuario.nombre, usuarioPassword: usuario.password, usuarioEmail: usuario.email, mensaje: mensaje });
        })
        .catch((mensaje) => {
            res.render('usuarioerr', { usuarioNombre: usuario.nombre, mensaje: mensaje });
        })
});

app.listen(3000, () => {
    console.log('Server listening on port 3000...');
})