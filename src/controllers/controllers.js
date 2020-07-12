const mongoose = require('mongoose');
const productSchema = require('../models/models')
const Product = mongoose.model('Product',productSchema);
export const addnewProduct = (req, res) => {
    const newProdut = new Product(req.body);
    newProduct.save((err, Product) => {
        if (err) {
            
        }
        res.json(Product);
    })
}