const express = require('express');

const {gettingProducts,postingProducts}=require('../controller/data');


const Adminrouter = express.Router();


// /admin/add-product => GET
Adminrouter.get('/add-product', gettingProducts);

// /admin/add-product => POST
Adminrouter.post('/add-product', postingProducts);

module.exports={Adminrouter}
