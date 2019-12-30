import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import classes from './FiveDaysWeather.module.css';
import WeatherCard from '../../../components/UI/WeeklyWeatherCard/WeeklyWeatherCard';
import axios from '../../../axios-weather';
import {text2TitleCase} from '../../../utilities';
class FiveDaysWeather extends Component {
    state = {
        fiveDaysData:null,
        userCity:null
    }
    componentDidUpdate() {
        console.log("Something changed in FiveDaysWeather")
        if(this.state.userCity!==this.props.userCity)
        {
            this.setState({userCity:this.props.userCity})
            axios.get("/forecast?q="+this.props.userCity+"&APPID=0a11aab6ebc27539f6bac125b08418ae")
             .then(response => {
                let periodicData = response.data.list.slice(4);
                let fiveDaysData = [];
                let data;
                for(data of periodicData)
                {
                    if(data.dt_txt.search("09:00:00")!==-1)
                    {
                        let weatherInformation = {
                            temperature:data.main.temp,
                            weatherShort:data.weather[0].main,
                            weatherDescription:data.weather[0].description,
                            timestamp:data.dt
                        }
                        fiveDaysData.push(weatherInformation)
                    }
                }
                console.log("Five Days Data")
                console.log(fiveDaysData)
                this.setState({fiveDaysData:fiveDaysData.slice(0,4)})
             })
        }
    }
    componentDidMount() {
        this.setState({userCity:this.props.userCity})
        axios.get("/forecast?q="+this.props.userCity+"&APPID=0a11aab6ebc27539f6bac125b08418ae")
             .then(response => {
                let periodicData = response.data.list.slice(4);
                let fiveDaysData = [];
                let data;
                for(data of periodicData)
                {
                    if(data.dt_txt.search("09:00:00")!==-1)
                    {
                        let weatherInformation = {
                            temperature:data.main.temp,
                            weatherShort:data.weather[0].main,
                            weatherDescription:data.weather[0].description,
                            timestamp:data.dt
                        }
                        fiveDaysData.push(weatherInformation)
                    }
                }
                console.log("Five Days Data")
                console.log(fiveDaysData)
                this.setState({fiveDaysData:fiveDaysData.slice(0,4)})
             })
    }

    convertTimestampToDay = (timestamp) => {
        let d = new Date(timestamp*1000)
        let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
        return days[d.getDay()];
     }

    render() {
        let weatherCards = "Loading....";
        if(this.state.fiveDaysData) {
            weatherCards = this.state.fiveDaysData.map(data => {
                return (
                    <Col>
                        <WeatherCard 
                            weatherShort={data.weatherShort}
                            weatherDescription={text2TitleCase(data.weatherDescription)} 
                            day={this.convertTimestampToDay(data.timestamp)}
                        />
                    </Col>
                        
                );
            });
        }
        
        return (
            <Row className={classes.Row}>
                {weatherCards}
            </Row>
        )
    }
    
}

export default FiveDaysWeather;