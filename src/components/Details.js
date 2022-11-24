import React from 'react'
import { UilArrowUp, UilArrowDown, UilTemperature, UilTear, UilWind, UilDashboard, UilEye} from '@iconscout/react-unicons'

function Details(props) {

  return (
    <div>
        <div className="flex items-center justify-center py6 text-xl
        text-purple-200 uppercase font-bold">
            <p>{props.data.weather_desc}</p>
        </div>
        <div className="flex flex-row items-center justify-between text-white py-5 font-light">
            <img src={props.data.weather_icon} alt="" className="w-30"/>
            <p className="text-5xl font-bold">&ensp;&emsp;{props.data.temp}°C</p>
            <div className="flex flex-col space-y-3">
                <div className="flex font-light text-sm items-left justify-left">
                    <UilTemperature size={18} className="mr-1"/>
                    <span className="font-medium ml-1">Feels like: {props.data.feels}°C</span>
                </div>
                <div className="flex font-light text-sm items-left justify-left">
                    <UilTear size={18} className="mr-1"/>
                    <span className="font-medium ml-1">Humidity: {props.data.humidity}%</span>
                </div>
                <div className="flex font-light text-sm items-left justify-left">
                    <UilWind size={18} className="mr-1"/>
                    <span className="font-medium ml-1">Wind speed: {props.data.wind} km/h</span>
                </div>
            </div>
        </div>
    <div className="flex flex-row items-center justify-center
    space-x-2 text-white text-sm-py3">

        <UilArrowUp/>
        <p className="font-light">
            High: <span className="font-medium ml-1">{props.data.temp_max}°C</span>
        </p>

        <UilArrowDown/>
        <p className="font-light">
            Low: <span className="font-medium ml-1">{props.data.temp_min}°C</span>
        </p>
        <UilDashboard/>
        <p className="font-light">
            Pressure: <span className="font-medium ml-1">{props.data.pressure} hPa</span>
        </p>

    </div>

    </div>
  )
}

export default Details