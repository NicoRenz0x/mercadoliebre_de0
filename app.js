const express = require("express");
const path = require("path");

const app = express();

app.listen(3000, () => {
    console.log("Servidor iniciado en https://localhost:3000")
});

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/home.html'))
})

const publicPath = path.resolve(__dirname, "./public");
app.use( express.static(publicPath) );