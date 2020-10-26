import React from 'react';

const Form = props => {
    const handleSubmitWeather = event => {
        event.preventDefault();
        const city = event.currentTarget.city.value.trim();
        props.getWeather(city);
    }

    return (
        <form onSubmit={handleSubmitWeather}>
            <input type='text' name='city' placeholder='City'/>
            <button type='submit'>Get weather</button>
        </form>
    );
}

export default Form;