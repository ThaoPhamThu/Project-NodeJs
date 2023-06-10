const Customer = require('../models/customers');
const aqp = require('api-query-params');

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
    },

    displayCustomersAPI: async (limit, page, queryString) => {
        try {
            let results = "";
            if (limit && page) {
                let skip = (page - 1) * limit;
                let { filter } = aqp(queryString);
                delete filter.page;
                results = await Customer.find(filter).skip(skip).limit(limit);
                return results;

            } else {
                results = Customer.find({});
            }
            return results;
        } catch (error) {
            return null;
        }
    },

    getACustomerAPI: async (id) => {
        try {
            let result = await Customer.findById(id);
            return result;
        } catch (error) {
            console.log(error);
            return null;
        }
    },

    updateCustomerAPI: async (customerData) => {
        try {
            let result = await Customer.updateOne({ _id: customerData.id }, { name: customerData.name, email: customerData.email, address: customerData.address });
            return result;
        } catch (error) {
            console.log(error);
            return null;
        }
    },

    deleteCustomer: async (id) => {
        try {
            let result = await Customer.deleteById(id); // deleteById () trong soft delete
            return result;
        } catch (error) {
            console.log(error);
            return null;
        }
    },

    deleteArrCustomers: async (arrId) => {
        try {
            let result = await Customer.delete({ _id: { $in: arrId } }); // delete() trong soft delete
            return result;
        } catch (error) {
            return null;
        }
    }
}