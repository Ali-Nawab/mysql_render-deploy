const Order = require('../models/Order.model');
//const Customer = require('../models/customer.model');
const Customer = require('../models/customer.model')

const createOrder = async (req, res) => {
    try {
        const order = await Order.create(req.body);
        res.status(201).json(order);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

const getOrders = async (req, res) => {
    try {
        const orders = await Order.findAll({
            include: Customer
        });
        res.status(200).json(orders);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

module.exports = { createOrder, getOrders }