import React from 'react';

const WeatherCard = ({ data }) => {
    console.log(data);
    const { temp_c, humidity, condition, wind_kph } = data.current;

    return (
        <div className="weather-card">
            <div className="weather-info">
                <div className="weather-info-item">
                    <div className="card">
                        <h3>Temperature</h3>
                        <p>{temp_c}°C</p>
                    </div>
                </div>
                <div className="weather-info-item">
                    <div className="card">
                        <h3>Humidity</h3>
                        <p>{humidity}%</p>
                    </div>
                </div>
                <div className="weather-info-item">
                    <div className="card">
                        <h3>Condition</h3>
                        <p>{condition.text}</p>
                    </div>
                </div>
                <div className="weather-info-item">
                    <div className="card">
                        <h3>Wind Speed</h3>
                        <p>{wind_kph} kph</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WeatherCard;
