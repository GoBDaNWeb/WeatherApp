import React from 'react'
import moment from 'moment'
import ForecastToday from './ForecastToday'
import ForecastOnWeek from './ForecastOnWeek'

export default function WeatherForecast({data}) {
    
    const start = moment().add(1, 'day').startOf('day').unix()
    const end = moment().add(5, 'day').endOf('day').unix()

    const forecast = data.list.filter( item => item.dt >= start && item.dt <= end)
    const forecastE = data.list.filter( item => item.dt < start)

    const today = forecastE.slice(0,8)
    const dayOne = forecast.slice(1,8)
    const dayTwo = forecast.slice(9,16)
    const dayThree = forecast.slice(17,24)
    const dayFour = forecast.slice(25,32)
    const dayFive = forecast.slice(33,40)   

    return (
        <div className='flex gap-4 flex-col mx-4 overflow-auto'>
            <div>
                <h1 className='text-white text-center lg:text-left font-bold text-4xl'>Weather Today</h1>
                <div className='overflow-x-auto max-w-full bg-black bg-opacity-10 p-2 lg:p-8 rounded-xl select-none mx-2'>
                    <div className='flex gap-16 justify-center items-end mx-4 lg:mx-10 px-2 lg:px-6  '>
                        {
                            today.length > 0 &&
                            today.map((data, index) => (
                                <div key={index}>
                                    <ForecastToday data={data}/>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
            <div>
                <h1 className='text-white text-center lg:text-left font-bold text-4xl'>Weather on the Week</h1>
                <div className='overflow-x-auto max-w-full bg-black bg-opacity-10 p-2 lg:p-8 rounded-xl select-none mx-2'>
                    <div className='flex gap-16 justify-center items-end mx-4 lg:mx-10 px-2 lg:px-6 '>
                        <ForecastOnWeek data={dayOne[0]}/>
                        <ForecastOnWeek data={dayTwo[0]}/>
                        <ForecastOnWeek data={dayThree[0]}/> 
                        <ForecastOnWeek data={dayFour[0]}/>
                        <ForecastOnWeek data={dayFive[0]}/> 
                    </div>
                </div>
            </div>
        </div>
    )
}