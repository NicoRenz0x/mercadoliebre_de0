const path = require('path');
const fs = require('fs');
const { platform } = require('os');

let partialHead = JSON.parse(fs.readFileSync("src/controllers/partialHead.json", "utf-8"));

const productos = JSON.parse(fs.readFileSync('src/data/products.json', 'utf-8'));


const productController = {
    detail: function(req,res) { //Página de detalle de producto
        let producto = productos.find(producto => producto.id == req.params.productId);
        res.render('./products/productDetail', { partialHead: partialHead.productDetail, producto: producto});
    },
    register: function (req, res) { //Página de registro de producto
        res.render("./products/creation", { partialHead: partialHead.productCreation });
    },
    create: function (req, res) { //Creación de producto
        res.send(req.body); //Por el momento solo cheuqeamos lo que se guarda con el form
        res.redirect('/');
    },
    edition: function (req, res) { //Página de edición de producto
        let id = req.params.productId;
        res.render("./products/edition", { partialHead: partialHead.productEdition , id : id});
    },
    edit: function (req, res) { //Edición de producto
        res.send(req.body);
    }
};

module.exports = productController;