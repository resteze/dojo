const ProductController = require('../controllers/products.controller')

module.exports = app => {
    app.get('/api/all/', ProductController.getAllProducts)
    app.post('/api/', ProductController.createProduct)
    app.get('/api/:id/', ProductController.getProduct)
    app.delete('/api/:id/', ProductController.deleteProduct)
    app.put('/api/update/:id/', ProductController.updateProduct)
}