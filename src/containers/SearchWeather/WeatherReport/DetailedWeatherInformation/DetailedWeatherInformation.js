import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';
import {toCelsius,convertTimestampToTime} from '../../../../utilities';
import classes from './DetailedWeatherInformation.module.css';
const DetailedWeatherInformation = (props) => {
    return (
        <Card className={classes.Card}>
                <ListGroup className={classes.OtherWeatherInformation} variant="flush">
                    <ListGroup.Item>
                        <div>
                            <div><i className="wi wi-celsius" style={{fontSize:"30px"}}></i></div>
                            <div style={{float:"right",fontSize:"20px"}}>{toCelsius(props.temperature)}</div>
                        </div>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <div>
                            <div><i className="wi wi-humidity" style={{fontSize:"30px"}}></i></div>
                            <div style={{float:"right",fontSize:"20px"}}>{props.humidity}%</div>
                        </div>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <div>
                            <div><i className="wi wi-sunrise" style={{fontSize:"30px"}}></i></div>
                            <div style={{float:"right",fontSize:"20px"}}>{convertTimestampToTime(props.sunrise)}</div>
                        </div>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <div>
                            <div><i className="wi wi-sunset" style={{fontSize:"30px"}}></i></div>
                            <div style={{float:"right",fontSize:"20px"}}>{convertTimestampToTime(props.sunset)}</div>
                        </div>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <div>
                            <div><i className="wi wi-windy" style={{fontSize:"30px"}}></i></div>
                            <div style={{float:"right",fontSize:"20px"}}>{props.windSpeed} m/s</div>
                        </div>
                    </ListGroup.Item>
                </ListGroup>
        </Card>
    );
}

export default DetailedWeatherInformation;
