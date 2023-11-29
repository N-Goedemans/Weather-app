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
  if (WeatherData) {
    console.log(WeatherData);
  }
  return (
    <>
      <div className="flex flex-col p-10 px-40">
        <div className="flex justify-evenly">
          <div className="flex justify-between">
            <div className="flex flex-col justify-center pt-16">
              <div className="flex flex-row items-center justify-between">
                <div>
                  <h3 className="text-3xl">Today</h3>
                  <h1>date today</h1>
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
          <div>
            <div className="grid grid-cols-3 gap-4">
              {WeatherData?.forecast?.forecastday.map((day: any) => (
                <div className="flex flex-row justify-between">
                  <div className="flex flex-col justify-center pt-16">
                    <div className="flex flex-row items-center justify-between">
                      <div className="bg-white/40 rounded-lg p-4 flex flex-col items-center w-36">
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
        <div className="flex justify-center py-6">
          <div className="flex gap-3 overflow-x-auto w-2/4 pb-4">
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
        <div className="pt-8">
          <div className="pb-4 text-xl font-semibold">
            <h2>Weather Details</h2>
          </div>
          <div className="grid grid-cols-4 gap-4 text-black">
            <div className=" bg-white/70 p-4 rounded-xl">
              <div className="flex items-center justify-between px-8">
                <div className="">
                  <h3 className="font-semibold">Feels Like</h3>
                  <h3 className="text-left">
                    {WeatherData?.current?.feelslike_c}°C
                  </h3>
                </div>
                <div>
                  <FaTemperatureThreeQuarters size={30} />
                </div>
              </div>
            </div>

            <div className=" bg-white/70 p-4 rounded-xl">
              <div className="flex items-center justify-between px-8">
                <div>
                  <h3 className="font-semibold">Wind Direction</h3>
                  <h3 className="text-left">
                    {WeatherData?.current?.wind_dir}
                  </h3>
                </div>
                <div>
                  <ImCompass size={30} />
                </div>
              </div>
            </div>

            <div className=" bg-white/70 p-4 rounded-xl">
              <div className="flex items-center justify-between px-8">
                <div>
                  <h3 className="font-semibold">Wind Speed</h3>
                  <h3 className="text-left">
                    {WeatherData?.current?.wind_kph} km/h
                  </h3>
                </div>
                <div>
                  <LuWind size={30} />
                </div>
              </div>
            </div>

            <div className=" bg-white/70 p-4 rounded-xl">
              <div className="flex items-center justify-between px-8">
                <div>
                  <h3 className="font-semibold">Visibility</h3>
                  <h3 className="text-left">
                    {WeatherData?.current?.vis_km} km
                  </h3>
                </div>
                <div>
                  <FaRegEye size={30} />
                </div>
              </div>
            </div>

            <div className=" bg-white/70 p-4 rounded-xl">
              <div className="flex items-center justify-between px-8">
                <div>
                  <h3 className="font-semibold">UV Radiation</h3>
                  <h3 className="text-left">{WeatherData?.current?.uv}</h3>
                </div>
                <div>
                  <IoSunny size={30} />
                </div>
              </div>
            </div>

            <div className=" bg-white/70 p-4 rounded-xl">
              <div className="flex items-center justify-between px-8">
                <div>
                  <h3 className="font-semibold">Humidity</h3>
                  <h3 className="text-left">
                    {WeatherData?.current?.humidity}
                  </h3>
                </div>
                <div>
                  <WiHumidity size={40} />
                </div>
              </div>
            </div>

            <div className=" bg-white/70 p-4 rounded-xl">
              <div className="flex items-center justify-between px-8">
                <div>
                  <h3 className="font-semibold">Sunrise</h3>
                  <h3 className="text-left">
                    {WeatherData?.forecast?.forecastday[0]?.astro?.sunrise}
                  </h3>
                </div>
                <div>
                  <FiSunrise size={30} />
                </div>
              </div>
            </div>

            <div className=" bg-white/70 p-4 rounded-xl">
              <div className="flex items-center justify-between px-8">
                <div>
                  <h3 className="font-semibold">Sunset</h3>
                  <h3 className="text-left">
                    {WeatherData?.forecast?.forecastday[0]?.astro?.sunset}
                  </h3>
                </div>
                <div>
                  <FiSunset size={30} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
