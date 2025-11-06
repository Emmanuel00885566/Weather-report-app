import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import weatherRoutes from "./router/weatherRoutes.js";
import cors from "cors";  // <— Add this if not already

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// ✅ Use Render's assigned port (or 3000 for local)
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors({ origin: "*" })); // or specify your frontend domain
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files
app.use(express.static(path.join(__dirname, "public")));

// Routes
app.use("/api/weather", weatherRoutes);

// Default route
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "weatherReport.html"));
});

// Listen on the correct port
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
