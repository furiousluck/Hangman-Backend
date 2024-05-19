const Player = require("../models/Player");
const generateToken = require('../utils/generateToken');


const registerUser = async (req, res) => {
    const { name, email, password } = req.body;
    console.log(req.body);
    const playerExists = await Player.findOne({email});
    if(playerExists){
        res.status(400).json({message: "Player already exists"});
        return;
    }
    const player = await Player.create({
        name,
        email,
        password,
    });
    if(player){
        return res.status(201).json({
            _id: player._id,
            name: player.name,
            email: player.email,
            token: generateToken(player._id)
        });
    }
    else{
        return res.status(400).json({message: "Invalid player data"});
    }
};

const loginUser = async (req, res) => {
    const { email, password } = req.body;
    const player = await Player.findOne({email});
    if(player && (await player.matchPassword(password))){
        return res.status(201).json({
            _id: player._id,
            name: player.name,
            email: player.email,
            token: generateToken(player._id)
        });
    }
    else{
        return res.status(401).json({message: "Invalid email or password"});
    }
};

module.exports = { registerUser, loginUser };

