const express = require("express");
const upload = require("../utils/upload");
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

router.post("/", protect, upload.single("attachment"), createFile);

router.get("/", protect, getAllFiles);

router.get("/:id", protect, getSingleFile);

router.put("/:id", protect, updateFile);

router.delete("/:id", protect, deleteFile);

module.exports = router;
