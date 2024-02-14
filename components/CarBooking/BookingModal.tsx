import React from "react";
import CarCard from "../Home/CarCard";
import Form from "./Form";

function BookingModal({ selectedCar }: any) {
  return (
    <div className="modal-box w-screen max-w-5xl rounded-2xl   bg-gray-50  ">
      <div className="border-b-[1px] pb-2">
        <h3 className="text-[30px] font-light text-gray-500">
          Rent a car Now!
        </h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div>
          <CarCard car={selectedCar} />
        </div>
        <div>
          <Form car={selectedCar}/>
        </div>
      </div>
    </div>
  );
}

export default BookingModal;
