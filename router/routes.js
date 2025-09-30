import fs from "fs";
import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const router = express.Router();

const dataPath = path.join(__dirname, "../data/weather.json");
const data = JSON.parse(fs.readFileSync(dataPath, "utf-8"));

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../", "views", "index.html"));
});

router.post("/city", (req, res) => {
  const cityName = req.body.city?.toLowerCase();
  if (!cityName) {
    return res.send("<h1>Please enter a city name.</h1>");
  }

  if (cityName === "all") {
    return res.send(
      data
        .map((item) => `<p>${item.city}: ${item.temperature.current}°C</p>`)
        .join("")
    );
  }

  const cityData = data.find((item) => item.city.toLowerCase() === cityName);

  if (cityData) {
    res.send(`<h1>${cityData.city} is ${cityData.temperature.current}°C</h1>`);
  } else {
    res.send("<h1>Sorry, City not found.</h1>");
  }
});

export default router;
