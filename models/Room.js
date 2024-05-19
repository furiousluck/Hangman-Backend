const mongoose = require('mongoose');

const playerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  socketID: {
    type: String
  },
  isHost: {
    type: Boolean,
    default: false
  },
  score: {
    type: Number,
    default: 0
  },
  wrongGuesses: {
    type: Number,
    default: 0
  },
  
});

const roomSchema = new mongoose.Schema({
  word: {
    type: String,
    required: true,
    trim: true
  },
  hint:{
    type: String,
    required: true,
    trim: true
},
  roomNumber: {
    type: String,
    required: true,
    unique: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  players: [playerSchema],
  isJoin: {
    type: Boolean,
    default: true
  },
  turn: playerSchema,
  turnIndex: {
    type: Number,
    default: 0
  }
});

const Room = mongoose.model('Room', roomSchema);

module.exports = Room;
