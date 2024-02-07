import React from 'react'
import './WeatherApp.css'
import search_icon from '../Assetts/search.png'
import clear_icon from '../Assetts/clear.png'
import cloud_icon from '../Assetts/cloud.png'
import drizzle_icon from '../Assetts/drizzle.png'
import rain_icon from '../Assetts/rain.png'
import snow_icon from '../Assetts/snow.png'
import wind_icon from '../Assetts/wind.png'
import humidity_icon from '../Assetts/humidity.png'


const WeatherApp = () => {
  return (
    <div className='container'>
        <div className="top-bar">
            <input type="text" className="cityInput" placeholder='Search'/>
            <div className="search-icon">
                <img src={search_icon} alt="" />
            </div>
        </div>
        <div className="weather-image">
            <img src={cloud_icon} alt="" />
        </div>
        <div className="weather-temp">24°c</div>
        <div className="weather-location">London</div>
        <div className="data-container">
            <div className="element">
                <img src={humidity_icon} alt="" className="icon" />
                <div className="data">
                    <div className="humidity-percent">64%</div>
                    <div className="text">Humidity</div>
                </div>
            </div>
            <div className="element">
                <img src={wind_icon} alt="" className="icon" />
                <div className="data">
                    <div className="humidity-percent">18 km/h</div>
                    <div className="text">Wind Speed</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default WeatherApp