const Customer = require('../models/customers');

module.exports = {
    createCustomerAPI: async (customerData) => {
        try {
            let result = await Customer.create({
                email: customerData.email,
                address: customerData.address,
                phone: customerData.phone,
                name: customerData.name,
                description: customerData.description,
                image: customerData.image
            });
            return result;
        } catch (error) {
            console.log(error);
            return null;
        }
    },

    createArrCustomersAPI: async (arr) => {
        try {
            let results = await Customer.insertMany(arr);
            return results;
        } catch (error) {
            console.log(error);
            return null;
        }
    }
}