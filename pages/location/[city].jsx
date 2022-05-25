import React from 'react'
import axios from 'axios'
import Weather from '../../components/Weather'
import WeatherForecast from '../../components/WeatherForecast';

export async function getServerSideProps(context) {
    const slug = context.params.city
    console.log(context);
    const slugArray = slug.split('-')
    const id = slugArray[slugArray.length - 1]
    const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?units=metric&appid=${process.env.NEXT_API_KEY}&id=${id}`)
    const resFor = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?units=metric&appid=${process.env.NEXT_API_KEY}&id=${id}`)
    
    return {
        props: {
            data: res.data,
            dataForecast: resFor.data
        }
    }
}

function City({data, dataForecast}) {
    return (
        <div className='h-full w-full flex flex-col lg:flex-row gap-6 lg:gap-0 py-2 justify-evenly items-center mx-12'>
            <Weather data={data}/>
            <WeatherForecast data={dataForecast}/>
        </div>
    )
}

export default City