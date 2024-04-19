import './infoBox.css'
 


export default function InfoBox({updateCity}){

    let cloudSun = "https://img.freepik.com/premium-vector/weather-forecast-sun-cloud-overcast_316839-4454.jpg?w=740";
    let cold = "https://img.freepik.com/premium-photo/3d-icon-rendering-snowy-day-weather-forecast_224530-3082.jpg?w=740";
    let rain = "https://img.freepik.com/premium-psd/3d-thunderstorm-weather-concept-high-quality-render-illustration_800638-752.jpg?w=740";
    let sun = "https://img.freepik.com/premium-vector/sun-icon-cartoon-illustration-sun-vector-icon-web-design_96318-24042.jpg?w=740";
    
    let date = getData(updateCity.dt,updateCity.timezone);

    function getData(dt,timezone){
      const utc_seconds = parseInt(dt,10) + parseInt(timezone,10);
     const utc_milliseconds = utc_seconds * 1000;

     const local_date = new Date (utc_milliseconds).toUTCString();
     return local_date;
   }
   
    
   return (
    <div className='con'>
          <div className="icon">
            <img src={cloudSun} alt="" />
          </div>
          <div className="content">
            <h1>{updateCity.temp} &#8451; </h1>
            <h3>{updateCity.weather}</h3>
            <hr />
    
            
            <h4>{date}</h4>
  
           
            <h2>{updateCity.city}</h2>
          </div>
     </div>
   )
}