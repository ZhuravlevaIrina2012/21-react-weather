import React from 'react';

const Form = () => {
    const handleSubmitWeather = event => {
        event.preventDefault();
        const city = event.currentTarget.city.value.trim();
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=b2929310bfd4d40fb46d0c85e92f2f44`;
        console.log(url);
        fetch(url)
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('' + response.status);
                }
            })
            .then(value =>
                console.log(`location: ${value.coord.lon}, ${value.coord.lat}, temperature: ${value.main.temp}, pressure: ${value.main.pressure}, sunset: ${value.sys.sunset}`))
            .catch(e => alert(e.message));
    }

    return (
        <form onSubmit={handleSubmitWeather}>
            <input type='text' name='city' placeholder='City'/>
            <button type='submit'>Get weather</button>
        </form>
    );
}

export default Form;