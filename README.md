# Weather Report App

A simple, modern web application to get weather updates for selected cities in Nigeria.  
This project demonstrates **query strings**, **conditional responses**, and **JSON handling** using the `fs` module.

> ⚡ **Note:** No database was used. Weather data is predefined in a JSON file (`data/weather.json`) with more than 50 sample cities.

---

## Learning Objectives
By building this project, we practiced and demonstrated:

- Using query strings in Express routes  
- Handling conditional responses (valid city vs unknown city)  
- Reading and parsing JSON data with Node’s built-in `fs` module  
- Structuring a Node.js/Express project using MVC(Model – View – Controller)-style modularity  
- Returning both JSON API responses and HTML frontend rendering  
- Graceful error handling and accessibility-friendly frontend design  
- Working effectively as a team with version control (Git/GitHub)  

---

## Features
- Get weather details by city name using a query string (`?city=...`)
- Returns both **JSON API responses** and an **HTML frontend page**
- Displays temperature, humidity, wind, pressure, sunrise/sunset, and condition
- Handles **unknown cities** gracefully with a clear error message
- Simple, responsive, and user-friendly design
- Loading spinner for better UX
- Accessible and easy to use

---

## How It Works
- Weather data is stored in `weather.json`.  
- The backend reads the file using Node’s built-in **fs module**.  
- A query like:

http://localhost:3000/weather?city=calabar

returns weather details for **Calabar**.  
If the city is not found, JSON or HTML shows `"City not found"`.

---

## API Documentation

| Endpoint       | Method | Query Parameter | Description |
|----------------|--------|-----------------|-------------|
| `/weather`     | GET    | `city` (string) | Returns weather for the given city in **JSON format** |
| `/api/weather` | GET    | `city` (string) | API endpoint for JSON weather response (used by frontend `script.js`) |
| `/`            | GET    | -               | Serves the HTML frontend (`weatherReport.html`) |

### Example Request
GET http://localhost:3000/weather?city=umuahia



### Example Success Response
```json
{
  "city": "umuahia",
  "temperature": "24°C",
  "precipitation": "91%",
  "wind": "11 km/h SW",
  "humidity": "93%",
  "weather": "Cloudy",
  "sunrise": "06:18 AM",
  "sunset": "06:23 PM",
  "pressure": "1015 hPa"
}
Example Error Response
```json
{
  "error": "City not found. Please try another."
}

Technologies Used
Frontend: HTML5, CSS3, JavaScript (script.js)

Backend: Node.js + Express

Data Storage: JSON file with fs module (no database)

Project Structure
Weather-report-app/
├── controller/
│   └── weatherController.js
├── data/
│   └── weather.json
├── public/
│   ├── script.js
│   ├── style.css
│   └── weatherReport.html
├── router/
│   └── weatherRoutes.js
├── .gitignore
├── nodemon.json
├── package.json
├── package-lock.json
├── README.md
└── server.js

Setup & Run
Clone the repository or download the source code.

Install dependencies:

npm install
Start the server:

npm start
Open public/weatherReport.html in your browser
or access the API via:

http://localhost:3000/weather?city=lagos
Collaboration & Contribution
This is a group project.

All members are added as collaborators and have visible commits in the repo history.

Team Leader was assigned to coordinate tasks.

Each member participated in coding, testing, or documentation.

---

## 👥 Team Members

| Name                          | Matric Number       | Role                |
|-------------------------------|---------------------|---------------------|
| Adeboye Emmanuel Oluwatosin   | BD/2025/TC3/048     | **Team Lead**       |
| Onuzulike Chijioke Marie-Claire | BD/2025/TC3/028   | Assistant Team Lead |
| Chizaram Divine Chukwumaobi   | BD/2025/TC3/029     | Member              |
| Adegoke Christopher Ayomide   | BD/2025/TC3/030     | Member              |
| Claudia Bose Olawale          | BD/2025/TC3/033     | Member              |
| Adodo Daniel Imewore          | BD/2025/TC3/036     | Member              |
| Echanny Emmanuel Idagu        | BD/2025/TC3/043     | Member              |
| Boboye Esther                 | BD/2025/TC3/051     | Member              |
| Adediji Faith                 | BD/2025/TC3/052     | Member              |
| Felix Olayinka Osuntola       | BD/2025/TC3/056     | Member              |

Thank you.
