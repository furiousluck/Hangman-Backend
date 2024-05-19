const jwt = require('jsonwebtoken');
const Player = require('../models/Player');

const socketAuth = async (socket, next) => {
  const token = socket.handshake.auth.token;
  if (!token) {
    return next(new Error('Authentication error'));
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const player = await Player.findById(decoded.id).select('-password');
    if (!player) {
      return next(new Error('Authentication error'));
    }
    socket.player = player; // Attach the player to the socket
    next();
  } catch (err) {
    return next(new Error('Authentication error'));
  }
};
