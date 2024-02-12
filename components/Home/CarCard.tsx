import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FaGasPump } from "react-icons/fa";
import { MdAirlineSeatReclineNormal } from "react-icons/md";
import { PiSteeringWheelFill } from "react-icons/pi";

function CarCard(props: any) {
    console.log("ccc",props)
  const [car, setCar] = useState(props.car);
  useEffect (()=>{
    if(props.car){
        setCar(props.car)
    }
  })
  return (
    <div className="group  bg-gray-100 p-2 w-[250px]  sm:p-1 rounded-2xl m-1 sm:m-2   
     hover:bg-white hover:border-[1px] 
    cursor-pointer duration-100 border-blue-500">
      <h2 className="text-[20px] font-medium mb-3">{car?.name}</h2>
      <h2 className="text-[28px] font-bold mb-2">
        <span className="text-[15px] font-light">$</span>
        {car?.price}
        <span className="text-[15px] font-light">/day</span>
        <Image
          src={car?.image?.url}
          alt={car?.name}
          height={220}
          width={220}
          className="w-[200px] h-[150px] mb-3 object-contain"
        />
        <div className="flex justify-around  group-hover:hidden">
          <div className="text-center text-gray-500">
            <PiSteeringWheelFill className="w-full text-[22px] mb-2" />
            <h2 className="line-clamp-5 text-[14px] font-light">{car?.carType}</h2>
          </div>
          <div className="text-center text-gray-500">
            <MdAirlineSeatReclineNormal className="w-full text-[22px] mb-2" />
            <h2 className="line-clamp-5 text-[14px] font-light">
              {car?.seat} Seat
            </h2>
          </div>
          <div className="text-center text-gray-500">
            <FaGasPump className="w-full text-[22px] mb-2" />
            <h2 className="line-clamp-5 text-[14px] font-light">
              {car?.carAvg} MPG
            </h2>
          </div>
        </div>
        <button className=" hidden group-hover:flex  bg-gradient-to-r from-blue-400 to-blue-700 p-2 rounded-lg  text-white w-full px-5 justify-between 
    cursor-pointer duration-100 border-gray-500 
    ">Rent Now
    </button>
      </h2>
    </div>
  );
}

export default CarCard;
