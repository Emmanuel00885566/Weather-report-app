import fs from "fs";
import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const router = express.Router();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
const data = JSON.parse(fs.readFileSync("weather.json", "utf-8"));
router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../", "views", "index.html"));
});

router.post("/city", (req, res) => {
  const cityName = req.body.city.toLowerCase();
  const cityData = data.find((item) => item.city.toLowerCase() === cityName);
  if (cityData) {
    res.send(`<h1>${cityData.city} is ${cityData.temperature.current}°C</h1>`);
  } else {
    res.send("<h1>Sorry, City not found.</h1>");
  }
});

export default router;
