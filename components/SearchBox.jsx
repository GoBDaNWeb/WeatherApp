import { useState } from "react"
import Link from 'next/link';
import axios from 'axios'
import {getSlug} from '../lib/helpers'

export default function SearchBox() {
    const [query, setquery] = useState('')
    const [results, setResults] = useState([])

    const onChange = async e => {
        const {value} = e.target

        let matchedCities = []

        setquery(value)

        if(value.length > 2) {
            const res = await axios.get(`http://localhost:5000/cities?name_like=${value}`)
            matchedCities = res.data
        }
        setResults(matchedCities)
    }

    return (
        <div className="flex flex-col w-[300px] sm:w-[500px] md:w-[700px] px-4 m-auto gap-6">
            <input 
                type="text" 
                value={query}
                placeholder='Enter your city'
                className="p-4 w-full mt-12 text-white rounded-xl outline-none bg-opacity-40 bg-black" 
                onChange={onChange}
            />
            {
                results.length > 0 
                && <div className="flex flex-col bg-black text-white bg-opacity-30 w-full rounded-xl overflow-auto max-h-[224px]" id="element">   
                {
                    results.length > 0 
                    && results.map((city, index) => (
                        <div key={index}>
                            <Link href={`/location/${getSlug(city.name, city.id)}`}>
                                <a className=" py-4 px-6 w-full block hover:bg-black hover:bg-opacity-20">
                                    {city.name}, {city.country}
                                </a>
                            </Link>
                        </div>
                    ))
                }
                </div>
            }
        </div>
    )
}