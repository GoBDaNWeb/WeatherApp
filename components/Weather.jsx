import React from 'react'
import Image from 'next/image'
import moment from 'moment'

export default function Weather ({data}) {
    const cityName = `${data.name}, ${data.sys.country}`
    const temp = Math.round(data.main.temp)
    const feels = Math.round(data.main.feels_like)
    const humidity = data.main.humidity
    const wind = data.wind
    const icon = data.weather[0].icon
    const descr = data.weather[0].description
    const sunrise = data.sys.sunrise
    const sunset = data.sys.sunset
    const tz = data.timezone * 1000
    return (
        <div className='max-h-full max-w-full select-none mx-4'>
            <div className={`max-w-96 bg-black rounded-xl bg-opacity-10 backdrop-blur-sm text-[#f1f1f1]`}>
                <div className='px-6 pb-4'>
                    <h1 className='text-center text-3xl font-bold py-4'>{cityName}</h1>
                    <Image 
                        src={`/images/icons/${icon}.png`}  
                        width={340} 
                        height={320} 
                        objectFit='contain'
                        alt={descr}
                    />
                    <h5 className='text-center text-xl mb-5'>{descr}</h5>
                    <h2 className='text-center text-7xl font-bold'>
                        {temp}&deg;C
                    </h2>
                    <h3 className='text-center text-2xl font-bold'>Feels Like: {feels}&deg;C</h3>
                    <hr />
                    <div className='mt-2 text-center'>
                        <div className='flex justify-between mb-8'>
                            <div>
                                <Image
                                    src={'/images/icons/sunrise.png'} 
                                    width={100} 
                                    height={100}
                                />
                                <h4>{moment.utc(sunrise * 1000 + tz).format('HH:mm')}</h4>
                            </div>
                            <div>
                                <Image
                                    src={'/images/icons/sunset.png'} 
                                    width={100} 
                                    height={100}
                                />
                                <h4>{moment.utc(sunset * 1000 + tz).format('HH:mm')}</h4>
                            </div>
                        </div>
                        <div className='flex justify-evenly'>
                            <div className='flex items-center justify-center'>
                                <Image
                                    src={'/images/icons/humidity.png'}
                                    width={36}
                                    height={36}
                                />
                                <span className='text-xl'>
                                    {humidity}%
                                </span>
                            </div>
                            <div className='flex items-center justify-center'>
                                <div style={{
                                        display: 'block',
                                        transform: `rotate(${wind.deg}deg)`
                                    }}
                                >
                                    <Image
                                        src={'/images/icons/arrow.png'}
                                        width={36}
                                        height={36}
                                    />
                                </div>
                                <span className='text-xl'>
                                    {wind.speed}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
