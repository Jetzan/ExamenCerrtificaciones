const express = require("express");
const { login, logout, getProfile, payCert,verifyPay } = require("../controllers/auth.controller");
const { verifyToken } = require("../middleware/auth.middleware");

const router = express.Router();

router.post("/login", login);

router.post("/logout", verifyToken, logout);

router.get("/profile", verifyToken, getProfile);

router.post("/pagar", verifyToken, payCert);

router.post("/verificar",verifyToken,verifyPay)




module.exports = router;