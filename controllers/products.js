const Product = require("../models/product");
exports.getAddProduct = (req, res, next) => {
  // console.log('In another middleware');
  // res.send('<form action="/admin/add-product" method="POST"><input type="text" name="title"><button type="submit">add</button></form>');
  // res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
  res.render("add-product", {
    pageTitle: "Add Product",
    path: "/admin/add-product",
  });
};

exports.postAddProduct = (req, res, next) => {
  const product = new Product(req.body.title);
  product.save();
  res.redirect("/");
};

exports.getProducts = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render("shop", {
      prods: products,
      pageTitle: "Shop",
      path: "/",
      hasProducts: products.length > 0,
    });
  });
  // console.log('In another middleware');
  // res.send('<h1>Hello from Express</h1>');
  // console.log(adminData.products);
  // res.sendFile(path.join(rootDir, 'views', 'shop.html'));
};
