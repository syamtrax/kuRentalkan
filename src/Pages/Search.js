import Card from "../Components/Card/SearchCard";
import Navbar from "../Components/Common/Navbar";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
const Search = () => {
  const location = useLocation();

  let isLogged = location.state ? location.state.isLogged : "";

  useEffect(() => {
    console.log(isLogged);
  }, [isLogged]);
  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center">
        <div className="font-nunito h-screen  container mt-36  flex">
          <div className="  w-1/5 border h-4/6  shadow-lg rounded-lg">
            <div className="flex flex-col items-center rounded-t-lg py-2 bg-blue-700">
              <h1 className="text-white font-bold text-xl">Filter</h1>
            </div>
            <div className=""></div>
          </div>
          <div className="h-1/2 ml-12 grid grid-cols-4 ">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
