const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors({ 
  origin: function (origin, callback) {
    
    if (!origin || ALLOWED_ORIGINS.includes(origin)) {
      return callback(null, true);
    }
    return callback(new Error('Not allowed by CORS: ' + origin));
  },

  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],

  optionsSuccessStatus: 200
}));

app.use(express.json());

const ALLOWED_ORIGINS = [
  'http://localhost:5500',
  'http://127.0.0.1:5500',
];

// Ruta de salud
app.get("/health", (_req, res) => res.json({ ok: true }));

const questionsRoutes = require("./routes/questions.routes");
app.use("/api/questions", questionsRoutes);

const authRoutes = require("./routes/auth.routes");
app.use("/api", authRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});