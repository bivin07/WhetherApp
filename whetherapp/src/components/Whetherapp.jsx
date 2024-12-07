import React, { useEffect, useState } from 'react';
import './Weather.css';
import axios from 'axios';

function Whetherapp() {
  const [weatherData, setWeatherData] = useState({});
  const [location, setLocation] = useState('');
  const [inputValue, setInputValue] = useState('');

  const apiKey = '22e15fcae221cfe29de36f9b308e1503';
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=imperial`;

  const search = () => {
    if (location){
      axios.get(url)
        .then((response) => {
          setWeatherData(response.data);
          console.log(response.data);
        })
        .catch((error) => {
          console.error("Error fetching weather data:", error);
        });
    }
  };

  useEffect(() => {
    if (location) {
      search();
    }
  }, [location]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value); 
  };

  const handleSearch = () => {
    setLocation(inputValue); 
    setInputValue(''); 
  };


  const getWeatherIconUrl = (icon) => {
    return `https://openweathermap.org/img/wn/${icon}@2x.png`;
  };

  return (
    <div className='app d-flex text-center align-items-center'>
      <div className="container">
        <div className='top'>
          <div className='location'>
            <h1>{weatherData.name} </h1>
          </div>

          <div className='temp'>
            <h1>Temperature: {weatherData.main ? `${weatherData.main.temp}°F` : 'N/A'}</h1> 
          </div>
        </div>

        <div className='humidity'>
          <p>Humidity: {weatherData.main ? `${weatherData.main.humidity}%` : 'N/A'}</p>
        </div>

        <div className='wind'>
          <p>Wind Speed: {weatherData.wind ? `${weatherData.wind.speed} MPH` : 'N/A'}</p>
        </div>

<div>
{weatherData.weather && weatherData.weather.length > 0 && (
  
                <img 
                  src={getWeatherIconUrl(weatherData.weather[0].icon)} 
                  alt={weatherData.weather[0].description} 
                />
              )}
              
</div>

       <div className='search-bar'>
          <input 
            type="text" 
          
            placeholder='Search' 
            value={inputValue}
            onChange={handleInputChange}
          />
          <button  onClick={handleSearch}>Search</button> 
        </div>
      </div>
    </div>
  );
}

export default Whetherapp;
