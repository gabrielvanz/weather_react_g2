// src/components/WeatherModal.jsx
import React from 'react';
import './WeatherModal.css'; // Importar o CSS para o modal

const WeatherModal = ({ weatherData, onClose }) => {
  const iconUrl = `http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`;
  console.log(iconUrl)
  // Traduções simples para o clima
  const weatherDescriptions = {
    "clear sky": "céu limpo",
    "few clouds": "poucas nuvens",
    "scattered clouds": "nuvens dispersas",
    "broken clouds": "nuvens quebradas",
    "shower rain": "chuva de banho",
    "rain": "chuva",
    "thunderstorm": "trovoada",
    "snow": "neve",
    "mist": "névoa",
    "clouds": "nublado"
  };

  const description = weatherDescriptions[weatherData.weather[0].description] || weatherData.weather[0].description;

  return (
    <div className="modal">
      <h2>{weatherData.name}, {weatherData.sys.country}</h2>
      <div className="weather-info">
        <img src={iconUrl} alt="weather icon" />
        <p><strong>Temperatura:</strong> {weatherData.main.temp} °C</p>
        <p><strong>Sensação Térmica:</strong> {weatherData.main.feels_like} °C</p>
        <p><strong>Temperatura Mínima:</strong> {weatherData.main.temp_min} °C</p>
        <p><strong>Temperatura Máxima:</strong> {weatherData.main.temp_max} °C</p>
        <p><strong>Pressão:</strong> {weatherData.main.pressure} hPa</p>
        <p><strong>Umidade:</strong> {weatherData.main.humidity} %</p>
        <p><strong>Velocidade do Vento:</strong> {weatherData.wind.speed} m/s</p>
        <p><strong>Direção do Vento:</strong> {weatherData.wind.deg} °</p>
        <p><strong>Clima:</strong> {description}</p>
      </div>
      <button className="back-button" onClick={onClose}>Voltar</button>
    </div>
  );
};

export default WeatherModal;
