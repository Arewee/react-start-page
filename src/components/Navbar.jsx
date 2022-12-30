import React, { useEffect, useState } from "react";
import axios from "axios";

function Navbar({ updateDarkTheme }) {
  const [weatherData, setWeatherData] = useState({});
  const [location, setLocation] = useState("");
  const [windDirection, setWindDirection] = useState();

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=ad2f5f677e216bbd038dedbce46ea989`;

  const searchLocation = (event) => {
    if (event.key === "Enter") {
      axios
        .get(url)
        .then((response) => {
          setWeatherData(response.data);
        })
        .catch((err) => console.log(err));
      setLocation("");
    }
  };

  const date = new Date();
  const weekday = [
    "Söndag",
    "Måndag",
    "Tisdag",
    "Onsdag",
    "Torsdag",
    "Fredag",
    "Lördag",
  ];
  let day = weekday[date.getDay()];

  // Wind direction ------------------------

  // let degree = weatherData.wind.deg;

  // function windSymbol(degree) {
  //   if (degree > 337.5) return "↓ N";
  //   if (degree > 292.5) return "↘ NW";
  //   if (degree > 247.5) return "→ W";
  //   if (degree > 202.5) return "↗ SW";
  //   if (degree > 157.5) return "↑ S";
  //   if (degree > 122.5) return "↖ SE";
  //   if (degree > 67.5) return "← E";
  //   if (degree > 22.5) {
  //     return "↙ NE";
  //   }
  //   return "↓ N";
  // }
  // setWindDirection(windSymbol());
  // console.log(windDirection);

  return (
    <div className="h-24 flex flex-row justify-start items-center p-5 bg-gray-900 text-white w-full">
      <ul className="flex flex-row w-full justify-between p-8">
        <li>Navbar</li>
        <li>
          <input
            className="px-1 bg-transparent border border-slate-700 rounded-full hover:bg-slate-800"
            type="button"
            value="🌙  ☀️"
            onClick={() => updateDarkTheme((darkTheme) => !darkTheme)}
          />
        </li>
        <li>
          <ul className="flex flex-row gap-3">
            <li>
              <input
                className="text-white px-2 bg-transparent border border-slate-700 rounded-full  hover:bg-slate-800"
                value={location}
                onChange={(event) => setLocation(event.target.value)}
                onKeyPress={searchLocation}
                placeholder="Ange stad"
                type="text"
              />
            </li>
            {/* OPEN WEATHER DATA */}
            {weatherData.name ? <li>{weatherData.name}</li> : null}
            {/* {weatherData.weather ? (
              <li>
                <img
                  id="icon"
                  src="http://openweathermap.org/img/wn/${
                    weatherData.weather[0].icon
                  }@4x.png"
                  alt="img"
                />
              </li>
            ) : null} */}
            {weatherData.weather ? <li>{weatherData.weather[3]}</li> : null}
            {weatherData.main ? (
              <li>{weatherData.main.temp.toFixed()}°C</li>
            ) : null}
            {weatherData.wind ? (
              <li>{weatherData.wind.speed.toFixed()} m/s</li>
            ) : null}
            {weatherData.wind ? <li>🧭 {weatherData.wind.deg}</li> : null}
            {/* {weatherData.wind ? <li>{windDirection}</li> : null} */}
          </ul>
        </li>
        {/* DATUM OCH TID */}
        <li>
          <ul className="flex flex-row gap-3">
            <li> {day}</li>
            <li>
              {" "}
              {date.getDate()}/{date.getMonth() + 1}
            </li>
            <li>
              {date.getHours()}:
              {date.getMinutes() < 10
                ? "0" + date.getMinutes()
                : date.getMinutes()}
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
