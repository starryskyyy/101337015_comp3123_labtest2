import React, { useState} from 'react'
import { UilSearch} from '@iconscout/react-unicons'

function SearchBar(props) {

  return (

    <div className="flex flex-row justify-center my-6">
      <div className="flex flex-row w-3/4 items-center justify-center space-x-4">
        <input
         onChange={props.onChange}
          type="text"
          placeholder="city name..."
          className=" opacity-80 rounded-md text-xl font-light p-2 w-full shadow-xl focus:outline-none capitalize placeholder:lowercase" />
        <UilSearch
          size={25}
          className="text-white cursor-pointer transition ease-out hover:scale-125"
          onClick={props.onClick}
        />
      </div>
    </div>
  )
}

export default SearchBar