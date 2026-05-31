const mongoose = require("mongoose");

/*
  Approval History Schema

  Stores:
  - Action performed
  - Remarks
  - User who performed action
  - Timestamp
*/

const approvalHistorySchema = new mongoose.Schema(
  {
    status: {
      type: String,
    },

    remarks: {
      type: String,
    },

    actionBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  },
);

/*
  Main File Schema
*/

const fileSchema = new mongoose.Schema(
  {
    /*
      File Title
    */

    title: {
      type: String,
      required: [true, "Title is required"],
      trim: true,
    },

    /*
      File Description
    */

    description: {
      type: String,
      required: [true, "Description is required"],
      minlength: 10,
    },

    /*
      Department
    */

    department: {
      type: String,
      required: [true, "Department is required"],
    },

    /*
    Assigned Department
    */

    assignedDepartment: {
      type: String,
      default: "",
    },

    /*
      File Category
    */

    category: {
      type: String,
      required: [true, "Category is required"],
    },

    /*
      Priority
    */

    priority: {
      type: String,
      enum: ["Low", "Medium", "High"],
      default: "Medium",
    },

    /*
      File Status Workflow
    */

    status: {
      type: String,
      enum: [
        "Submitted",
        "Under Review",
        "Approved",
        "Rejected",
        "Returned for Changes",
      ],
      default: "Submitted",
    },

    /*
      Optional Remarks
    */

    remarks: {
      type: String,
      default: "",
    },

    /*
      File Attachment
    */

    attachment: {
      type: String,
      default: "",
    },

    /*
      File Creator
    */

    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    /*
    Assigned Officer
    */

    assignedOfficer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },

    /*
      Approval History
    */

    approvalHistory: [approvalHistorySchema],
  },

  {
    timestamps: true,
  },
);

module.exports = mongoose.model("File", fileSchema);
