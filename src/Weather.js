import React from "react";

export default function Weather(props) {
    if (props.temperature) {
        return (
        <div>
    <h4>{props.message}</h4>
    <ul>
        <li>
            Temperature: {Math.round(props.temperature)} °C
        </li>
        <li>
            Humidity: {props.humidity}%
        </li>
        <li>
            Wind Speed: {props.wind} Km/h
        </li>
        <li>  <img src={props.icon} alt={props.description} />
        </li>
       
    </ul>
 </div>
    )} else {
        return <div />;
    }
}