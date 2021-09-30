const path = require("path");
const fs = require('fs');

let partialHead = JSON.parse(fs.readFileSync("src/controllers/partialHead.json", "utf-8"));

const controlador = {   
    home: (req, res) => {
        res.render('home', { partialHead: partialHead.home });
    },
}

module.exports = controlador;