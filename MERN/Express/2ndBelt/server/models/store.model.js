const mongoose = require('mongoose')
const StoreSchema = new mongoose.Schema({
    storeName: {
        type: String,
        required: [true, 'Store Name is required'],
        minlength: [3, "Store Name must be at least 3 characters"]
    },
    storeNumber: {
        type: Number,
        required: [true, 'Store Number is required'],
        min: [0, "Store Number has to be greater than 0"]
    },
    open: {
        type: String
    }
}, { timestamps: true })
module.exports.Store = mongoose.model('Store', StoreSchema)