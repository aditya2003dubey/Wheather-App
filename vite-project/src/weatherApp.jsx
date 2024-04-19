import InfoBox from "./infoBox.jsx"
import SearchBox from "./searchBox.jsx"
import { useState } from "react"
import './weatherApp.css'
import Cards from "./cards.jsx"
export default function WeatherApp(){

  let [cityDetil,setCityDetil] = useState({
    city: "Delhi",
    temp: "29.05",
    tempMin: "29.05",
    tempMax: "29.05",
    humidity: "28",
    feelsLike: "27.81",
    weather: "haze",
    pressure: "1000",
    dt: 1710738552,
    timezone: 19800,
})
  function updateInfo(detail){
     setCityDetil({city: detail.name,
    
      temp: detail.main.temp,
        tempMin: detail.main.temp_min,
        tempMax: detail.main.temp_max,
        humidity: detail.main.humidity,
        feelsLike: detail.main.feels_like,
        weather: detail.weather[0].description,
        icon: detail.weather[0].main,
        pressure: detail.main.pressure,
        sunrise: detail.sys.sunrise,
        sunset: detail.sys.sunset,
        wind: detail.wind.speed,
        visibility: detail.visibility,
        timezone: detail.timezone,
        dt: detail.dt,
    }

     )
  }
  return(
    <div className="scr">
      <div className="scr-1">
      <h1>Weather app</h1>
    <SearchBox updateInfo ={updateInfo}/>
    <InfoBox updateCity={cityDetil}/>
      </div>
      <div className="scr-2">
      <Cards detail={cityDetil}/>
      </div>
    
    
    </div>
  )
}