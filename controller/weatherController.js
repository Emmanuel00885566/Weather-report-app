// controllers/weatherController.js
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Read weather.json
const dataPath = path.join(__dirname, "../data/weather.json");
const data = JSON.parse(fs.readFileSync(dataPath, "utf-8"));

// Controller: serve homepage
export const getHomePage = (req, res) => {
  res.sendFile(path.join(__dirname, "../", "views", "index.html"));
};

// Controller: handle city search
export const getCityWeather = (req, res) => {
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
};
