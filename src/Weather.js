import React, { useState } from "react";
import axios from "axios";

export default function Weather() {
  const [city, setCity] = useState("");
  const [temperature, setTemperature] = useState(null);
  const [humidity, setHumidity] = useState(null);
  const [wind, setWind] = useState(null);
  const [load, setLoad] = useState(false);
  const [icon, setIcon] = useState(null);
  const [description, setDescription] = useState(null);

  function showTemperature(response) {
    console.log(response.data);
    setLoad(true);
    setTemperature(response.data.main.temp);
    setHumidity(response.data.main.humidity);
    setWind(response.data.wind.speed);
    setDescription(response.data.weather[0].description);
    setIcon(
      `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    );
  }

  function handleSubmit(event) {
    event.preventDefault();

    let apiKey = "082d3d02ffdb12f2fd9b259e2ced1d0d";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}`;
    axios.get(`${apiUrl}&appid=${apiKey}`).then(showTemperature);
  }

  function updateCity(event) {
    setCity(event.target.value);
    console.log(event.target.value);
  }
  let form = (
    <form onSubmit={handleSubmit}>
      <input type="search" placeholder="Enter a City" onChange={updateCity} />
      <input type="submit" />
    </form>
  );

  if (load) {
    return (
      <div>
        {form}
        <p>
          {" "}
          The temperature in {city} is {Math.round(temperature)} °C{" "}
        </p>
        <p>
          {" "}
          The humidity in {city} is {humidity} %{" "}
        </p>
        <p>
          {" "}
          The wind in {city} is {Math.round(wind)} km/h{" "}
        </p>
        <p>
          {" "}
          The description in {city} is {description}
        </p>
        <img src={icon} alt="weather icon" />
      </div>
    );
  } else {
    return form;
  }
}
