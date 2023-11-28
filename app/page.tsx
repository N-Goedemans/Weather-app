"use client";
import React from "react";
import Navbar from "../components/Navbar/Navbar";
import WeatherCurrent from "../components/WeatherCurrent";
import {useState} from "react";



export default function page() {
  const [data, setData] = useState({});
  return (
    <>
      <Navbar setData={setData}/>
      <div className="h-screen bg-gradient-to-r from-blue-500 to-blue-300">
        <div className="w-full h-full">
          <WeatherCurrent WeatherData={data}/>
        </div>
      </div>
    </>
  );
}
