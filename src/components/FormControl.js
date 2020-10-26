import React, {Component} from 'react';

class FormControl extends Component {
    constructor(props) {
        super(props);
        this.state = {
            city: ''
        }
    }

    handleChangeInput = (event) => {
        this.setState({city: event.target.value});
    }

    handleClickButton = () => {
        this.props.getWeather(this.state.city);
        this.setState({city: ''});
    }

    render() {
        return (
            <div>
                <input
                    value={this.state.city}
                    onChange={this.handleChangeInput}
                    type='text'
                    placeholder='city'/>
                <button onClick={this.handleClickButton}>Get Weather</button>
            </div>
        );
    }
}

export default FormControl;