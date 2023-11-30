"use client";
import React from "react";
import { useState, ChangeEvent } from "react";
import { AiOutlineSearch } from "react-icons/ai";

export default function Navbar({ setData }: { setData: any }) {
  const [error, setError] = useState("");
  const [city, setCity] = useState("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    console.log("Changed city to: ", inputValue);
    if (inputValue === "") {
      setData({});
      setCity("");
    }
    setCity(inputValue);
    if (inputValue.length > 3) {
      getWeather(inputValue);
    }
  };

  const APIKEY = "53aee10655dc437a8eb212547231711";

  const getWeather = async (city: string) => {
    const url = `http://api.weatherapi.com/v1/forecast.json?key=${APIKEY}&q=${city}&days=7&aqi=yes&alerts=yes`;
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Something went wrong");
      }
      const jsonData = await response.json();
      setData(jsonData);
      console.log("data set");
      setError("");
    } catch (error) {
      setError("City not found");
      console.log(error);
    }
  };

  return (
    <>
      <div className="h-full">
        <div className="pt-10">
          <div className="flex justify-center">
            <form className="flex w-3/12 border-b-2 hover:scale-105 duration-300">
              <input
                value={city}
                type="text"
                placeholder="Search City.."
                className="w-full bg-transparent placeholder-white outline-none"
                onChange={handleChange}
              ></input>
              <div className="hover:cursor-pointer">
                <AiOutlineSearch size={20} />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
