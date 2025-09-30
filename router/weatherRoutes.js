import express from "express";
import { getHomePage, getCityWeather } from "../controllers/weatherController.js";

const router = express.Router();

router.get("/", getHomePage);
router.post("/city", getCityWeather);

export default router;
