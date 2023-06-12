const mongoose = require('mongoose');
const mongoose_delete = require('mongoose-delete');


const customerSchema = new mongoose.Schema(
    {
        email: String,
        name: {
            type: String,
            required: true
        },
        address: String,
        phone: String,
        description: String,
        image: String,
    },
    {
        timestamps: true,
        statics: {

        }
    }
);

customerSchema.plugin(mongoose_delete, { overrideMethods: 'all' });

const Customer = mongoose.model('customer', customerSchema);

module.exports = Customer;