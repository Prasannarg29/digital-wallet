const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
  sender: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // Sender's User ID
  recipient: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // Recipient's User ID
  amount: { type: Number, required: true },
  transactionType: { type: String, enum: ['transfer', 'top-up'], required: true }, // Type of transaction
  status: { type: String, enum: ['success', 'failed'], default: 'success' }, // Status of the transaction
  description: { type: String }, // Optional transaction note
  createdAt: { type: Date, default: Date.now }, // Timestamp
});

module.exports = mongoose.model('Transaction', transactionSchema);
