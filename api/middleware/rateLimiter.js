import rateLimit from "express-rate-limit";
import RedisStore from "rate-limit-redis";
import redisClient from "../config/redis.js";

export const authRateLimiter = rateLimit({
  store: new RedisStore({
    sendCommand: (...args) => redisClient.sendCommand(args),
  }),
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 10, // 10 requests per IP
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    success: false,
    message: "Too many attempts. Please try again later.",
  },
});
