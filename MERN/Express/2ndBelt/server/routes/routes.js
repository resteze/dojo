const StoreController = require('../controllers/store.controller')

module.exports = app => {
    app.get('/', StoreController.getAllStores)
    app.post('/store/add', StoreController.createStore)
    app.get('/store/:id', StoreController.getStore)
    app.delete('/store/:id', StoreController.deleteStore)
    app.put('/store/edit/:id/', StoreController.updateStore)
}