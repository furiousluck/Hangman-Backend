const express = require("express");
const router = express.Router();

const gameController = require("../controllers/gameController");
const authMiddleware = require("../middlewares/authMiddleware");


//create room
router.post("/create", authMiddleware, gameController.getGames);

//join room
router.post("/join", authMiddleware, gameController.createGame);

//score card
router.post("/score", authMiddleware, gameController.score_card);


module.exports = router;

