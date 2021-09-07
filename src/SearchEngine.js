import React, {useState} from "react";
import Weather from "./Weather";
import axios from "axios";

export default function SearchEngine(props) {
const [city, setcity] = useState("");
const [message, setMessage] = useState("");
const [weather, setWeather] = useState("");

function nameCity(event) {
    setcity(event.target.value);
}
function handleSubmit(event) {
    event.preventDefault();
    searchForecast(city);
    setMessage(`The weather in ${city} is:` );
}
function searchForecast(city) {
    let apiKey = "f5ee6fe9739269adb6179e45323cceb3";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
axios.get(apiUrl).then(handleResponse); 
}

function handleResponse(response) {
   setWeather ({
       temperature: response.data.main.temp,
       humidity: response.data.main.humidity,
       wind: response.data.wind.speed,
       icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
   });

}
return (
    <div>
    <form className="Weather">
        <input type="text" placeholder="Type a city" onChange={nameCity}/>
<p> </p>
    <button onClick={handleSubmit}> Let's go </button>
    <Weather
        message={message}
        city={city}
        temperature={weather.temperature}
        humidity={weather.humidity}
        wind={weather.wind}
        icon={weather.icon}
      />
       </form>
    </div>
)
}