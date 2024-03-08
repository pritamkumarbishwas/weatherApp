import React, { useState } from 'react';
import WeatherCard from './WeatherCard';
import axios from 'axios';
import './Weather.css';


const Weather = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);

  const apiKey = "ac022b79b1ac4544872164219240803";
  const apiURL = "https://api.weatherapi.com/v1/current.json";



  const handleSearch = () => {
    setLoading(true);

    axios.get(`${apiURL}?key=${apiKey}&q=${city}`)
      .then(response => {
        setWeatherData(response.data);
        setLoading(false);
      })
      .catch(error => {
        setLoading(false);
        alert('Failed to fetch weather data');
      });
  };



  return (
    <div className='weather-card'>
      <input type="text" value={city} placeholder='Enter city name' onChange={(e) => setCity(e.target.value)} />
      <button onClick={handleSearch}>Search</button>
      {loading && <p>Loading data...</p>}
      {weatherData && <WeatherCard data={weatherData} />}
    </div>
  );
};

export default Weather;
