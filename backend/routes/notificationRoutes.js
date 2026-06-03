const express = require("express");

const {
  getNotifications,
  markAsRead,
} = require(
  "../controllers/notificationController"
);

const protect = require(
  "../middleware/authMiddleware"
);

const router = express.Router();

/*
  Get Notifications
*/

router.get(
  "/",
  protect,
  getNotifications
);

/*
  Mark Read
*/

router.put(
  "/:id",
  protect,
  markAsRead
);

module.exports = router;