import React from 'react'

const ForecastCard = ({day,image,celcius,fahrenheit}) => {
  return (
    <div className='w-[120px] rounded-xl  min-h-[140px] bg-white p-3 flex flex-col items-center justify-between'>
      <h4>{day}</h4>
      <img src={image} alt="" className='w-[80px]' />
      <div>
        {celcius}&deg; / {fahrenheit}&deg;
      </div>
    </div>
  )
}

export default ForecastCard
