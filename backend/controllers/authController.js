const bcrypt = require("bcryptjs");

const User = require("../models/User");

const generateToken = require("../utils/generateToken");

const { validateRegister } = require("../validations/authValidation");

/*
  REGISTER USER
*/

const registerUser = async (req, res) => {
  try {
    /*
      Validate Incoming Data
    */

    const errors = validateRegister(req.body);

    if (Object.keys(errors).length > 0) {
      return res.status(400).json({
        success: false,
        errors,
      });
    }

    const { name, email, password } = req.body;

    /*
      Check Existing User
    */

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "User already exists",
      });
    }

    /*
      Hash Password
    */

    const salt = await bcrypt.genSalt(10);

    const hashedPassword = await bcrypt.hash(password, salt);

    /*
      Create User
    */

    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      role: "employee",
    });

    /*
      Generate Token
    */

    const token = generateToken(user);

    /*
      Send Response
    */

    res.status(201).json({
      success: true,
      message: "User registered successfully",

      token,

      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

/*
  LOGIN USER
*/

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    /*
      Check User Exists
    */

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Invalid credentials",
      });
    }

    /*
      Compare Password
    */

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: "Invalid credentials",
      });
    }

    /*
      Generate Token
    */

    const token = generateToken(user);

    /*
      Response
    */

    res.status(200).json({
      success: true,
      message: "Login successful",

      token,

      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
  console.log("LOGIN ERROR:", error);

  res.status(500).json({
    success: false,
    message: error.message,
  });
}
  // catch (error) {
  //   console.log(error);

  //   res.status(500).json({
  //     success: false,
  //     message: "Server Error",
  //   });
  // }
};

module.exports = {
  registerUser,
  loginUser,
};