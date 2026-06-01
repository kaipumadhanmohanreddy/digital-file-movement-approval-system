const express = require("express");

const {
  getUsers,
  createOfficer,
} = require("../controllers/userController");

const protect = require("../middleware/authMiddleware");

const authorizeRoles = require("../middleware/roleMiddleware");

const router = express.Router();

/*
  Get All Users
*/

router.get(
  "/",
  protect,
  authorizeRoles("admin"),
  getUsers
);

/*
  Create Officer/Admin
*/

router.post(
  "/create-officer",
  protect,
  authorizeRoles("admin"),
  createOfficer
);

module.exports = router;