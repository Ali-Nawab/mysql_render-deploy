const express = require('express');

const router = express.Router();

const { createCustomer } = require('../controllers/Customer.controller');
const { createOrder, getOrders } = require('../controllers/Order.controller');

router.post('/customers', createCustomer);
router.post('/orders', createOrder);
router.get('/getOrders', getOrders);

module.exports = router;