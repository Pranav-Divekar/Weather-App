import "./SearchBox.jsx";
import "./DisplayWeather.jsx";
import "./WeatherApp.css";
import SearchBox from "./SearchBox.jsx";
import DisplayWeather from "./DisplayWeather.jsx";
import { useState } from "react";

export default function WeatherApp() {
    let [weatherInfo, setWeatherInfo] = useState({
        city: "Pune",
        feelsLike: 26.9,
        humidity: 91,
        temp: 25.88,
        tempMax: 25.88,
        tempMin: 25.88,
        weather: "overcast clouds"
    });

    let updateInfo = (result) => {
        setWeatherInfo(result);
    }

    return (
        <div className="weather-app">
            <header className="app-header">
                <h1>Weather App</h1>
            </header>
            <main className="app-content">
                <SearchBox updateInfo={updateInfo} />
                <DisplayWeather info={weatherInfo} />
            </main>
          <div className="app-footer">
                <span>By Pranav Divekar. Weather data provided by OpenWeatherMap</span>
         </div>
        </div>
    );
}
