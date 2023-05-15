import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectDisplay } from "../redux/slices/displayCountrySlice";

const Weather = () => {
  const [weather, setWeather] = useState();
  let display = useSelector(selectDisplay);
  let latitude = display.capitalInfo.latlng[0];
  let longitude = display.capitalInfo.latlng[1];

  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://weatherapi-com.p.rapidapi.com/current.json",
      params: { q: `${latitude}, ${longitude}` },
      headers: {
        "X-RapidAPI-Key": "1e9f63cc56mshf461f7683c0fc67p12f8bcjsn53057c57007b",
        "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(res => {
        console.log(res.data);
        setWeather(res.data);
      })
      .catch(err => console.error(err));
  });

  return (
    <div>
      <table className="overview-table">
        <tr>
          <td>Conditions: {weather?.current?.condition?.text}</td>
        </tr>
        <tr>
          <td>Temperature: {weather?.current.temp_f} degrees Fahrenheit</td>
        </tr>
        <tr>
          <td>Feels Like: {weather?.current?.feelslike_f} degrees Fahrenheit</td>
        </tr>
        <tr>
          <td>Humidity: {weather?.current?.humidity}%</td>
        </tr>
        <tr>
          <td>Wind Speed: {weather?.current?.wind_mph} mph{" "}
          {weather?.current?.wind_dir}
          </td>
        </tr>
      </table>
    </div>
  );
};

export default Weather;
