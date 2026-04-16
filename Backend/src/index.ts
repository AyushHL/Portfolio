import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import contactRouter from "./routes/contact";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({ origin: process.env.CLIENT_ORIGIN || "http://localhost:5173" }));
app.use(express.json({ limit: "10kb" }));

// Routes
app.get("/api/health", (_req, res) => {
  res.json({ status: "ok", timestamp: new Date().toISOString() });
});

app.use("/api/contact", contactRouter);

// Error
app.use((_req, res) => {
  res.status(404).json({ error: "Not Found" });
});

// Start
app.listen(PORT, () => {
  console.log(`🚀 Server running on Port ${PORT}`);
  console.log(`🔗 Link: http://localhost:${PORT}`);
});
