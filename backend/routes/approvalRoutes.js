const express = require("express");

const router = express.Router();

const {
  approveFile,
  rejectFile,
  returnFile,
  assignDepartment,
} = require("../controllers/approvalController");

const protect = require("../middleware/authMiddleware");

const authorizeRoles = require("../middleware/roleMiddleware");

/*
  Officer/Admin Only Routes
*/

router.put(
  "/approve/:id",
  protect,
  authorizeRoles("admin", "officer"),
  approveFile
);

router.put(
  "/reject/:id",
  protect,
  authorizeRoles("admin", "officer"),
  rejectFile
);

router.put(
  "/return/:id",
  protect,
  authorizeRoles("admin", "officer"),
  returnFile
);

router.put(
  "/assign-department/:id",
  protect,
  authorizeRoles("admin"),
  assignDepartment
);

module.exports = router;