const express = require("express");
const cors = require("cors");

const app = express();

const authRoutes = require("./routes/authRoutes");

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

/*
  Test Route
*/

app.get("/", (req, res) => {
  res.send("Digital File Movement API Running");
});

module.exports = app;