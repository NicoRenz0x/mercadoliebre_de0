const path = require("path");

const fs = require('fs')

let partialHead = JSON.parse(fs.readFileSync("src/controllers/partialHead.json", "utf-8"));

const userController = {   
    register: function(req,res) { //A página register
        res.render('./users/register', { partialHead: partialHead.register });
    },
    login: function(req,res) { //A página login
        res.render('./users/login', { partialHead: partialHead.login });
    }
}

module.exports = userController;