import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './DisplayWeather.css';
import { AccessAlarm, ThreeDRotation } from '@mui/icons-material';
import Alert from '@mui/material/Alert';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import LightModeIcon from '@mui/icons-material/LightMode';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import { useState } from 'react';


export default function DisplayWeather({info})
{
    let [copied,setCopied] = useState(false);
    let shareInfo = () =>{
        setCopied(true);
        navigator.clipboard.writeText(`Temprature - ${info.temp} degrees. Can be decribed as ${info.weather} & Feels like ${info.feelsLike} degrees` );
    }
    let HOT_URL = "https://i.pinimg.com/736x/b4/7e/a1/b47ea1848a4c3d640d1271eea9fb3d81.jpg";
    let COLD_URL = "https://cdn2.vectorstock.com/i/1000x1000/44/91/cold-weather-boy-vector-20694491.jpg";
    let RAIN_URL = "https://img.freepik.com/free-vector/flat-monsoon-season-background-with-people-umbrellas_23-2149456516.jpg";
    let INIT_URL = "https://i.pinimg.com/736x/f5/58/40/f558402b9fb6136439d2d041a7201065.jpg";
    return(
    <div className='InfoBox'>
      <div className='InfoCard'>
      <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image= {
            info.humidity>80 ? RAIN_URL : (info.temp>15 ? HOT_URL : COLD_URL)
        }
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {info.humidity>80 ? <ThunderstormIcon/> : (info.temp>15 ? <LightModeIcon/> : <AcUnitIcon/>)} {info.city}
        </Typography>
        <Typography variant="body2" color="text.secondary" component={"span"}>
         <div>Temprature - {info.temp}&deg;C </div>
         <div>Humidity - {info.humidity} </div>
         <div>Can be decribed as <i>{info.weather}</i> & Feels like {info.feelsLike}&deg;C </div>
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={shareInfo}>Share</Button>
       {copied && <Alert severity="success">Copied to clipboard </Alert>}
      </CardActions>
    </Card>
    </div>
    </div>
    );
}