import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import weatherRoutes from "./routes/weatherRoutes.js"; 

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true })); 

app.use(express.static(path.join(__dirname, "public"))); 

app.use("/", weatherRoutes); 

app.listen(port, () => {
  console.log(`✅ Server is running at http://localhost:${port}`);
});
