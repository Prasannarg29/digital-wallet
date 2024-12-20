const express = require('express');
const { getBalance, transferFunds } = require('../controllers/walletController');
const { protect } = require('../middlewares/authMiddleware');
const router = express.Router();

// Routes
router.get('/balance', protect, getBalance);
router.post('/transfer', protect, transferFunds);

module.exports = router;
