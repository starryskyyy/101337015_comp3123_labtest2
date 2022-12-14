import React from 'react'
import moment from 'moment';

function ForecastDaily(props) {


    return (
        <div className="flex flex-col items-center justify-center">
            <p className="font-light text-sm">{moment(props.days.dt_txt).format('dddd')}</p>
            <img src={`http://openweathermap.org/img/wn/${props.days.weather[0].icon
                }@2x.png`} alt="" className="w-16 my-1" />
            <p className="font-medium">{Math.round(props.days.main.temp)}°</p>
        </div>
    )
}

export default ForecastDaily