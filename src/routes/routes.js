const addnewProduct = require('../controllers/controllers')
function routes(app) {

    app.route('/products').post(addnewProduct);
    
}

module.exports = routes;