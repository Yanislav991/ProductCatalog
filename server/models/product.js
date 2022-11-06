const mongoose = require('mongoose');

const productScheme = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: false
    },
    quantity: {
        type: Number,
        requred: false,
        validate: {
            validator: Number.isInteger,
            message: '{VALUE} is not an integer value'
        }
    },
    description: {
        type: String,
        maxLength: 100
    },
    categories: [{
         type: mongoose.Types.ObjectId,
          ref: 'Category' 
    }]
})

module.exports = new mongoose.model('Product', productScheme);