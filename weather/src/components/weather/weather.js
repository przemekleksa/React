import React, { Component } from 'react';
import axios from 'axios';
import Loader from '../loader/loader';



class Weather extends Component {
    state = {
        isLoading: false,
        isError: false,
        show: false,
        data: "",
        city: ""
    }


    onInputChange = (e) => {
        this.setState({
            city: e.target.value
        })
    }
    showWeather = (e) => {
        this.loadWeather();
        e.preventDefault();
    }

    loadWeather = () => {
        const API_URL = "https://api.apixu.com/v1/forecast.json?key=3983b588d2f240aea4282620191004&days=7&fbclid=IwAR07vi9neXoHUhJNAK9NtxxTh1mYeGUfh9ixzzc7PyPFtFltaCboPJIM0Pw&q="+this.state.city;

        this.setState({
            show: true,
            isLoading: true
        })

        axios({
            method: 'GET',
            url: API_URL,
        }).then((response) => {
            this.setState({
                isLoading: false,
                isError: false,
                data: response.data
            })
        }).catch((error) => {
            this.setState({
                isLoading:false,
                isError: true
            })
        })
    }

    render() {
        return (
            <div>
                <div>
                        <form onSubmit={this.showWeather} >
                           <input type="text" onChange={this.onInputChange} />
                           {/* <input type="submit" value="szukaj"/> */}
                           <button type="submit"> Pokaż pogodę</button>
                       </form>
                </div>
                <Loader isLoading={this.state.isLoading} />

                {this.state.show &&
                    <>
                        {(!this.state.isLoading && this.state.isError === true) &&
                            <div>
                                Api nie dziala
                                </div>
                        }

                        {(this.state.isLoading === false && this.state.isError === false) && 
                        
                            <div>
                            <h1>Pogoda dla {this.state.data.location.name} </h1> <br />
                            
                                Aktualna temperatura wynosi: {this.state.data.current.temp_c} stopni Celsjusza<br />
                                <img src={this.state.data.current.condition.icon} alt={this.state.data.current.condition.text} />
                            
                            
                                {this.state.data.forecast.forecastday.map((item, key) => {
                                    return (
                                        <div key={key}>
                                            <p>Data {item.date}</p>
                                            <p>Temperatura {item.day.maxtemp_c}</p>
                                            <p><img src={item.day.condition.icon} /></p>
                                            <hr />
                                        </div>
                                    );
                                })}
                            </div>
                        }
                    </>
                }


            </div>
        );
    }
}

export default Weather;