const path = require('path');
const fs = require('fs');
const { platform } = require('os');

let partialHead = JSON.parse(fs.readFileSync("src/controllers/partialHead.json", "utf-8"));


const productos = [
    {
        id: 1,
        title: 'Cafetera Moulinex',
        precio: '$6.770',
        discount: '40% off',
        img: 'img-cafetera-moulinex.jpg',
    },
    {
        id: 2,
        title: 'MacBook Pro 2019',
        precio: '$230.000',
        discount: '20% off',
        img: 'img-macbook-pro-2019.jpg',
    },
    {
        id: 3,
        title: 'Samsung Galaxy S10',
        precio: '$70.500',
        discount: '10% off',
        img: 'img-samsung-galaxy-s10.jpg',
    },
    {
        id: 4,
        title: 'SmartTv Samsung 43',
        precio: '$23.200',
        discount: '5% off',
        img: 'img-tv-samsung-smart.jpg',
    },
]

const productController = {
    detail: function(req,res) { //Página de detalle de producto
        let producto = productos.find(producto => producto.id == req.params.productId);
        res.render('./products/productDetail', { partialHead: partialHead.productDetail, producto: producto});
    }
};

module.exports = productController;