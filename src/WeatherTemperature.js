import React, { useState } from "react";

export default function WeatherTemperature(props) {
const [unit, setUnit] = useState("celsius");

function convertToCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
}
function convertToFarh(event){
event.preventDefault();
setUnit("fahrenheit");
}
if (unit === "celsius") {
  return (
    <div>
    <span className="temperature">
        {props.celsius}
        </span> 
        <span className="degrees">°C</span> | <a href="/" className="farh" onClick={convertToFarh}>°F</a>
        </div>
        );
} else {
    let fahrenheit = (props.celsius * 9)/ 5 + 32;
    return (
    <div>
    <span className="temperature">
        {Math.round(fahrenheit)}
        </span> 
        <a href="/"className="degrees" onClick={convertToCelsius}>°C</a> | <span className="farh">°F</span>
        </div>
        );
}
}