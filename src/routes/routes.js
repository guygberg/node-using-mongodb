const {addnewProduct,getProducts, getProductWithID} = require('../controllers/controllers')
function routes(app) {

    app.route('/products').post(addnewProduct);
    app.route('/products').get(getProducts);
    app.route('/products/:ProductID').get(getProductWithID);
    
}

module.exports = routes;