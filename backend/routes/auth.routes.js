const express = require("express");
const { login, logout, getProfile, payCert, verifyPay, verifyDone, comments } = require("../controllers/auth.controller");
const { verifyToken } = require("../middleware/auth.middleware");

const router = express.Router();

router.post("/login", login);

router.post("/logout", verifyToken, logout);

router.get("/profile", verifyToken, getProfile);

router.post("/pagar", verifyToken, payCert);

router.post("/verificar", verifyToken, verifyPay);

router.post("/realizado", verifyToken, verifyDone);

router.post("/comentarios", comments);

module.exports = router;