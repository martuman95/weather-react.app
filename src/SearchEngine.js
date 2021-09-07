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
    let apiKey = `3fb188379e6ffcf616e7cdbd010c6434`;
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
axios.get(apiUrl).then(handleResponse); 
}
function handleResponse(response) {
   setWeather ({
       temperature: response.data.main.temperature,
       humidity: response.data.main.humidity,
       wind: response.data.wind.speed,
       description:response.data.main.description
   });
}
return (
    <div>
    <form className="Weather" onSubmit={handleSubmit}>
        <input type="text" placeholder="Type a city" onChange={nameCity}/>
<p> </p>
    <button> Let's go </button>
    </form>
    <Weather
        message={message}
        city={city}
        temperature={weather.temperature}
        description={weather.description}
        humidity={weather.humidity}
        wind={weather.wind}
        icon={weather.icon}
      />
    </div>
)
}