import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dataPath = path.join(__dirname, "../data/weather.json");
const data = JSON.parse(fs.readFileSync(dataPath, "utf-8"));

export const getCityWeather = (req, res) => {
  const cityName = req.query.city?.toLowerCase();

  if (!cityName) {
    return res.status(400).json({ error: "Please provide a city name." });
  }

 
  const cityData = data[cityName];

  if (cityData) {
    res.json(cityData);
  } else {
    res.status(404).json({ error: "City not found, Try a state capital." });
  }
};
