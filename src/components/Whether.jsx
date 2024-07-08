import React, { useState } from "react";
import axios from "axios";

const Weather = () => {
  const [weather, setWeather] = useState(null);
  const [unit, setUnit] = useState("metric"); // Default to metric units (Celsius)
  const [searchLocation, setSearchLocation] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchWeather = async (location) => {
    setLoading(true);
    try {
      const apiKey = "f7f0d593f9bd896b637e05367139f21a";
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=${unit}&appid=${apiKey}`;
      const response = await axios.get(apiUrl);
      setWeather(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching weather:", error);
      setLoading(false);
    }
  };

  const toggleUnit = () => {
    setUnit((prevUnit) => (prevUnit === "metric" ? "imperial" : "metric"));
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const location = searchLocation.trim();
    if (location) {
      fetchWeather(location);
    }
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div className="WeatherDashboard">
      <h2>Weather Dashboard</h2>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          name="location"
          placeholder="Enter location (e.g., London)"
          value={searchLocation}
          onChange={(e) => setSearchLocation(e.target.value)}
        />
        <button type="submit">Search</button>
        <button onClick={toggleUnit}>Change Unit</button>
      </form>
      {weather && (
        <div className="currentWeather">
          <div className="weatherIcon">
            <img
              src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}
              alt={weather.weather[0].description}
            />
          </div>
          <div className="weatherDetails">
            <h3>{weather.name}</h3>{" "}
            {/* Display the actual name of the location */}
            <p className="temperature">
              {weather.main.temp}°{unit === "metric" ? "C" : "F"}
            </p>
            <p>{weather.weather[0].description}</p>
            <p>
              Wind: {weather.wind.speed} {unit === "metric" ? "m/s" : "mph"}
            </p>
            <p>Humidity: {weather.main.humidity}%</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Weather;
