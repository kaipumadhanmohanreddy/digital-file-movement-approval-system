const http = require("http");

const { Server } = require("socket.io");

const dotenv = require("dotenv");

/*
  Load ENV
*/

dotenv.config();

/*
  Connect DB
*/

const connectDB = require("./config/db");

/*
  Initialize Express App
*/

const app = require("./app");

/*
  Connect MongoDB
*/

connectDB();

/*
  Create HTTP Server
*/

const server = http.createServer(app);

/*
  Socket Server
*/

const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",

    credentials: true,
  },
});

/*
  Socket Connection
*/

io.on("connection", (socket) => {
  console.log("User Connected:", socket.id);

  socket.on("disconnect", () => {
    console.log("User Disconnected");
  });
});

/*
  Make io available globally
*/

app.set("io", io);

/*
  Start Server
*/

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
