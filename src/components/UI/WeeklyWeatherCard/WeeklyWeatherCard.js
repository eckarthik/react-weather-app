import React from 'react';
import Card from 'react-bootstrap/Card';
import classes from './WeeklyWeatherCard.module.css';
const WeatherCard = (props) => {
    let weathericon = "wi wi-cloud";
    let weather = props.weatherShort.toLowerCase()
    console.log("Weather = "+weather)
    if(weather.search("clouds")!==-1)
    {
        weathericon = "wi wi-cloudy"
    }
    if(weather.search("rain")!==-1) {
        weathericon = "wi wi-rain"
    }
    if(weather.search("thunder")!==-1) {
        weathericon = "wi wi-thunderstorm"
    }
    if(weather.search("snow")!==-1) {
        weathericon = "wi wi-snow"
    }
    if(weather.search("fog")!==-1) {
        weathericon = "wi wi-fog"
    }
    if(weather.search("clear")!==-1) {
        weathericon = "wi wi-day-sunny"
    }
    return (
        <Card className={classes.Card}>
            <Card.Body>
                <div className={classes.Day}>{props.day}</div>
                <i className={weathericon} style={{fontSize:"30px",color:"purple"}}/>
                <div className={classes.WeatherDescription}>{props.weatherDescription}</div>
            </Card.Body>
        </Card>
    )
}

export default WeatherCard;