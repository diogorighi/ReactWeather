var React = require('react');

var WeatherMessage = ({temp, location}) => {
    return (
        <p>{temp} grais em {location}!</p>
    );
}

module.exports = WeatherMessage;