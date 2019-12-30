import React from 'react'
import classes from './WeatherSummary.module.css';
import Card from 'react-bootstrap/Card';
import {convertTimestampToDate,convertTimestampToDay,text2TitleCase} from '../../../../utilities';
const WeatherSummary = (props) => {
    
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
        <Card className={classes.Card} style={{border:"0px",height:"100%"}}>
            <Card.Body>
                <Card.Title className="text-center">{convertTimestampToDay(props.timezone)}</Card.Title>
                <Card.Subtitle className="text-center mb-2 text-muted">{convertTimestampToDate(props.timezone)}</Card.Subtitle>
                    <div className={classes.WeatherIcon}>
                        <i className={weathericon}/>
                    </div>
                    <p className="text-center">
                        {props.weatherShort}
                    </p>
                    <p className="text-center">
                        {text2TitleCase(props.weatherDescription)}
                    </p>
                    <div className={classes.CityName}>
                        {props.city}
                    </div>
                    <div className="text-center">
                        <p>{props.countryCode}</p>
                    </div>
            </Card.Body>

        </Card>

    );
}

export default WeatherSummary;