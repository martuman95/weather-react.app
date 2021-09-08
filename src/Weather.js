import React from "react";
import { Container } from "react-bootstrap";
import "./Weather.css";


export default function Weather(props) {
   return (
       <div>
<div className>
            <form className="Weather">
        <input type="text" placeholder="Type a city" autoFocus="on"/> 
    <button className="btn btn primary w-100"> Let's go </button>
       </form>
       </ div>
        <p>
           Tuesday 9:41
       </p>
       <div>
       <h2>
           London
       </h2>
        <div>
        <img src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png" />
  <span><strong>17</strong> °C </span>
   </div>
       </div>
    <ul>
        <li>Partly Cloudy </li>
        <li>
            Humidity: 32 %
        </li>
        <li>
            Wind Speed: 3 Km/h
        </li>
    </ul>
 </div>
    )
}