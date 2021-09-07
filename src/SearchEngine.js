import React, {useState} from "react";
import Weather from "./Weather";
import axios from "axios";

export default function SearchEngine(props) {

function handleResponse(response) {
alert (`The Weather in New York is ${response.data.main.temp}`);
}

    let apiUrl="https://api.openweathermap.org/data/2.5/weather?q=NewYork&appid=f5ee6fe9739269adb6179e45323cceb3"
    
    axios.get(apiUrl).then(handleResponse);
    return "Hello Weather";
}