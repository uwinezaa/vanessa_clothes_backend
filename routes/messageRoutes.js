const express = require('express');
const router = express.Router();
const { createMessage, getMessages, markAsRead, deleteMessage } = require('../controllers/messageController');
const { protect, adminOnly } = require('../middleware/auth');

router.post('/', createMessage);
router.get('/', protect, adminOnly, getMessages);
router.put('/:id/read', protect, adminOnly, markAsRead);
router.delete('/:id', protect, adminOnly, deleteMessage);

module.exports = router;
