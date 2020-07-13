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

export const getProducts = (req, res) => {
    Product.find({}, (err, Product) => {
        if(err) {

        }
        res.json(Product);
    })
}

export const getProductWithID = (req, res) => {
    Product.findById(req.params.ProductID, (err, Product) => {
         if(err)
         {

         }
         res.json()
     })  

    }