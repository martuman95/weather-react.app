import React from "react";
import "./Weather.css";


export default function Weather(props) {
   return (
       <div>
<div className>
            <form className="Weather">
        <input type="text" placeholder="Type a city"/> 
    <button className="btn btn primary w-100"> Let's go </button>
       </form>
       </ div>
            <div className="title">
       <h2>
           London
       </h2>
         </div>
        <img src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png" />
  <span className="temperature">17</span> <span className="degrees">°C</span>
    <ul>
         <p> Tuesday 9:42 </p> 
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