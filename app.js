const express = require('express');
const path = require('path');
const port = process.env.port || 3000;

const app = express();

const publicPath = path.resolve(__dirname, './public');
app.use(express.static(publicPath));


app.listen(port, () => {
    console.log(`servidor corriendo en el puerto ${port}`);
});

// RUTAS A LAS VIEWS
app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/home.html'))
});

app.get('/registro', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/register.html'))
});

app.get('/login', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/login.html'))
});

