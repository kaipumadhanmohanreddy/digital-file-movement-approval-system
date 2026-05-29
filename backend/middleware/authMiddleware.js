const jwt = require("jsonwebtoken");

/*
  PROTECT ROUTES

  This middleware:
  - Verifies JWT token
  - Allows authorized users only
*/

const protect = async (req, res, next) => {
  try {
    let token;

    /*
      Read Authorization Header
    */

    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      /*
        Extract Token
      */

      token = req.headers.authorization.split(" ")[1];

      /*
        Verify Token
      */

      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      /*
        Attach User Data
      */

      req.user = decoded;

      next();
    } else {
      return res.status(401).json({
        success: false,
        message: "Unauthorized access",
      });
    }
  } catch (error) {
    console.log(error);

    return res.status(401).json({
      success: false,
      message: "Invalid or expired token",
    });
  }
};

module.exports = protect;