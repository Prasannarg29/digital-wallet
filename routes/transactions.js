const express = require('express');
const { getTransactionHistory } = require('../controllers/transactionController');
const { protect } = require('../middlewares/authMiddleware');
const router = express.Router();

router.get('/history', protect, getTransactionHistory);

module.exports = router;
