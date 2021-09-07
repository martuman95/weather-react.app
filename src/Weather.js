import React from "react";

export default function Weather() {
    return (
        <div>
    <form className="Weather">
        <input type="text" placeholder="Type a city" />
<p> </p>
    <button> Let's go </button>
    </form>
    <h4>message</h4>
    <ul>
        <li>
            Humidity:
        </li>
        <li>
            Wind Speed:
        </li>
        <li>
            Feels Like:
        </li>
    </ul>
 </div>
    )
}