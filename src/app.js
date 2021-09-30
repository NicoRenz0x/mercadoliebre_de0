const express = require("express");
const path = require("path");
const app = express();
const publicPath = path.resolve(__dirname, "../public");
app.use(express.static(publicPath));
const rutasMain = require('./routes/main.js')
const userRoutes = require('./routes/user.js')

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.listen(3000, () => {
    console.log("Servidor iniciado en http://localhost:3000/")
});

app.use('/', rutasMain);
app.use('/user', userRoutes);

