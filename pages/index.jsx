import SearchBox from "../components/SearchBox"
import PopularCities from './../components/PopularCities';
import { WiDayCloudyGusts } from "react-icons/wi";

export default function Home() {

    return (
        <div className="flex justify-center items-center flex-col gap-5 md:pt-56 py-10">
            <div className="flex items-center gap-2">
                <WiDayCloudyGusts className="sm:text-8xl text-6xl font-bold text-[#bb953d]"/>
                <div className="bg-black p-2 bg-opacity-0">
                    <span className="font-bold sm:text-4xl text-3xl gradient-title">
                        WeatherApp
                    </span>
                </div>
            </div>
            <div className="max-w-[700px] h-96 mx-4 backdrop-blur-sm bg-opacity-10 bg-black rounded-xl">
                <SearchBox/>
            </div>
            <PopularCities/>
        </div>
    )
}
