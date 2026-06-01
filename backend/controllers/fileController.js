const File = require("../models/File");

const validateFileRequest = require("../validations/fileValidation");

/*
  CREATE FILE REQUEST
*/

const createFile = async (req, res) => {
  try {
    /*
      Validate Request Data
    */

    const errors = validateFileRequest(req.body);

    if (Object.keys(errors).length > 0) {
      return res.status(400).json({
        success: false,
        errors,
      });
    }

    /*
      Create File
    */

    const file = await File.create({
      ...req.body,

      createdBy: req.user.id,

      attachment: req.file?.filename || "",

      /*
        Initial Approval History
      */

      approvalHistory: [
        {
          status: "Submitted",
          remarks: "File created",

          actionBy: req.user.id,
        },
      ],
    });

    res.status(201).json({
      success: true,
      message: "File request created successfully",

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
  GET ALL FILES
*/

const getAllFiles = async (req, res) => {
  try {
    /*
      Populate User Details
    */

    const files = await File.find()
      .populate("createdBy", "name email role")
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: files.length,

      files,
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
  GET SINGLE FILE
*/

const getSingleFile = async (req, res) => {
  try {
    const file = await File.findById(req.params.id)
      .populate("createdBy", "name email role")
      .populate("approvalHistory.actionBy", "name role");

    /*
      Check File Exists
    */

    if (!file) {
      return res.status(404).json({
        success: false,
        message: "File not found",
      });
    }

    res.status(200).json({
      success: true,

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
  UPDATE FILE
*/

const updateFile = async (req, res) => {
  try {
    let file = await File.findById(req.params.id);

    /*
      File Existence Check
    */

    if (!file) {
      return res.status(404).json({
        success: false,
        message: "File not found",
      });
    }

    /*
      Ownership Check
    */

    if (file.createdBy.toString() !== req.user.id) {
      return res.status(403).json({
        success: false,
        message: "Unauthorized update attempt",
      });
    }

    /*
      Prevent Editing Approved Files
    */

    if (file.status === "Approved") {
      return res.status(400).json({
        success: false,
        message: "Approved files cannot be edited",
      });
    }

    file = await File.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    res.status(200).json({
      success: true,
      message: "File updated successfully",

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
  DELETE FILE
*/

const deleteFile = async (req, res) => {
  try {
    const file = await File.findById(req.params.id);

    /*
      Check File Exists
    */

    if (!file) {
      return res.status(404).json({
        success: false,
        message: "File not found",
      });
    }

    /*
      Ownership Validation
    */

    if (file.createdBy.toString() !== req.user.id) {
      return res.status(403).json({
        success: false,
        message: "Unauthorized delete attempt",
      });
    }

    await file.deleteOne();

    res.status(200).json({
      success: true,
      message: "File deleted successfully",
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
  createFile,
  getAllFiles,
  getSingleFile,
  updateFile,
  deleteFile,
};
