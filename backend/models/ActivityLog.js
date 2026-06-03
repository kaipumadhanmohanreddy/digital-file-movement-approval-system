const mongoose = require("mongoose");

/*
  Activity Log Schema
*/

const activityLogSchema =
  new mongoose.Schema(
    {
      file: {
        type:
          mongoose.Schema.Types
            .ObjectId,

        ref: "File",

        required: true,
      },

      actionBy: {
        type:
          mongoose.Schema.Types
            .ObjectId,

        ref: "User",

        required: true,
      },

      action: {
        type: String,

        required: true,
      },

      remarks: {
        type: String,

        default: "",
      },

      department: {
        type: String,

        default: "",
      },
    },

    {
      timestamps: true,
    }
  );

module.exports =
  mongoose.model(
    "ActivityLog",
    activityLogSchema
  );