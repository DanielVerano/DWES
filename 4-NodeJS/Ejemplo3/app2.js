const express = require('express');
const app = express();

// Usar archivos estáticos
app.use(express.static(__dirname + '/public'));

app.listen(3000, () => {
    console.log('Server listening at port 3000...');
});