const File = require("../models/File");

const Notification = require("../models/Notification");

const ActivityLog = require("../models/ActivityLog");

/*
  APPROVE FILE
*/

const approveFile = async (req, res) => {
  try {
    const { remarks } = req.body;

    /*
      Find File
    */

    const file = await File.findById(req.params.id);

    if (!file) {
      return res.status(404).json({
        success: false,
        message: "File not found",
      });
    }

    /*
      Update Status
    */

    file.status = "Approved";

    file.remarks = remarks || "Approved successfully";

    /*
      Add Approval History
    */

    file.approvalHistory.push({
      status: "Approved",
      remarks: remarks || "Approved successfully",

      actionBy: req.user.id,
    });

    await file.save();

    await Notification.create({
      user: file.createdBy,

      message: `Your file "${file.title}" was ${status}`,

      type: status === "Approved" ? "approval" : "rejection",
    });

    /*
  Create Activity Log
*/

    await ActivityLog.create({
      file: file._id,

      actionBy: req.user.id,

      action: status,

      remarks,

      department: file.currentDepartment,
    });

    res.status(200).json({
      success: true,
      message: "File approved successfully",

      file,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

/*
  REJECT FILE
*/

const rejectFile = async (req, res) => {
  try {
    const { remarks } = req.body;

    /*
      Remarks Mandatory
    */

    if (!remarks) {
      return res.status(400).json({
        success: false,
        message: "Remarks are required for rejection",
      });
    }

    const file = await File.findById(req.params.id);

    if (!file) {
      return res.status(404).json({
        success: false,
        message: "File not found",
      });
    }

    /*
      Update Status
    */

    file.status = "Rejected";

    file.remarks = remarks;

    /*
      Add History
    */

    file.approvalHistory.push({
      status: "Rejected",
      remarks,

      actionBy: req.user.id,
    });

    await file.save();

    res.status(200).json({
      success: true,
      message: "File rejected successfully",

      file,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

/*
  RETURN FILE FOR CHANGES
*/

const returnFile = async (req, res) => {
  try {
    const { remarks } = req.body;

    if (!remarks) {
      return res.status(400).json({
        success: false,
        message: "Remarks required",
      });
    }

    const file = await File.findById(req.params.id);

    if (!file) {
      return res.status(404).json({
        success: false,
        message: "File not found",
      });
    }

    /*
      Update Status
    */

    file.status = "Returned for Changes";

    file.remarks = remarks;

    /*
      Add History
    */

    file.approvalHistory.push({
      status: "Returned for Changes",
      remarks,

      actionBy: req.user.id,
    });

    await file.save();

    res.status(200).json({
      success: true,
      message: "File returned successfully",

      file,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

/*
  ASSIGN DEPARTMENT
*/

const assignDepartment = async (req, res) => {
  try {
    const { assignedDepartment } = req.body;

    const file = await File.findById(req.params.id);

    if (!file) {
      return res.status(404).json({
        success: false,
        message: "File not found",
      });
    }

    /*
      Update Department
    */

    file.assignedDepartment = assignedDepartment;

    file.status = "Under Review";

    /*
      Add Approval History
    */

    file.approvalHistory.push({
      status: "Under Review",

      remarks: `Assigned to ${assignedDepartment}`,

      actionBy: req.user.id,
    });

    await file.save();

    res.status(200).json({
      success: true,
      message: "Department assigned successfully",

      file,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

module.exports = {
  approveFile,
  rejectFile,
  returnFile,
  assignDepartment,
};
