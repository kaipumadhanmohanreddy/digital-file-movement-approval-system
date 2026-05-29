const express = require("express");

const router = express.Router();

const {
  registerUser,
  loginUser,
} = require("../controllers/authController");

const protect = require("../middleware/authMiddleware");

/*
  Public Routes
*/

router.post("/register", registerUser);

router.post("/login", loginUser);

/*
  Protected Test Route
*/

router.get("/profile", protect, (req, res) => {
  res.json({
    success: true,
    message: "Protected Route Accessed",
    user: req.user,
  });
});

module.exports = router;