import React, { useState, useEffect } from 'react';
import axios from "axios";
import SearchBar from './components/SearchBar'
import Location from './components/Location'
import Details from './components/Details'
import ForecastDaily from './components/ForecastDaily'
import moment from 'moment';

export default function WeatherApp() {
    const API_KEY = "7d04b9ca097cabc50585d529541c306b";

    const [city, setCity] = useState({ name: 'Toronto', term: "" });
    const [weather, setWeather] = useState({});
    const [forecast, setForecast] = useState([]);

    const handleChange = e => {
        setCity({
            term: e.target.value
        });
    };

    const handleClick = (e, err) => {

        const WEATHER_API = `https://api.openweathermap.org/data/2.5/weather?q=${city.term}&units=metric&appid=${API_KEY}`;
        const FORECAST_API = `https://api.openweathermap.org/data/2.5/forecast?q=${city.term}&units=metric&appid=${API_KEY}`;
        axios
            .get(WEATHER_API)
            .then(setWeatherData)
            .catch(err);
        axios
            .get(FORECAST_API)
            .then(handleForecast)
    }

    function setWeatherData(res) {


        setWeather({
            city_name: res.data.name,
            temp: Math.round(res.data.main.temp),
            humidity: res.data.main.humidity,
            wind: Math.round(res.data.wind.speed * 3.6),
            feels: Math.round(res.data.main.feels_like),
            weather_desc: res.data.weather[0].description,
            pressure: (res.data.main.pressure).toLocaleString(),
            temp_max: Math.round(res.data.main.temp_max),
            temp_min: Math.round(res.data.main.temp_min),
            weather_icon: `http://openweathermap.org/img/wn/${res.data.weather[0].icon
                }@2x.png`,
            date: moment(res.data.dt * 1000).format('dddd, D MMMM YYYY')
        })
    }

    console.log(weather)

    function handleForecast(res) {
        setForecast(res.data.list);
    }

    useEffect((err) => {


        const WEATHER_API = `https://api.openweathermap.org/data/2.5/weather?q=${city.name}&units=metric&appid=${API_KEY}`;
        const FORECAST_API = `https://api.openweathermap.org/data/2.5/forecast?q=${city.name}&units=metric&appid=${API_KEY}`;

        axios
            .get(WEATHER_API)
            .then(setWeatherData)
            .catch(err);
        axios
            .get(FORECAST_API)
            .then(handleForecast)

    }, [city])


    function everyEithElements(ary) {
        let result = [];

        for (let i = 0; i < ary.length; i += 8) {
            result.push(ary[i])
        }
        return result
    }

    return (

        <>
            <div className="mx-auto max-w-screen-xl rounded-2xl m-4 py-5 px-32 
bg-gray-500 bg-opacity-10 h-fit shadow-lg shadow-gray-200">
                <SearchBar onChange={handleChange} onClick={handleClick} />
                <Location city={weather.city_name} date={weather.date} />
                <Details data={weather} />

                <div>
                    <div className="flex items-center justify-start my-6">
                        <p className="text-white font-medium uppercase">daily Forecast</p>
                    </div>
                    <hr className="my-2" />
                    <div className="flex flex-row items-center justify-between text-white">

                        {

                            everyEithElements(forecast).slice(0, 5).map(day => (
                                <>
                                    <ForecastDaily days={day} />

                                </>
                            ))
                        }
                    </div>
                </div>


            </div>

        </>

    );
}
