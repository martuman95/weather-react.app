import React from "react";
import FormatDate from "./FormatDate";

export default function WeatherInfo(props) {
return ( <div>
        <p> <FormatDate date={props.data.date}/> </p> 
        <li className="text-capitolize">{props.data.description} </li>
        <li>
            Humidity: {props.data.humidity} %
        </li>
        <li>
            Wind Speed: {props.data.wind}  Km/h
        </li>
        </div>
)

}