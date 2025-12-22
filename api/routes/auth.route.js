import express from "express";
import {
  signin,
  signup,
  google,
  signout,
} from "../controllers/auth.controller.js";
import { authRateLimiter } from "../middleware/rateLimiter.js";

const router = express.Router();

router.post("/signup", authRateLimiter, signup);
router.post("/signin", authRateLimiter, signin);
router.post("/google", google);
router.get("/signout", signout);

export default router;
