const User = require('../models/User');
const Transaction = require('../models/Transaction');

// Transfer Funds
exports.transferFunds = async (req, res) => {
  const { recipientEmail, amount, description } = req.body;

  try {
    const sender = await User.findById(req.user.id);
    const recipient = await User.findOne({ email: recipientEmail });

    if (!recipient) return res.status(404).json({ message: 'Recipient not found' });
    if (sender.balance < amount) return res.status(400).json({ message: 'Insufficient balance' });

    // Update balances
    sender.balance -= amount;
    recipient.balance += amount;

    await sender.save();
    await recipient.save();

    
    const transaction = await Transaction.create({
      sender: sender._id,
      recipient: recipient._id,
      amount,
      transactionType: 'transfer',
      description: description || 'Fund transfer',
    });

    res.status(200).json({
      message: 'Transfer successful',
      transaction,
    });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};
