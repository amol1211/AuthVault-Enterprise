import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/user.route.js";
import authRoutes from "./routes/auth.route.js";
import cookieParser from "cookie-parser";

dotenv.config(); // loads api/.env

const app = express();

/* ================= Middleware ================= */
app.use(express.json());
app.use(cookieParser());

/* ================= Routes ================= */
app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);

/* ================= Error Handler ================= */
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  return res.status(statusCode).json({
    success: false,
    message,
    statusCode,
  });
});

/* ================= DB + Server ================= */
const PORT = process.env.PORT || 4000;

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, "0.0.0.0", () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });
