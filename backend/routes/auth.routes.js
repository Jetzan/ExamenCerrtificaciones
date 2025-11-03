const express = require("express");
const { login, logout, getProfile, payCert } = require("../controllers/auth.controller");
const { verifyToken } = require("../middleware/auth.middleware");

const router = express.Router();

router.post("/login", login);

router.post("/logout", verifyToken, logout);

router.get("/profile", verifyToken, getProfile);

router.post("/pagar", verifyToken, payCert);

module.exports = router;