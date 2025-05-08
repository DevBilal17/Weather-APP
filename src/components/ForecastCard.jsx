import { Tooltip } from 'flowbite-react'
import React from 'react'

const ForecastCard = ({day,desc,image,celcius,fahrenheit}) => {
  return (
    <>
     <div className='md:w-[120px] w-full rounded-xl  min-h-[140px] bg-white p-3 flex flex-col items-center justify-between'>
      <h4>{day}</h4>
      <img src={image} alt="" className='w-[80px]' />
      <div>
        {celcius}&deg; / {fahrenheit}&deg;
      </div>
    </div>
    </>
     
  )
}

export default ForecastCard
{/* <Tooltip  content={desc} className="w-f" >
   
</Tooltip> */}