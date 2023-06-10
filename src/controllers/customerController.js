const { createCustomerAPI, createArrCustomersAPI, displayCustomersAPI, getACustomerAPI, updateCustomerAPI, deleteCustomer, deleteArrCustomers } = require('../services/customerService')
const { uploadSingleFile, uploadMultiFiles } = require('../services/filesService')

module.exports = {
    postCustomerAPI: async (req, res) => {
        let { email, address, phone, name, description } = req.body;

        let imageURL = "";

        if (!req.files || Object.keys(req.files).length === 0) {
            //do nothing
        } else {
            let result = await uploadSingleFile(req.files.image);
            imageURL = result.path;
        };

        let customerData = {
            email,
            address,
            phone, name,
            description,
            image: imageURL
        }

        let customer = await createCustomerAPI(customerData);

        return res.status(200).json({
            errCode: 0,
            data: customer
        })

    },

    postArrCustomersAPI: async (req, res) => {

        let customers = await createArrCustomersAPI(req.body.customers);
        if (customers) {
            return res.status(200).json({
                errCode: 0,
                data: customers
            })
        } else {
            return res.status(200).json({
                errCode: -1,
                data: customers
            })
        }

    },

    getCustomersAPI: async (req, res) => {
        let { limit, page } = req.query;
        let customer = "";
        if (limit && page) {
            customers = await displayCustomersAPI(limit, page);
        } else {
            customers = await displayCustomersAPI();
        }

        return res.status(200).json({
            errCode: 0,
            data: customers
        })
    },

    putCustomerAPI: async (req, res) => {
        // let id = req.body.id;
        // let customerData = await getACustomerAPI(id);
        let customerData = {
            id: req.body.id,
            name: req.body.name,
            email: req.body.email,
            address: req.body.address
        }
        let result = await updateCustomerAPI(customerData);
        return res.status(200).json({
            errCode: 0,
            data: result
        })
    },

    deleteCustomerAPI: async (req, res) => {
        let id = req.body.id;
        let result = await deleteCustomer(id);
        return res.status(200).json({
            errCode: 0,
            data: result
        })
    },

    deleteArrCustomersAPI: async (req, res) => {
        let arrId = req.body.customersId;
        let results = await deleteArrCustomers(arrId);
        return res.status(200).json({
            errCode: 0,
            data: results
        })

    }
}
