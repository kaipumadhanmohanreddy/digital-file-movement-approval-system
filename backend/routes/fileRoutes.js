const express = require("express");

const router = express.Router();

const {
  createFile,
  getAllFiles,
  getSingleFile,
  updateFile,
  deleteFile,
} = require("../controllers/fileController");

const protect = require("../middleware/authMiddleware");

/*
  Protected File Routes
*/

router.post("/", protect, createFile);

router.get("/", protect, getAllFiles);

router.get("/:id", protect, getSingleFile);

router.put("/:id", protect, updateFile);

router.delete("/:id", protect, deleteFile);

module.exports = router;