const User = require("../models/User");

/*
  Get All Users
*/

const getUsers = async (
  req,
  res
) => {
  try {
    const users =
      await User.find().select(
        "-password"
      );

    res.status(200).json({
      success: true,
      users,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message:
        "Failed to fetch users",
    });
  }
};

/*
  Create Officer/Admin
*/

const createOfficer =
  async (req, res) => {
    try {
      const {
        name,
        email,
        password,
        role,
      } = req.body;

      /*
        Existing User Check
      */

      const existingUser =
        await User.findOne({
          email,
        });

      if (existingUser) {
        return res
          .status(400)
          .json({
            success: false,
            message:
              "User already exists",
          });
      }

      /*
        Create User
      */

      const user =
        await User.create({
          name,
          email,
          password,
          role,
        });

      res.status(201).json({
        success: true,
        message:
          "Officer created successfully",
        user,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message:
          "Failed to create officer",
      });
    }
  };

module.exports = {
  getUsers,
  createOfficer,
};