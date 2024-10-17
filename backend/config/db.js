
const mongoose = require('mongoose');

// MongoDB connection function
const connectDB = async () => {
  try {
    // Replace the connection string below with your actual MongoDB URI
    const conn = await mongoose.connect('mongodb+srv://godwinjudahj:godwinjudahj@cluster0.qqcix.mongodb.net/', {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1); // Exit with failure
  }
};

module.exports = connectDB;
