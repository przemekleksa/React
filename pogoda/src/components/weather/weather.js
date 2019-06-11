import React, { Component } from 'react';
import Loader from '../loader/loader';


class Weather extends Component {
    state = {
        isLoading: true,
        data: ""
    }
    render() {
        return (
            <div>
                pogoda
                <Loader isLoading={true} />
            </div>
        );
    }
}

export default Weather;