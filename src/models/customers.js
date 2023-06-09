const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
    email: String,
    name: {
        type: String,
        required: true
    },
    address: String,
    phone: Number,
    description: String,
    image: String,
},
    { timestamps: true }
);

const Customer = mongoose.model('customer', customerSchema);

module.exports = Customer;