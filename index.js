const express = require("express");
const app = express();
const http = require("http");
const port = process.env.PORT || 3000;
const server = http.createServer(app);
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");
const initializeSocket = require("./sockets/socketInit");


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
const gameRoutes = require('./routes/gameRoutes');

app.use('/api', authRoutes);
app.use('/api', gameRoutes);

// Initialize Socket.io
initializeSocket(server);

app.get("/", (req, res) => {
  res.send("Hello World");
});

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
