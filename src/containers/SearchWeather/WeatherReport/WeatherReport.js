import React from 'react';
import classes from './WeatherReport.module.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import WeatherSummary from './WeatherSummary/WeatherSummary';
import DetailedWeatherInformation from './DetailedWeatherInformation/DetailedWeatherInformation';

const WeatherReport = (props) => {
    let classNames = [classes.DataColumn,"order-first","order-md-last"]
    return (
        <Row className={classes.WeatherReport}>
            <Col className={classes.DataColumn} lg="6" md="12">
                <DetailedWeatherInformation
                    temperature={props.weatherData.weather.temperature}
                    humidity={props.weatherData.weather.humidity}
                    sunrise={props.weatherData.others.sunrise}
                    sunset={props.weatherData.others.sunset}
                    windSpeed={props.weatherData.weather.windSpeed}
                />
            </Col>
            <Col className={classNames.join(" ")} lg="6" md="12">
                <WeatherSummary
                    weatherShort={props.weatherData.weather.main}
                    weatherDescription={props.weatherData.weather.description}
                    timezone={props.weatherData.others.timezone}
                    city={props.weatherData.others.city}
                    countryCode={props.weatherData.others.countryCode}
                />
            </Col>
        </Row>
       
        
    )
}

export default WeatherReport;