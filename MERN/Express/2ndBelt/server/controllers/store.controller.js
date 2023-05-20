const { Store } = require('../models/store.model')

module.exports.createStore = (req, res) => {
    const { storeName, storeNumber, open } = req.body
    Store.create({ storeName, storeNumber, open })
        .then(newProduct => res.json(newProduct))
        .catch(err => {
            console.log(err)
            res.status(400).json(err)           
        })
};
module.exports.getAllStores = (req, res) => {
    Store.find({})
        .then(store => res.json(store))
        .catch(err => res.json(err))
};
module.exports.getStore = (req, res) => {
    Store.findOne({ _id: req.params.id })
        .then(Store => res.json(Store))
        .catch(err => res.json(err))
};
module.exports.updateStore = (req, res) => {
    Store.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
        .then(updatedStore => res.json(updatedStore))
        .catch(err => res.status(400).json(err))
};
module.exports.deleteStore = (req, res) => {
    Store.deleteOne({ _id: req.params.id })
        .then(deleteConfirmation => res.json(deleteConfirmation))
        .catch(err => res.json(err))
}
