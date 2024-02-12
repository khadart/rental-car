import { getStoreLocations } from "@/services";
import React, { useEffect, useState } from "react";

function Form() {
const [storeLocation,setStoreLocation]= useState<any>()
const [storeData,setStoreData]=useState({
location:'',
pickupDate:'',
dropoffDate:'',
pickupTime:'',
dropoffTime:'',
contactNumber:''

})
useEffect(()=>{
    getStoreLocation_()
},[])
const getStoreLocation_ = async () => {
    const responce:any = await getStoreLocations();
    console.log("aaaa",responce)
     setStoreLocation(responce?.storeLocations        )
}

const handleChange =(e:any)=>{
    setStoreData({
        ...storeData,
        [e.target.name]:e.target.value
})
}

const handleSave=()=>{
    console.log(storeData)
}
  return (
    <div>
      <div className="flex flex-col w-auto mb-5 mx-5 shadow border-2 mt-2">
        <label className="text-gray-500">PickUp Location</label>
        <select className="select select-bordered w-auto" name='location ' onChange={handleChange}>
        onChange={handleChange}
          <option disabled selected>
            Who shot first?
          </option>
          {storeLocation&&storeLocation.map((loc:any,index:number)=>(
            <option>
                {loc?.address}
            </option>
          )
          )}
       {}
        </select>
      </div>
      <div className="flex  gap-5 mb-5 px-5  ">
        <div className="flex flex-col w-full shadow border-2">
          <label className="text-gray-400">PickUp Date</label>
          <input
            type="date"
            onChange={handleChange}
            placeholder="Type here"
            name='pickupDate'
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="flex flex-col w-full shadow border-2">
          <label className="text-gray-400">Dropoff Date</label>
          <input
            type="date"
            onChange={handleChange}
            placeholder="Type here"
            name='dropoffDate'
            className="input input-bordered w-full max-w-xs"
          />
        </div>
      </div>
      <div className="flex gap-5  px-5 ">
        <div className="flex flex-col w-full mb-5 shadow border-2">
          <label className="text-gray-500">PickUp Time</label>
          <input
            type="time"
            onChange={handleChange}
            placeholder="Type here"
            name='pickupTime'
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="flex flex-col w-full mb-5 shadow border-2 ">
          <label className="text-gray-500">DropUp Time</label>
          <input
            type="time"
            onChange={handleChange}
            placeholder="Type here"
            name='dropoffTime'
            className="input input-bordered w-full max-w-xs"
          />
        </div>
      </div>
      <div className="flex flex-col w-auto   mb-5 mx-5 shadow border-2 ">
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
      <button className="btn  bg-red-500 text-white   hover:bg-red-800    my-4 rounded-md px-4 ">Close</button>
        <button className="btn bg-blue-500 text-white   hover:bg-blue-800 px-5  mx-6 my-4 rounded-md   " onClick={handleSave}>Save</button>
        </div>
        
    </div>
  );
}

export default Form;
