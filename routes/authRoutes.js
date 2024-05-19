const express = require("express");
const router = express.Router();

const { registerUser, loginUser } = require("../controllers/authController");

// router.post("/register", registerUser);
router.route("/login").post(loginUser);
// router.post("/login", loginUser);
router.route("/register").post(registerUser);

module.exports = router;


