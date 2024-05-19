const socketio = require("socket.io");
const socketAuth = require("../utils/socketAuth");
const handleSocketEvents = require("./socketHandlers");

const initializeSocket = (server) => {
  const io = socketio(server, {
    cors: {
      origin: "http://localhost:5173",
    },
  });

  io.use(socketAuth);

  io.on("connection", (socket) => {
    handleSocketEvents(io, socket);
  });
};

module.exports = initializeSocket;
