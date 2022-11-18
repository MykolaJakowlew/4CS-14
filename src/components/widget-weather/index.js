import React, { useEffect, useState } from "react";
import './style.css';
// https://openweathermap.org/current#geocoding
// https://openweathermap.org/current#current_JSON
import axios from 'axios'; // npm i axios

function WidgetWeather (props) {
 const [isLoaded, setIsLoaded] = useState(true);
 const [weatherData, setWeatherData] = useState();

 useEffect(() => {
  setIsLoaded(true)
  axios.get(
   `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=6490ea3ba3c851128f51015075087ee2`
  ).then((response) => {
   console.log(response.data);
   setWeatherData(response.data);
   setIsLoaded(false)
  });
 }, [props.city]);

 return (<div className="widget-weather">
  {isLoaded 
   ? (<div class="lds-circle"><div></div></div>)
  : (<div>
   <div>City name: {props.city}</div>
   <div>Longitude: {weatherData.coord.lon}</div>
   <div>Latitude: {weatherData.coord.lat}</div>
  </div>)}
 </div>);
}

export default WidgetWeather;