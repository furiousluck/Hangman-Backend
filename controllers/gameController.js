const Room = require("../models/Room");
const getWord = require("../data/words");

const create_room = async (req,res)=>{
    const {roomNumber, playerName} = req.body;
    try{
        const existingRoom = await Room.findOne({roomNumber});
        if(existingRoom){
            res.status(400).json({message: "Room already exists"});
            return;
        }
        const word = getWord();
        const newroom = new Room({
            roomNumber,
            hint: word.definition,
            word: word.term,
            players: [{name: playerName, socketID: req.socket.id, isHost: true}],
            turn: {name: playerName, socketID: req.socket.id, isHost: true}
        });
        const room = await newroom.save();
        return res.status(201).json({room});
    }catch(error){
        console.error(error);
        return res.status(500).json({message: "Server error"});
    }
}

const join_room = async (req,res)=>{
    const {roomNumber, playerName} = req.body;
    try{
        const room = await Room.findOne({roomNumber});
        if(!room){
            res.status(400).json({message: "Room not found"});
            return;
        }
        room.players.push({name: playerName, socketID: req.socket.id});
        await room.save();
        return res.status(200).json({room});
    }catch(error){
        console.error(error);
        return res.status(500).json({message: "Server error"});
    }
};

const score_card = async (req,res)=>{
    const {roomNumber} = req.body;
    try{
        const room = await Room.findOne({roomNumber});
        if(!room){
            res.status(400).json({message: "Room not found"});
            return;
        }
        const score = room.players.map(player=>({name: player.name, score: player.score}));
        return res.status(200).json({score});
    }
    catch(error){
        console.error(error);
        return res.status(500).json({message: "Server error"});
    }
}

module.exports = {create_room, join_room, score_card};