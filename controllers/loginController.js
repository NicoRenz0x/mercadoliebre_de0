const controlador = {   
    home: (req, res) => {
        res.sendFile(path.resolve(__dirname, '../views/login.html'));
    },
}

module.exports = controlador;