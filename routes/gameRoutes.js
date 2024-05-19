const express = require("express");
const router = express.Router();

const { create_room, join_room, score_card } = require("../controllers/gameController");
const authMiddleware = require("../utils/authMiddleware");


router.route("/create_game").post(authMiddleware.protect, create_room);
router.route("/join_game").post(authMiddleware.protect, join_room);
router.route("/score_card").get(authMiddleware.protect, score_card);

module.exports = router;

