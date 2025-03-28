const Customer = require('../models/customer.model');

const createCustomer = async (req, res) => {
    try {
        const { name, email, phone, age, city } = req.body;
        const customer = await Customer.create({
            name: name, email: email, phone: phone, age: age, city: city });
        res.status(201).json(customer);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

module.exports = { createCustomer }