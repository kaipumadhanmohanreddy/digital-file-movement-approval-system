const mongoose = require("mongoose");

const dotenv = require("dotenv");

/*
  Load Environment Variables
*/

dotenv.config();

/*
  Database Connection Function
*/

const connectDB = async () => {
  try {
    /*
      Connect MongoDB
    */

    const conn = await mongoose.connect(process.env.MONGO_URI);

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log("MongoDB Connection Failed:", error.message);

    process.exit(1);
  }
};

module.exports = connectDB;
