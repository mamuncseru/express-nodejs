const express = require("express");
const path = require("path");
const adminData = require("./routes/admin");
const shopRoutes = require("./routes/shop");
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

app.use("/admin", adminData.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
  res
    .status(404)
    .render('page-not-found', {pageTitle: 'Page Not Found'} )
    // .sendFile(path.join(__dirname, "views", "page-not-found.html"));
});

app.listen(3000);
