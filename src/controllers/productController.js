const path = require('path');
const fs = require('fs')

let partialHead = JSON.parse(fs.readFileSync("src/controllers/partialHead.json", "utf-8"));

const productController = {
    detail: function(req,res) { //Página de detalle de producto
        res.render('./products/detail', { partialHead: partialHead.productDetail });
    },
};



module.exports = productController;