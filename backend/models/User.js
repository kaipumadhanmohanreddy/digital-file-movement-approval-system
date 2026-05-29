const mongoose = require("mongoose");

/*
  User Schema

  This schema stores:
  - User basic details
  - Authentication data
  - Role management
*/

const userSchema = new mongoose.Schema(
  {
    // User Full Name
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
    },

    // User Email
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      lowercase: true,
      trim: true,
    },

    // Hashed Password
    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: 6,
    },

    // User Role
    role: {
      type: String,
      enum: ["employee", "admin", "officer"],
      default: "employee",
    },
  },

  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);