const express = require('express');

const {addingProducts}=require('../controller/data')

const Clientrouter = express.Router();

Clientrouter.get('/', addingProducts);

module.exports = {Clientrouter};
