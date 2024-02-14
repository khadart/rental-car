import { BookCreateFlagContext } from "@/context/BookCreateFlagContext";
import {  createCarBooking, getStoreLocations } from "@/services";
import { Console } from "console";
import React, { useContext, useEffect, useState } from "react";

function Form({car}:any) {
const [storeLocation,setStoreLocation]= useState<any>()
const {showToastMsg,setShowToastMsg}=useContext(BookCreateFlagContext)
const [storeData,setStoreData]=useState({
    userName:'khadar',
location:'',
pickUpDate:'',
dropOffDate:'',
pickUpTime:'',
dropOffTime:'',
contactNumber:'',
carId:''

})
useEffect(()=>{
    if(car){
    setStoreData({
        ...storeData,
        carId:car.id
})
    }
},[car])

useEffect(()=>{
    getStoreLocation_()
},[])


const getStoreLocation_ = async () => {
    const responce:any = await getStoreLocations();
     setStoreLocation(responce?.storeLocations)
}

const handleChange =(e:any)=>{
    setStoreData({
        ...storeData,
        [e.target.name]:e.target.value
})
}

const handleSave=async ()=>{
   const result=await createCarBooking(storeData)
    if(result){
       
        setShowToastMsg(true)
    }
}
  return (
    <div>
      <div className="flex flex-col w-auto mb-5 mx-5  mt-2">
        <label className="text-gray-500">PickUp Location</label>
        <select className="select select-bordered w-auto" name='location' onChange={handleChange}>
        onChange={handleChange}
          <option disabled selected>
            Who shot first?
          </option>
          {storeLocation&&storeLocation.map((loc:any,index:number)=>(
            <option  key={index}>
                {loc?.address}
            </option>
          )
          )}
       {}
        </select>
      </div>
      <div className="flex  gap-5 mb-5 px-5  ">
        <div className="flex flex-col w-full">
          <label className="text-gray-400">PickUp Date</label>
          <input
            type="date"
            onChange={handleChange}
            placeholder="Type here"
            name='pickUpDate'
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="flex flex-col w-full">
          <label className="text-gray-400">Dropoff Date</label>
          <input
            type="date"
            onChange={handleChange}
            placeholder="Type here"
            name='dropOffDate'
            className="input input-bordered w-full max-w-xs"
          />
        </div>
      </div>
      <div className="flex gap-5  px-5 ">
        <div className="flex flex-col w-full mb-5">
          <label className="text-gray-500">PickUp Time</label>
          <input
            type="time"
            onChange={handleChange}
            placeholder="Type here"
            name='pickUpTime'
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="flex flex-col w-full mb-5  ">
          <label className="text-gray-500">DropUp Time</label>
          <input
            type="time"
            onChange={handleChange}
            placeholder="Type here"
            name='dropOffTime'
            className="input input-bordered w-full max-w-xs"
          />
        </div>
      </div>
      <div className="flex flex-col w-auto   mb-5 mx-5 ">
        <label className="text-gray-500">Contact Number</label>
        <input
          type="Text"
          onChange={handleChange}
          placeholder="Type Here"
          name='contactNumber'
          className="input input-bordered  input-primary w-auto  mb-1"
        />
      </div>
      <div className=" flex justify-end modal-action">
      <form  method="dialog">
       
      <button className="btn  bg-red-500 text-white   hover:bg-red-800    my-4 px-4 ">Close</button>
        <button className="btn bg-blue-500 text-white   hover:bg-blue-800 px-5  mx-6 my-4   "onClick={handleSave} >Save</button>
      </form>
        </div>
        
    </div>
  );
}

export default Form;
