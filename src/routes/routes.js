const {addnewProduct,getProducts, getProductWithID, updateProduct,deleteProduct  } = require('../controllers/controllers')
function routes(app) {

    app.route('/products').post(addnewProduct);
    app.route('/products').get(getProducts);
    app.route('/products/:ProductID').get(getProductWithID);
    app.route('/products/:ProductID').put(updateProduct);
    app.route('/products/:ProductID').delete(deleteProduct);
    
    
}

module.exports = routes;