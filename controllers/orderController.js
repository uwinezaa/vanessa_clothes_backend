const Order = require('../models/Order');

exports.createOrder = async (req, res) => {
  try {
    const { products, totalPrice, deliveryAddress, paymentMethod } = req.body;
    const order = await Order.create({
      userId: req.user.id,
      products,
      totalPrice,
      deliveryAddress,
      paymentMethod
    });
    await order.populate('products.productId');
    res.status(201).json(order);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getOrders = async (req, res) => {
  try {
    const orders = await Order.find()
      .populate('userId', 'name email')
      .populate('products.productId')
      .sort({ createdAt: -1 });
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getUserOrders = async (req, res) => {
  try {
    const orders = await Order.find({ userId: req.user.id })
      .populate('products.productId')
      .sort({ createdAt: -1 });
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

