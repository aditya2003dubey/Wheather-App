// let sun = require('sun-time')
// import {sun} from 'sun-time-js';
import './cards.css'


export default function Cards({detail}){
    // let sunTime = sun('Tunis')
    let sunrise = new Date(detail.sunrise*1000);
   let sunriseTime= (sunrise.toLocaleTimeString());
   let sunset = new Date(detail.sunset*1000);
   let sunsetTime= (sunset.toLocaleTimeString());
    return(
        <div className='cards-con'>
        <h1>
            <span>Today</span> &nbsp;
            <span style={{color: "#737373"}}>Tomorrow</span>
        </h1>
        <div className="cards">
            <div className="card"><p>Wind</p> <h4>{detail.wind} km/h </h4> <p>East</p></div>
            <div className="card"><p>Humidity</p> <h4>{detail.humidity }</h4></div>
            <div className="card"><p>Real Feel</p> <h4>{detail.feelsLike} &#8451;</h4> </div>
            <div className="card"><p>Visibility</p> <h4>{detail.visibility}</h4></div>
            <div className="card"><p>Pressure</p> <h4>{detail.pressure} mb </h4></div>
            <div className="card"><p>Chance of rain</p> <h4>70%</h4> <p>East</p></div>
            <div className="card"><p>Temperature History</p> <h4><i className="fa-solid fa-arrow-up"></i> {detail.tempMax}</h4> <h4><i className="fa-solid fa-arrow-down"></i> {detail.tempMin}</h4></div>
            <div className="card"><p>Sun</p> <h4>Rise: {sunriseTime}</h4> <h4>Set: &nbsp;{sunsetTime}</h4></div>
            <div className="card"><p>Moon</p> <h4></h4> <h4>Set:  5:17 am</h4></div>
        </div>
        </div>
    )
}