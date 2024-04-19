import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
import './searchBox.css';


export default function SearchBox({updateInfo}) {
let [city,setCity] = useState("")
let [err,setErr] = useState(false)
let api = "3b2232a31e2726a08b96d6c0d56fa5a3";
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}&units=metric`;




function newCity(eve){
    setCity(eve.target.value)
}


let searchCity = async() =>{
    try{
        setErr(false)
    let data = await fetch(url);
    let detail = await data.json();
updateInfo(detail);
setCity("");
}
catch(err) {
setErr(true);
    }    }

   
     

return (
<div>
    <div className='field'>
<input className='input' type="text" value={city} onChange={newCity} placeholder='search city name' />
<div className='iconn'>
<i className="fa-solid fa-magnifying-glass" onClick={searchCity}></i>
</div>
</div>

<br /> 
{err ? <p style={{color: "red"}}>search correct city bkl</p> : <p></p> }
</div>

);
};