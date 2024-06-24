import React, { useState } from 'react';
import "./Weather.css"
import WeatherModal from '../WeatherModal';
import initialImg from '../../assets/initial.png'

const Weather = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState('');

  const api = {
    key: "64ed82577ced7f69cb1687f0ce536131",
    base: "https://api.openweathermap.org/data/2.5/",
    lang: "pt_br",
    units: "metric"
  }

  const fetchWeather = async () => {
    try {
      const response = await fetch(
        `${api.base}weather?q=${city}&lang=${api.lang}&units=${api.units}&APPID=${api.key}`
      );
      if (!response.ok) {
        throw new Error('Cidade não encontrada!');
      }
      const data = await response.json();
      setWeatherData(data);
      setError('');
      console.log(data);
    } catch (error) {
      setWeatherData(null);
      setError(error.message);
    }
  };

  const handleInputChange = (e) => {
    setCity(e.target.value);
  };

  const handleSearchClick = () => {
    if (city) {
      fetchWeather();
    }
  };

  const handleCloseModal = () => {
    setWeatherData(null);
  };

  return (
    <>
      <div className='App'>
        <img src={initialImg} className='initialImg' alt="weather icon" />
        <h1>Weather</h1>
        <input
          type="text"
          value={city}
          onChange={handleInputChange}
          placeholder="Insira o nome da cidade"
        />
        <button onClick={handleSearchClick}>Pesquisar</button>

        {error && <p className='errorCityNotFound'>{error}</p>}

        {weatherData && (
          <div>
            <WeatherModal weatherData={weatherData} onClose={handleCloseModal} />
          </div>
        )}
      </div>
    </>
  );
};

export default Weather;
