
# Weather Report App

A simple, modern web application to get weather updates for any cities in Nigeria. It is a group project that demonstrates query strings, conditional responses, and JSON handling.


## Features
- Search for weather by city name
- Displays temperature, humidity, wind speed, weather condition, and local time
- Responsive and user-friendly design
- Loading spinner for better UX
- Accessible and easy to use

## How to Use
1. Enter the name of a city in the input box (e.g.,  Calabar).
2. Click "Get Weather".
3. View the weather details displayed below the form.

## Technologies Used
- HTML5
- CSS3
- JavaScript (frontend logic)
- Node.js (backend server)

## Project Structure
```
Weather-report-app/
├── controller/
│   └── Weather controller.js
├── data/
│   └── Weather.json
├── public/
│   ├── script.js
│   ├── style.css
│   └── weatherReport.html
├── router/
│   └── weatherRoutes.js
├── utils/
│   └── conditions.js
├── .gitignore
├── nodemon.json
├── package-lock.json
├── package.json
├── README.md
└── server.js
```

## Setup & Run
1. Clone the repository or download the source code.
2. Install dependencies:
	```
npm install
	```
3. Start the server:
	```
npm start
	```
4. Open `weatherReport.html` in your browser or access the app via the local server.

## License
This project is licensed under the MIT License.

---
Feel free to contribute or suggest improvements!
