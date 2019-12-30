import React,{Component} from 'react';
import Aux from '../../hoc/Auxiliary/Auxiliary';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import classes from './SearchWeather.module.css';
import UserInput from './UserInput/UserInput';
import WeatherReport from './WeatherReport/WeatherReport';
import FiveDaysWeather from './FiveDaysWeather/FiveDaysWeather';
import axios from '../../axios-weather';
class SearchWeather extends Component {
    state = {
        userCity: "Bengaluru",
        weatherInformation:null,
    }
    componentDidMount() {
        console.log("ComponentDidMount was called")
        axios.get("/weather?q="+this.state.userCity+"&APPID=0a11aab6ebc27539f6bac125b08418ae")
             .then(response => {
                let weatherInformation = {
                    coordinates:{
                        latitude:response.data.coord.lat,
                        longitude:response.data.coord.lon
                    },
                    weather: {
                        main:response.data.weather[0].main,
                        description:response.data.weather[0].description,
                        temperature:response.data.main.temp,
                        humidity:response.data.main.humidity,
                        windSpeed:response.data.wind.speed,
                        windDirection:response.data.wind.deg,
                    },
                    others: {
                        sunrise:response.data.sys.sunrise+response.data.timezone,
                        sunset:response.data.sys.sunset+response.data.timezone,
                        city:response.data.name,
                        countryCode:response.data.sys.country,
                        timezone:response.data.timezone
                    }
                }

                this.setState({weatherInformation:weatherInformation})
                console.log(weatherInformation)
             })
    }

    getWeatherData = (city) => {
        this.setState(this.setState({userCity:city}),() => {
            console.log(this.state)
        });
        axios.get("/weather?q="+city+"&APPID=0a11aab6ebc27539f6bac125b08418ae")
             .then(response => {
                let weatherInformation = {
                    coordinates:{
                        latitude:response.data.coord.lat,
                        longitude:response.data.coord.lon
                    },
                    weather: {
                        main:response.data.weather[0].main,
                        description:response.data.weather[0].description,
                        temperature:response.data.main.temp,
                        humidity:response.data.main.humidity,
                        windSpeed:response.data.wind.speed,
                        windDirection:response.data.wind.deg,
                    },
                    others: {
                        sunrise:response.data.sys.sunrise+response.data.timezone,
                        sunset:response.data.sys.sunset+response.data.timezone,
                        city:response.data.name,
                        countryCode:response.data.sys.country,
                        timezone:response.data.timezone
                    }
                }

                this.setState({weatherInformation:weatherInformation})
                console.log(weatherInformation)
             })
    }

    render() {
        let containerData = <h1>Loading</h1>;
        if(this.state.weatherInformation)
        {
            containerData = (
                        <Aux>
                             <Row>
                                <Col lg="6" md="12">
                                    <UserInput clicked={this.getWeatherData}/>
                                </Col>
                                <Col lg="6" md="12">
                                    <WeatherReport weatherData={this.state.weatherInformation}/>
                                </Col>
                            </Row>
                            <FiveDaysWeather userCity={this.state.userCity}/>
                        </Aux>
                       
            );
        }
        return (
            <Aux>
                <div className={classes.Container}>
                    <Container>
                        {containerData}
                    </Container>
                </div>
            </Aux>
        )
    }
}

export default SearchWeather;