const mongoose = require('mongoose');


const mongoURI = "mongodb://localhost:27017/";

mongoose
  .connect(mongoUR)
  .then(() => console.log('MongoDB connected'))
  .catch((err) => {
    console.error('MongoDB connection failed:', err);
    process.exit(1);  
  });
