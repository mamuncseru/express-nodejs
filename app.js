const express = require("express");
const path = require("path");
const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const errorController = require('./controllers/error');
// const expressHbs = require('express-handlebars');

const app = express();

// app.engine('hbs', expressHbs({
//   extname: "hbs",
//   defaultLayout: false,
//   layoutsDir: "views/layouts/"
// }));
app.set('view engine', 'ejs');

// app.set('view engine', 'pug');
app.set('views', 'views');

app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

app.listen(3000);
