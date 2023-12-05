"use client";
import React from "react";
import Navbar from "../components/Navbar/Navbar";
import WeatherCurrent from "../components/WeatherCurrent";
import { useState } from "react";

export default function page() {
  const [data, setData] = useState({});
  return (
    <>
      <div className="">
        <div>
          <Navbar setData={setData} />
          <WeatherCurrent WeatherData={data} />
        </div>
      </div>
    </>
  );
}
