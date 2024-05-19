const mongoose = require("mongoose");
const Room = require("../models/Room");
const getWord = require("../utils/getWord");

const handleSocketEvents = (io, socket) => {
  console.log(`⚡: ${socket.id} user just connected!`);
  socket.on("disconnect", () => {
    console.log("🔥: A user disconnected");
  });

  socket.on("create_room", async (roomNumber, playerName) => {
    console.log(`Room created with number: ${roomNumber}`);
    // Save the room to MongoDB
    try {
      const existingRoom = await Room.findOne({ roomNumber });
      if (existingRoom) {
        console.log("Room already exists");
        socket.emit("error_message", "Room already exists"); // Inform the client that the room already exists
        return;
      }
      let room = new Room();
      const word = getWord();
      console.log("Word:", word["definition"]);
      room.hint = word["definition"];
      room.word = word["term"];
      room.roomNumber = roomNumber;
      let player = {
        name: playerName,
        socketID: socket.id,
        isHost: true,
      };
      room.players.push(player);
      room.turn = player;
      room = await room.save();
      console.log("Room saved to MongoDB");
      socket.join(roomNumber); // Join the socket to the room
      io.to(roomNumber).emit("room_created", roomNumber); // Confirm room creation to all clients in the room
      socket.emit("room_created", roomNumber); // Confirm room creation to the client
    } catch (err) {
      console.error("Error saving room to MongoDB:", err);
    }
  });
  socket.on("join_room", async (roomNumber, playerName) => {
    try {
      const room = await Room.findOne({ roomNumber });
      console.log("Room found:", room);
      if (room) {
        if (room.isJoin) {
          let player = {
            name: playerName,
            socketID: socket.id,
          };
          room.players.push(player);
          socket.join(roomNumber); // Join the socket to the room
          room.turn = room.players[room.turnIndex];
          room = await room.save();
          io.to(roomNumber).emit("updateRoom", room);
        }
      } else {
        console.log("Room not found");
        socket.emit("error_message", "Room not found"); // Inform the client that the room was not found
      }
    } catch (err) {
      console.error("Error finding room in MongoDB:", err);
    }
  });
  socket.on("change-turn", async (roomNumber) => {
    try {
      let room = await Room.findOne({ room });
      room.turnIndex = (room.turnIndex + 1) % room.players.length;
      if (room.turnIndex === 0) {
        socket.emit("end-game", "Game Over");
        return;
      }
      //get new word for next turn.
      const word = getWord();
      room.hint = word["definition"];
      room.word = word["term"];
      //Reset guesses for all players
      room.players.forEach((player) => (player.wrongGuesses = 0));
      room.turn = room.players[room.turnIndex];
      room = await room.save();
      io.to(roomNumber).emit("updateRoom", room);
    } catch (err) {
      console.error("Error finding room in MongoDB:", err);
    }
  });
  socket.on("letter-guess", async (roomNumber, letter, index) => {
    try {
      let room = await Room.findOne({ roomNumber });
      console.log("Room found:", room);
      if (room) {
        const currentPlayer = room.players[index];
        if (room.word.includes(letter)) {
          console.log("Letter found in word");
          io.to(roomNumber).emit("game-found", "Letter found in word!");
        } else {
          console.log("Letter not found in word");
          currentPlayer.wrongGuesses += 1;
          if (currentPlayer.wrongGuesses === 6) {
            console.log("Player has lost");
            io.to(roomNumber).emit(
              "game-over",
              "All guesses used up! Game Over!"
            );
          } else {
            io.to(roomNumber).emit("updateRoom", room);
          }
          room = await room.save();
        }
      } else {
        console.log("Room not found");
        socket.emit("error_message", "Room not found"); // Inform the client that the room was not found
      }
    } catch (err) {
      console.error("Error finding room in MongoDB:", err);
    }
  });

  socket.on("score", async (roomNumber, index) => {
    try {
      let room = await Room.findOne({ roomNumber });
      console.log("Room found:", room);
      if (room) {
        const currentPlayer = room.players[index];
        currentPlayer.score += 1;
        room = await room.save();
        io.to(roomNumber).emit("updateRoom", room);
      } else {
        console.log("Room not found");
        socket.emit("error_message", "Room not found"); // Inform the client that the room was not found
      }
    } catch (err) {
      console.error("Error finding room in MongoDB:", err);
    }
  });
};

module.exports = handleSocketEvents;
