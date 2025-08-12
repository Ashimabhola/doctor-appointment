const express = require("express");
const { registeruser, loginuser, refreshToken } = require("../controllers/authController");

const router = express.Router();

router.post("/register", registeruser);
router.post("/login", loginuser);
router.post("/refresh-token", refreshToken); // <-- Refresh token endpoint

module.exports = router;