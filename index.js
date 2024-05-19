const express = require("express");
const app = express();
const http = require("http");
const port = process.env.PORT || 3000;
const server = http.createServer(app);
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");
const initializeSocket = require("./sockets/socketInit");

const io = require("socket.io")(server, {
  cors: {
    origin: "http://localhost:5173",
  },
});

// Apply the middleware
io.use(socketAuth);

//connect to mongodb
const DB = process.env.MONGO_URI;
mongoose
  .connect(DB)
  .then(() => {
    console.log("connection successful");
  })
  .catch((err) => console.log("no connection"));



//middleware
app.use(express.json());
app.use(cors());

//routes
const authRoutes = require('./routes/authRoutes');

// Initialize Socket.io
initializeSocket(server);


app.get("/api", (req, res) => {
  res.send("Hello World");
});

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
