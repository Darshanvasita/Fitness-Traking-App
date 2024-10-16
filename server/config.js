const mongoose = require('mongoose');
const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/Fitness-app');
    // await mongoose.connect();
    console.log('MongoDB connected');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
