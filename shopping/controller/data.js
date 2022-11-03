const Classproduct=require('../models/products');
exports.gettingProducts=(req, res, next) => {
    res.render('add-product', {
      pageTitle: 'Add Product',
      path: '/admin/add-product',
      // formsCSS: true,
      // productCSS: true,
      // activeAddProduct: true
    });
  }

exports.postingProducts=(req, res, next) => {
   const product=new Classproduct(req.body.title);
   product.save();
    res.redirect('/');
  }

exports.addingProducts=(req, res, next) => {
  Classproduct.fetchAll((products)=>{res.render('shop', {
    prods: products,
    pageTitle: 'Shop',
    path: '/',
    hasProducts: products.length > 0,
    activeShop: true,
    productCSS: true
  })
});
}

