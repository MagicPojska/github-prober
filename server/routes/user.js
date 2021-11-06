import express from "express";
import { getCookie, getUser } from "../controllers/user.js";

const router = express.Router();

router.get("/auth/github", getUser);
router.get("/api/me", getCookie);

export default router;
