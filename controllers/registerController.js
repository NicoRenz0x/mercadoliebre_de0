const controlador = {   
    home: (req, res) => {
        res.sendFile(path.resolve(__dirname, '../views/register.html'));
    },
}

module.exports = controlador;