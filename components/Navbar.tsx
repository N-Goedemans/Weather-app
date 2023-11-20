"use client";
import { AiOutlineSearch } from "react-icons/ai";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [data, setData] = useState(null);
  const [city, setCity] = useState("");
  const [error, setError] = useState("");

  const APIKEY = "53aee10655dc437a8eb212547231711";
  const url = `http://api.weatherapi.com/v1/forecast.json?key=${APIKEY}&q=London&days=7&aqi=yes&alerts=yes`;

  useEffect(() => {
    const getWeather = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Something went wrong");
        }
        const data = await response.json();
        setData(data);
        setError("");
      } catch (error) {
        setError("City not found");
      }
    };
    getWeather();
    if (data) {
      console.log(data.location.name);
    }
  });

  return (
    <div className=" bg-gradient-to-r from-blue-500 to-blue-300">
      <div className=" bg-white/20 py-10">
        <div className="flex justify-center">
          <form className="flex w-1/6 border-b-2 hover:scale-105 duration-300">
            <input
              type="text"
              placeholder="Search City.."
              className="w-full bg-transparent placeholder-white outline-none"
            ></input>
            <div className="hover:cursor-pointer">
              <AiOutlineSearch size={25} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
