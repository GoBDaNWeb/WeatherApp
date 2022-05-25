import Image from 'next/image'
import moment from 'moment'

export default function WeatherToday({data}) {
    return (
        <div className='text-center'>
            <Image 
                src={`/images/icons/${data.weather[0].icon}.png`}
                width={64}
                height={64}
            />
            <div className='text-xl font-bold text-white'>
                {Math.round(data.main.temp)}&deg;C
            </div>
            <div className='text-sm font-bold text-white'>
                {moment(data.dt * 1000).format('HH.mm')}
            </div>
        </div>
    )
}