const jwt = require("jsonwebtoken");

/*
  Generate JWT Token

  This function creates a secure token
  containing user ID and role.
*/

const generateToken = (user) => {
  return jwt.sign(
    {
      id: user._id,
      role: user.role,
    },

    process.env.JWT_SECRET,

    {
      expiresIn: "7d",
    }
  );
};

module.exports = generateToken;