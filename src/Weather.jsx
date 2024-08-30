import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const Weather = ({ info }) => {
  const INIT_URL =
    'https://media.istockphoto.com/id/1312596921/photo/summer-noon-sun.webp?b=1&s=170667a&w=0&k=20&c=IFZS5JrL8LQbsu9KkMCToxJpZfUYy5A87g1YWBzZD-w=';
  const COLD_URL =
    'https://images.unsplash.com/photo-1564314968303-86c5df2b9a4c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D';
  const HOT_URL =
    'https://media.istockphoto.com/id/1312596921/photo/summer-noon-sun.webp?b=1&s=170667a&w=0&k=20&c=IFZS5JrL8LQbsu9KkMCToxJpZfUYy5A87g1YWBzZD-w=';
  const RAIN_URL =
    'https://images.unsplash.com/photo-1534088568595-a066f410bcda?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cmFpbnxlbnwwfHwwfHx8MA%3D%3D';

  const getImageUrl = () => {
    if (info.humidity > 80) {
      return RAIN_URL;
    } else if (info.temp > 15) {
      return HOT_URL;
    } else {
      return COLD_URL;
    }
  };

  return (
    <div className="infoBox">
      <h2>Weather</h2>
      <div className="j">
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia sx={{ height: 140 }} image={getImageUrl()} title="Weather Image" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {info.city}
          </Typography>
          <Typography variant="body2" color="text.secondary" component="span">
            <p>Temperature: {info.temp}°C</p>
            <p>Feels Like: {info.feelsLike}°C</p>
            <p>Max Temperature: {info.tempmax}°C</p>
            <p>Min Temperature: {info.tempmin}°C</p>
            <p>Humidity: {info.humidity}%</p>
            <p>Weather: {info.weather}</p>
          </Typography>
        </CardContent>
      </Card>
      </div>
    </div>
  );
};

export default Weather;
