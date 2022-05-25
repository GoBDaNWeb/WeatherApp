import React, { useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import axios from 'axios'
import { useState } from 'react';
import {getSlug} from '../lib/helpers'


export default function PopularCities() {
    const [results, setResults] = useState([])

    // ** Массив в популярными Городами
    const popularCities = [
        {
            id: '524894',
            name: 'Moscow'
        },
        {
            id: '2643743',
            name: 'London'
        },
        {
            id: '1850147',
            name: 'Tokyo'
        },
        {
            id: '2988506',
            name: 'Paris'
        }
    ]

    // ** при монтировании элемента берем данные о популярных городах
    useEffect(async () => {
        let matchedCities = []
        for(let city of popularCities) {
            const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?appid=0473941d5830e3228732c0f2cb95f49a&units=metric&id=${city.id}`)
            matchedCities.push({...res.data})
            if(matchedCities.length >= 4) {
                setResults(matchedCities) 
            }
        }
    },[])
    
    return (
        <div className="flex items-center flex-col gap-4">
            <hr className='md:w-[90%] w-[80%]'/>
            <h1 className='text-center lg:text-6xl md:text-5xl text-2xl font-bold text-white txt-shadow'>
                Most Popular Cities
            </h1>

            <hr className='md:w-[90%] w-[80%]'/>
            {
                results.length > 0 
                &&
                results.map((city, index) => (
                    <div key={index} >
                        <Link href={`/location/${getSlug(city.name, city.id)}`} > 
                            <div className="md:w-[700px] sm:w-[500px] w-[300px] h-32 bg-opacity-10 bg-black rounded-xl relative select-none cursor-pointer group overflow-hidden">
                                <div className={`w-full h-full bg-[url('/images/${city.name}.jpg')] bg-center bg-no-repeat bg-cover blur-[.8px] rounded-xl group-hover:scale-110 transition`}>
                                </div>
                                <div className="absolute h-full top-0 left-0 bottom-0 right-0 bg-black bg-opacity-10 rounded-xl">
                                    <div className="flex flex-col mini:flex-row justify-center items-center mini:justify-between h-full">
                                        <h1 className="lg:text-5xl sm:text-3xl text-xl mini:ml-8 text-white text-center font-bold txt-shadow">{city.name}</h1>
                                        <div className="mini:mr-8 flex items-center justify-center flex-col mini:flex-row gap-2">
                                            <Image
                                                src={`/images/icons/${city.weather[0].icon}.png`}
                                                width={64}
                                                height={64}
                                            />
                                            <span className="text-white font-bold lg:text-5xl sm:text-3xl text-xl txt-shadow">
                                                {Math.round(city.main.temp)}&deg;C
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div> 
                )) 
            }
            <div className='hidden'>
                <div className={`bg-[url('/images/Tokyo.jpg')] bg-center bg-no-repeat bg-cover w-full h-full`}></div> 
                <div className={`bg-[url('/images/Moscow.jpg')] bg-center bg-no-repeat bg-cover w-full h-full`}></div> 
                <div className={`bg-[url('/images/Paris.jpg')] bg-center bg-no-repeat bg-cover w-full h-full`}></div> 
                <div className={`bg-[url('/images/London.jpg')] bg-center bg-no-repeat bg-cover w-full h-full`}></div> 
            </div>
        </div>
        
    )
}