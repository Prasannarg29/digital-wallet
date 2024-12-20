const Transaction = require('../models/Transaction');

// Get Transaction History
exports.getTransactionHistory = async (req, res) => {
  try {
    const transactions = await Transaction.find({
      $or: [{ sender: req.user.id }, { recipient: req.user.id }],
    })
      .populate('sender', 'name email') 
      .populate('recipient', 'name email') 
      .sort({ createdAt: -1 }); 

    res.status(200).json({
      message: 'Transaction history fetched successfully',
      transactions,
    });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};
