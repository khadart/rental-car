import React, { useEffect, useState } from "react";

function CarsFiltersOption({carsOrgList,setBarnd,orderCarList}:any) {
    const [brandList , setBarndList]=useState<any>()
    const BrandSet = new Set()
    useEffect(()=>{
if(carsOrgList){
    filterCarList()
}
    },[carsOrgList])
    const filterCarList =()=>{
        carsOrgList.forEach((element:any )=> {
            BrandSet.add(element.brand)
        });
        setBarndList(Array.from(BrandSet))
    }
  return (
    <div className="mt-10 flex items-center justify-between">
      <div>
        <h2 className="text-[30px] font-bold text-gray-900">Cars Catalog</h2>
        <h2  className="text-gray-600">Explore the cars you might like</h2>
      </div>
      <div className="flex gap-5 ">
      <select className="select select-bordered  shadow  w-full max-w-xs  bg-inherit text-gray-900 " 
      onChange={(e)=>orderCarList(e.target.value)}>
  <option disabled selected>Price</option>
  <option value={-1}>Min to Max</option>
  <option value={1}>Max to Min</option>
  </select>
  <select className="select select-bordered shadow  w-full md:block max-w-xs hidden bg-inherit  text-gray-900 "
    onChange={(e)=>setBarnd(e.target.value)}>
  <option disabled selected>Select Car</option>
  {brandList?.map((brand:string,index:number)=>(
  <option key={index}>{brand}</option>))}
</select>
      </div>
    </div>
  );
}

export default CarsFiltersOption;
