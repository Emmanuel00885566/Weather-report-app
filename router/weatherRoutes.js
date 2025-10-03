import express from "express";
import { getCityWeather } from "../controller/weatherController.js";

const router = express.Router();

// GET /api/weather?city=Umuahia
router.get("/", getCityWeather);

export default router;
