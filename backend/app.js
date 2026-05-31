const express = require("express");
const cors = require("cors");

const app = express();

const authRoutes = require("./routes/authRoutes");
const fileRoutes = require("./routes/fileRoutes");
const approvalRoutes = require("./routes/approvalRoutes");

/*
  Middleware
*/

// Allows frontend to communicate with backend
app.use(cors());

// Parses incoming JSON data
app.use(express.json());

/*
  Routes
*/

app.use("/api/auth", authRoutes);
app.use("/api/files", fileRoutes);
app.use("/api/approval", approvalRoutes);

/*
  Test Route
*/

app.get("/", (req, res) => {
  res.send("Digital File Movement API Running");
});

module.exports = app;