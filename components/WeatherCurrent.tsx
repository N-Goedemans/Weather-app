import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { FaTemperatureThreeQuarters } from "react-icons/fa6";
import { ImCompass } from "react-icons/im";
import { LuWind } from "react-icons/lu";
import { FaRegEye } from "react-icons/fa";
import { IoSunny } from "react-icons/io5";
import { WiHumidity } from "react-icons/wi";
import { FiSunrise } from "react-icons/fi";
import { FiSunset } from "react-icons/fi";
import { FaLongArrowAltUp } from "react-icons/fa";
import { FaLongArrowAltDown } from "react-icons/fa";

export default function WeatherCurrent({ WeatherData }: { WeatherData: any }) {
  if (WeatherData?.hasOwnProperty("current")) {
    console.log(WeatherData);
  } else {
    return (
      <>
        <div className="flex justify-center pt-64">
          <div className="flex flex-col items-center">
            <div className="pb-12">
              <div className="bg-white/25 p-4 rounded-xl shadow-lg animate-bounce">
                <FaLongArrowAltUp size={40}/>
              </div>
            </div>
            <div className="font-semibold text-4xl bg-white/30 p-5 rounded-xl shadow-lg">
              <h3>Search for a city!</h3>
            </div>
            <div className="pt-3">
              <p>Made by Niek Goedemans</p>
            </div>
          </div>
        </div>
      </>
    );
  }
  return (
    <>
      <div className="flex flex-col p-10 sm:px-16 md:px-28 lg:px-48">
        <div className="flex flex-col sm:flex-row sm:justify-evenly items-center">
          {/* Current Weather */}
          <div className="flex justify-between">
            <div className="flex flex-col justify-center">
              <div className="flex flex-row items-center justify-between">
                <div>
                  <h3 className="text-3xl">Today</h3>
                  <h1>
                    {WeatherData?.forecast?.forecastday[0]?.date?.split("-")[2]}
                    /
                    {WeatherData?.forecast?.forecastday[0]?.date?.split("-")[1]}
                    /
                    {WeatherData?.forecast?.forecastday[0]?.date?.split("-")[0]}
                  </h1>
                </div>
                <div>
                  <img
                    src={WeatherData?.current?.condition?.icon}
                    width={60}
                    height={60}
                    alt="Weather Icon"
                  />
                </div>
              </div>
              <div></div>
              <div className="text-3xl">
                <h5>{WeatherData?.current?.temp_c}°C</h5>
              </div>
              <div className="text-black bg-white rounded-xl p-2 text-sm flex items-center">
                <div className="pr-2">
                  <FaLocationDot />
                </div>
                <div>
                  {WeatherData?.location?.region
                    ? `${WeatherData?.location?.name}, ${WeatherData?.location?.region}`
                    : WeatherData?.location?.name}
                </div>
              </div>
            </div>
          </div>
          {/* Weather Forecast 3 days */}
          <div>
            <div className="grid grid-cols-3 gap-4 pt-16">
              {WeatherData?.forecast?.forecastday.map((day: any) => (
                <div className="flex flex-row justify-between">
                  <div className="flex flex-col justify-center">
                    <div className="flex flex-row items-center justify-between">
                      <div className="bg-white/40 rounded-lg p-4 flex flex-col items-center w-24 sm:w-24 md:w-32 lg:w-40">
                        <div>
                          {day?.date?.split("-")[2]}/{day?.date?.split("-")[1]}
                        </div>
                        <div className="p-2">
                          <img
                            src={day?.day?.condition?.icon}
                            height={60}
                            width={60}
                            alt="Weather Icon"
                          />
                        </div>
                        <div className="text-lg pt-4">
                          <div className="flex items-center">
                            <FaLongArrowAltUp />
                            <p>{day?.day?.maxtemp_c}°C</p>
                          </div>
                          <div className="flex items-center">
                            <FaLongArrowAltDown />
                            <p>{day?.day?.mintemp_c}°C</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Weather Forecast hours */}
        <div className="flex justify-center py-6">
          <div className="flex gap-3 overflow-x-auto w-11/12 md:w-2/3 lg:w-3/6 pb-2">
            {WeatherData?.forecast?.forecastday[0]?.hour.map((hour: any) => (
              <div className="flex flex-row justify-between">
                <div className="flex flex-col justify-center pt-16">
                  <div className="flex flex-row items-center justify-between">
                    <div className="bg-white/30 rounded-lg p-3 flex flex-col items-center w-24">
                      <div>{hour?.time?.split(" ")[1].split(":")[0]}:00</div>
                      <div className="py-1">
                        <img
                          src={hour?.condition?.icon}
                          alt="Weather Icon"
                          height={40}
                          width={40}
                        />
                      </div>
                      <div>
                        <p>{hour?.temp_c}°C</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Current day Weather details */}
        <div className="pt-8">
          <div className="pb-4 text-xl font-semibold">
            <h2>Weather Details</h2>
          </div>
          <dl className="flex overflow-y-auto h-64 lg:h-auto pr-2 gap-4 flex-col md:overflow-hidden md:grid md:grid-cols-2 min-[1024px]:grid-cols-3 min-[1386px]:grid min-[1386px]:grid-cols-4 lg:overflow-hidden text-black">
            <div className=" bg-white/70 p-4 rounded-xl ">
              <div className="flex items-center justify-between ">
                <div>
                  <dd>Feels Like</dd>
                  <dt className="text-left font-semibold text-xl">
                    {WeatherData?.current?.feelslike_c}°C
                  </dt>
                </div>
                <div>
                  <FaTemperatureThreeQuarters size={30} />
                </div>
              </div>
            </div>

            <div className=" bg-white/70 p-4 rounded-xl">
              <div className="flex items-center justify-between ">
                <div>
                  <dd>Wind Direction</dd>
                  <dt className="text-left font-semibold text-xl">
                    {WeatherData?.current?.wind_dir}
                  </dt>
                </div>
                <div>
                  <ImCompass size={30} />
                </div>
              </div>
            </div>

            <div className="bg-white/70 p-4 rounded-xl">
              <div className="flex items-center justify-between ">
                <div>
                  <dd>Wind Speed</dd>
                  <dt className="text-left font-semibold text-xl">
                    {WeatherData?.current?.wind_kph} km/h
                  </dt>
                </div>
                <div>
                  <LuWind size={30} />
                </div>
              </div>
            </div>

            <div className="bg-white/70 p-4 rounded-xl">
              <div className="flex items-center justify-between ">
                <div>
                  <dd>Visibility</dd>
                  <dt className="text-left font-semibold text-xl">
                    {WeatherData?.current?.vis_km} km
                  </dt>
                </div>
                <div>
                  <FaRegEye size={30} />
                </div>
              </div>
            </div>

            <div className=" bg-white/70 p-4 rounded-xl">
              <div className="flex items-center justify-between ">
                <div>
                  <dd>UV Radiation</dd>
                  <dt className="text-left font-semibold text-xl">{WeatherData?.current?.uv}</dt>
                </div>
                <div>
                  <IoSunny size={30} />
                </div>
              </div>
            </div>

            <div className=" bg-white/70 p-4 rounded-xl">
              <div className="flex items-center justify-between ">
                <div>
                  <dd>Humidity</dd>
                  <dt className="text-left font-semibold text-xl">
                    {WeatherData?.current?.humidity}
                  </dt>
                </div>
                <div>
                  <WiHumidity size={40} />
                </div>
              </div>
            </div>

            <div className=" bg-white/70 p-4 rounded-xl">
              <div className="flex items-center justify-between ">
                <div>
                  <dd>Sunrise</dd>
                  <dt className="text-left font-semibold text-xl">
                    {WeatherData?.forecast?.forecastday[0]?.astro?.sunrise}
                  </dt>
                </div>
                <div>
                  <FiSunrise size={30} />
                </div>
              </div>
            </div>

            <div className=" bg-white/70 p-4 rounded-xl">
              <div className="flex items-center justify-between ">
                <div>
                  <dd>Sunset</dd>
                  <dt className="text-left font-semibold text-xl">
                    {WeatherData?.forecast?.forecastday[0]?.astro?.sunset}
                  </dt>
                </div>
                <div>
                  <FiSunset size={30} />
                </div>
              </div>
            </div>
          </dl>
        </div>
      </div>
    </>
  );
}
