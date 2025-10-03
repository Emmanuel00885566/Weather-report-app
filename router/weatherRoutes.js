import express from "express";
import { getCityWeather } from "../controller/weatherController.js";

const router = express.Router();


router.get("/", getCityWeather);

export default router;
