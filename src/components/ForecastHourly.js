import React from 'react'
import moment from 'moment';


function ForecastHourly(props) {

    const date = new Date(props.days.dt_txt);
    date.setHours(date.getHours());
  

    return (
        <div className="flex flex-col items-center justify-center">
            <p className="font-light text-sm">{moment(props.days.dt_txt).format('LT')}</p>
            <img src="http://openweathermap.org/img/wn/10d@2x.png" alt="" className="w-16 my-1" />
            <p className="font-medium">{Math.round(props.days.main.temp)}°</p>
        </div>
    )
}

export default ForecastHourly