import axios from 'axios'
import './App.css'
import { useState } from 'react'
import Cloud from './assets/icon.png'

function App() {
  const [data, setData] = useState({})
  const [location, setLocation] = useState("")
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=56321fdec4074c61f611aecaf1471280&units=metric`

  const searchLocation = (e) => {
    axios.get(url).then((response) => {
      setData(response.data)
      console.log(response.data);
    })
  }

  return (
    <>
      <div className='card rounded-3xl flex justify-start items-center p-5 flex-col'>
        <div>
          <input onChange={e => setLocation(e.target.value)} type="text" className='h-10 rounded-3xl mr-3 focus:outline-cyan-700 p-3 text-md' />
          <button onClick={searchLocation} className='bg-white justify-center items-center rounded-full h-9 w-9'><i class="fa-solid fa-magnifying-glass"></i></button>
        </div>
        <div className='p-5'>
          {data.weather ? <img className='w-28' src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt="" /> : <img className='w-28' src={Cloud} alt="" />}
        </div>
        <div className='text-center'>
          {data.main && <h1 className='text-6xl font-bold text-white pb-3'>{data.main.temp}°C</h1>}
          {data.name && <h3 className='text-4xl pt-5 font-normal text-white'>{data.name}</h3>}
        </div>
        <div className='flex pt-10 text-white'>
          <div className='flex pr-3'>
            <div className='text-4xl pr-2'><i className="fa-solid fa-water text-cyan-900"></i></div>
            <div>
              {data.main && <h4 className='text-xl font-bold'>{data.main.humidity}%</h4>}
              <p className='text-md'>Humidity</p>
            </div>
          </div>
          <div className='flex'>
            <div className='text-4xl pr-2'><i className="fa-solid fa-wind text-cyan-900"></i></div>
            <div>
              {data.wind && <h4 className='text-xl font-bold'>{data.wind.speed} km/h</h4>}
              <p className='text-md'>Wind Speed</p>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default App
