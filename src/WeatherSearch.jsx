import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function WeatherSearch({ updateInfo }) {
  const [city, setCity] = useState('');
  const [error, setError] = useState('');
  const API_URL = 'https://api.openweathermap.org/data/2.5/weather';
  const API_KEY = 'fe43a5f8d30ca1c86a8560a03c01134a';

  const getWeatherInfo = async () => {
    try {
      let response = await fetch(
        `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
      );
      if (!response.ok) {
        throw new Error('City not found');
      }
      let jsonResponse = await response.json();

      let result = {
        city: city,
        temp: jsonResponse.main.temp,
        tempmin: jsonResponse.main.temp_min,
        humidity: jsonResponse.main.humidity,
        tempmax: jsonResponse.main.temp_max,
        feelsLike: jsonResponse.main.feels_like,
        weather: jsonResponse.weather[0].description,
      };

      return result;
    } catch (error) {
      setError(error.message);
      console.error('Error fetching weather data:', error);
    }
  };

  const handleChange = (event) => {
    setCity(event.target.value);
    setError('');
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    if (city.trim() === '') {
      setError('City name cannot be empty');
      return;
    }
    setCity('');
    let info = await getWeatherInfo();
    if (info) {
      updateInfo(info);
    }
  };

  return (
    <div className="SearchBox">
      <h2>Search Weather</h2>
      <form onSubmit={onSubmit}>
        <TextField
          id="outlined-basic"
          label="City Name"
          variant="outlined"
          required
          value={city}
          onChange={handleChange}
        />
        <br />
        <br />
        <Button variant="contained" type="submit">
          Search
        </Button>
      </form>
      {error && <p className="error" style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}

export default WeatherSearch;
