import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { FaTemperatureThreeQuarters } from "react-icons/fa6";

export default function WeatherCurrent({ WeatherData }: { WeatherData: any }) {
  if (WeatherData) {
    console.log(WeatherData);
  }
  return (
    <>
      <div className="flex flex-col p-10">
        <div className="flex justify-between">
          <div className="flex flex-col justify-center">
            <div className="flex flex-row items-center justify-between">
              <div className="">
                <h3 className="text-3xl">Today</h3>
                <h1>date today</h1>
              </div>
              <div>
                <img
                  src={WeatherData?.current?.condition?.icon}
                  width={50}
                  height={50}
                  alt="Weather Icon"
                />
              </div>
            </div>
            <div>
              
            </div>
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
        <div className="pt-72">
          <div className="pb-4 text-xl font-semibold">
            <h2>Weather Details</h2>
          </div>
          <div className="grid grid-cols-4 gap-4 text-black">
            <div className=" bg-white/70 p-4 rounded-xl">
              <div className="flex items-center justify-evenly">
                <div className="">
                  <h3>Feels Like</h3>
                  <h3 className="text-left">
                    {WeatherData?.current?.feelslike_c}
                  </h3>
                </div>
                <div>
                  <FaTemperatureThreeQuarters size={20} />
                </div>
              </div>
            </div>

            <div className=" bg-white/70 p-4 rounded-xl">
              <div className="flex items-center justify-evenly">
                <div>
                  <h3>Wind Speed</h3>
                  <h3 className="text-left">
                    {WeatherData?.current?.feelslike_c}
                  </h3>
                </div>
                <div>
                  <FaTemperatureThreeQuarters size={20} />
                </div>
              </div>
            </div>

            <div className=" bg-white/70 p-4 rounded-xl">
              <div className="flex items-center justify-evenly">
                <div>
                  <h3>Wind Speed</h3>
                  <h3 className="text-left">
                    {WeatherData?.current?.feelslike_c}
                  </h3>
                </div>
                <div>
                  <FaTemperatureThreeQuarters size={20} />
                </div>
              </div>
            </div>

            <div className=" bg-white/70 p-4 rounded-xl">
              <div className="flex items-center justify-evenly">
                <div>
                  <h3>Wind Speed</h3>
                  <h3 className="text-left">
                    {WeatherData?.current?.feelslike_c}
                  </h3>
                </div>
                <div>
                  <FaTemperatureThreeQuarters size={20} />
                </div>
              </div>
            </div>

            <div className=" bg-white/70 p-4 rounded-xl">
              <div className="flex items-center justify-evenly">
                <div>
                  <h3>Wind Speed</h3>
                  <h3 className="text-left">
                    {WeatherData?.current?.feelslike_c}
                  </h3>
                </div>
                <div>
                  <FaTemperatureThreeQuarters size={20} />
                </div>
              </div>
            </div>

            <div className=" bg-white/70 p-4 rounded-xl">
              <div className="flex items-center justify-evenly">
                <div>
                  <h3>Wind Speed</h3>
                  <h3 className="text-left">
                    {WeatherData?.current?.feelslike_c}
                  </h3>
                </div>
                <div>
                  <FaTemperatureThreeQuarters size={20} />
                </div>
              </div>
            </div>

            <div className=" bg-white/70 p-4 rounded-xl">
              <div className="flex items-center justify-evenly">
                <div>
                  <h3>Wind Speed</h3>
                  <h3 className="text-left">
                    {WeatherData?.current?.feelslike_c}
                  </h3>
                </div>
                <div>
                  <FaTemperatureThreeQuarters size={20} />
                </div>
              </div>
            </div>

            <div className=" bg-white/70 p-4 rounded-xl">
              <div className="flex items-center justify-evenly">
                <div>
                  <h3>Wind Speed</h3>
                  <h3 className="text-left">
                    {WeatherData?.current?.feelslike_c}
                  </h3>
                </div>
                <div>
                  <FaTemperatureThreeQuarters size={20} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
