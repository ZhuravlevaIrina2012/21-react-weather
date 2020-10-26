import React from 'react';

const Weather = ({weather, message}) => {
    // if (message){
    //     return (
    //         <div>
    //             <p>{message}</p>
    //         </div>
    //     )
    // }else {
    //     return (
    //         <div>
    //             <p>Location: {weather.city}, {weather.country}</p>
    //             <p>Temperature: {weather.temp}</p>
    //             <p>Pressure: {weather.pressure}</p>
    //             <p>Sunset: {weather.sunset}</p>
    //         </div>
    //     );
    // }

    return (
        <div className='infoWeath'>
            {!message &&
            <div>
                <p>Location: {weather.city}, {weather.country}</p>
                <p>Temperature: {weather.temp}</p>
                <p>Pressure: {weather.pressure}</p>
                <p>Sunset: {new Date(weather.sunset*1000).toLocaleTimeString("en-US")}</p>
            </div>
            }
        </div>
    );
};
export default Weather;