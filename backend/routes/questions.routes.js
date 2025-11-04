const express = require("express");
const router = express.Router();

const path = require("path");
const fs = require("fs");

const { iniciarCertificado, enviarRespuestas ,verifyDone} = require("../controllers/questions.controller");

// POST que envía preguntas
router.post("/start", iniciarCertificado);

// POST que recibe y evalúa respuestas
router.post("/submit", enviarRespuestas);

// GET que obtiene el certificado generado
router.get("/certificado/:file", (req, res) => {
  const file = req.params.file;
  const filePath = path.join(__dirname, `../pdf/${file}`);

  if (fs.existsSync(filePath)) {
    res.download(filePath);
  } else {
    res.status(404).json({ message: "Archivo no encontrado" });
  }
});


router.post("/VerificarRealizado",verifyDone);

module.exports = router; 