import React from "react";
import Image from "next/image";

function Hero() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <div><h2 className=" text-[40px] md:text-[60px] text-gray-900">
        Car Rental Rental in your area
      </h2>
      <h2 className="text-[20px] text-gray-900 pr-20 mt-5">
Book the Car
      </h2>
      <button className="p-2 mt-5 bg-blue-500 text-white px-4 rounded-full
      hover:scale-105 transition-all">Explore Cars
        
      </button>
      </div>
      <div ><Image src='/audi.png'
      alt ='car'
      width={400}
      height={500}
      className="w-full object-cover align-middle"/>
      </div>
    </div>
  );
}

export default Hero;
