const express = require('express');
const router = express.Router();
const { createOrder, getOrders, getUserOrders } = require('../controllers/orderController');
const { protect, adminOnly } = require('../middleware/auth');

router.post('/', protect, createOrder);
router.get('/', protect, adminOnly, getOrders);
router.get('/user', protect, getUserOrders);

module.exports = router;

