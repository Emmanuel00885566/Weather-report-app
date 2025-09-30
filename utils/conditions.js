import express from "express";
import * as weatherdata from "data/weather.json" with {type: 'json'}

const app = express();
const port = 3000

app.get("/weather/:city" , (req,res)=> {
    const city = req.query.city;
    const weatherInfo = waetherData[city];
    if (weatherInfo) {
        res.json(weatherInfo);
    } else {
        res.status(404).send("Unknown city");
    }
});

app.listen(port,()=>{
    console.log(`weather app listening at http://localhost:${port}`);
});
// function check() {
//     let city = .json

//     if (city = true);
//         continue 
        
//     else {
//         console.log("Location not found.");
//     }
//     console.log(city)
// }