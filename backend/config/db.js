const mongoose = require("mongoose");

/*
  Database Connection Function
  This function connects our backend to MongoDB
*/

const connectDB = async () => {
  try {
    // Connecting MongoDB using Mongoose
    const conn = await mongoose.connect(process.env.MONGO_URI);

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log("MongoDB Connection Failed");

    // Exit process if DB connection fails
    process.exit(1);
  }
};

module.exports = connectDB;