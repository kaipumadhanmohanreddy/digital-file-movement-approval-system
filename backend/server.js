const dotenv = require("dotenv");
const connectDB = require("./config/db");
const app = require("./app");

/*
  Load Environment Variables
*/

dotenv.config();

/*
  Connect MongoDB
*/

connectDB();

/*
  Define PORT
*/

const PORT = process.env.PORT || 5000;

/*
  Start Server
*/

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});