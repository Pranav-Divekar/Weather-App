import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import './SearchBox.css'
import { useState } from 'react';
import ApartmentIcon from '@mui/icons-material/Apartment';

export default function SearchBox({updateInfo}){
    let [city,setCity] = useState("");
    let [err,setErr] = useState(false);
    const GEOAPI_URL = "http://api.openweathermap.org/geo/1.0/direct";
    const WEATHERAPI = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "9e3d4bc9651648f30d0d5ff581d670bb";

    let getWeatherInfo = async ()=>{
        try{
            let georesponse = await fetch(`${GEOAPI_URL}?q=${city}&appid=${API_KEY}`);
            let geojsonRes = await georesponse.json();
            console.log(geojsonRes[0]);
    
            let weatherRes = await fetch(`${WEATHERAPI}?lat=${geojsonRes[0].lat}&lon=${geojsonRes[0].lon}&appid=${API_KEY}&units=metric`);
            let weatherjsonres = await weatherRes.json();
            console.log(weatherjsonres.main);
    
            let result = {
                city:city,
                temp:weatherjsonres.main.temp,
                tempMin:weatherjsonres.main.temp_min,
                tempMax:weatherjsonres.main.temp_max,
                humidity:weatherjsonres.main.humidity,
                feelsLike:weatherjsonres.main.feels_like,
                weather:weatherjsonres.weather[0].description
            }
            updateInfo(result);
            console.log(result);
        }
        catch(e)
        {
            setErr(true);
            console.log("Error boi");
        }
       
    }

   
    let handleCity =(event)=>{
        setCity(event.target.value);
    }
    let handleSubmit = (event)=>{
        event.preventDefault();
        console.log(city);
        getWeatherInfo();
        setCity("");
    }
    return(
        <div className='searchBox'>
            <form onSubmit={handleSubmit}>
            <h1>Weather search</h1>
             <TextField id="city" value={city} onChange={handleCity} label="City Name" variant="outlined" required/>
            <br></br>
            <br></br>
            <Button variant="contained" type='submit'>Get Weather</Button>

            {err && <p style={{color:"red"}}>No such city exixts</p>}
            </form>
        </div>
    );
}