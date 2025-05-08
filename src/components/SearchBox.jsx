import React, { useContext, useState } from 'react'
import { weatherData } from '../context/ContextApi';

const SearchBox = () => {
    const [data,setData] = useState('');
    let {fetchApi,setLoading} = useContext(weatherData)
    const handleSearch = (e)=>{
        e.preventDefault()
        setLoading(true)
        if(data.trim()==''){
            return alert('write city on input')
        }
        console.log(data)
        fetchApi(data)
        setData('')

    }
  return (
    <form className='max-w-[600px] mx-auto w-full flex items-center gap-4 relative'>
      <input type="text" placeholder='Enter city name' value={data} onChange={(e)=>setData(e.target.value)}  className='w-full px-4 pr-20 py-2 outline-none rounded-full border-none' />
      <button onClick={(e)=>handleSearch(e)} className='bg-blue-500 px-3.5 py-2 rounded-full absolute -right-1 text-white'>Search</button>
    </form>
  )
}

export default SearchBox
