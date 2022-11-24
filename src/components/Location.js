import React from 'react'

function Location(props) {

    return (

        <div>
            <div className="flex items-center justify-center my-6">
                <p className="text-white text-xl font-extralight">{props.date} </p> 

            </div>
            <div className="flex items-center justify-center my-3 ">
                <p className="text-white text-3xl font-semibold mt-12">{props.city}</p>
            </div>
        </div>
    )
}

export default Location