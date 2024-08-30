import './Weather.css';
import { useState } from 'react';
import WeatherSearch from './WeatherSearch';
import Weather from './Weather';

const WeatherApp = () => {
  const [weather, setWeather] = useState({
    city: 'Delhi',
    feelsLike: 41.01,
    temp: 43.95,
    tempmax: 44.05,
    tempmin: 43.95,
    humidity: 11,
    weather: 'haze',
  });

  const updateInfo = (result) => {
    setWeather(result);
  };

  return (
    <div>
      <h1>Weather Application</h1>
      <WeatherSearch updateInfo={updateInfo} />
      <Weather info={weather} />
    </div>
  );
};

export default WeatherApp;
