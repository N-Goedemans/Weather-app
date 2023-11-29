"use client";
import React from "react";
import Navbar from "../components/Navbar/Navbar";
import WeatherCurrent from "../components/WeatherCurrent";
import { useState } from "react";

export default function page() {
  const [data, setData] = useState({});
  return (
    <>
      <div className="h-screen bg-gradient-to-r from-blue-500 to-blue-200">
        <div className="w-full h-full">
          <Navbar setData={setData} />
          <WeatherCurrent WeatherData={data} />
        </div>
      </div>
    </>
  );
}
