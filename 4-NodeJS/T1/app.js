const express = require('express');
const app = express();

app.use(express.static(__dirname + '/public'));

app.listen(8080, () => {
    console.log('Servidor escuchando en el puerto 8080...');
});