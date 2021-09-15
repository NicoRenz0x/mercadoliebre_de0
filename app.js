const express = require("express");
const router = express.Router();
const path = require("path");
const app = express();
const publicPath = path.resolve(__dirname, "./public");
app.use(express.static(publicPath));
const rutasMain = require('./routes/main.js')


app.listen(3000, () => {
    console.log("Servidor iniciado en http://localhost:3000/")
});

app.use('/', rutasMain);
app.use('/register', rutasMain);
app.use('/login', rutasMain);