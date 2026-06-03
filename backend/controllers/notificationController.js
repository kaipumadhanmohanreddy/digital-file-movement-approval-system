const Notification =
  require("../models/Notification");

/*
  Get User Notifications
*/

const getNotifications =
  async (req, res) => {
    try {
      const notifications =
        await Notification.find({
          user: req.user.id,
        }).sort({
          createdAt: -1,
        });

      res.status(200).json({
        success: true,
        notifications,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message:
          "Failed to fetch notifications",
      });
    }
  };

/*
  Mark Notification Read
*/

const markAsRead = async (
  req,
  res
) => {
  try {
    await Notification.findByIdAndUpdate(
      req.params.id,
      {
        isRead: true,
      }
    );

    res.status(200).json({
      success: true,
      message:
        "Notification updated",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message:
        "Update failed",
      });
  }
};

module.exports = {
  getNotifications,
  markAsRead,
};