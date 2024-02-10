import React, { useEffect, useState } from "react";

function CarsFiltersOption({carsOrgList,setBarnd,orderCarList}:any) {
    const [brandList , setBarndList]=useState<any>()
    console.log('a',carsOrgList)
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
        console.log('brand',BrandSet)
        setBarndList(Array.from(BrandSet))
    }
  return (
    <div className="mt-10 flex items-center justify-between">
      <div>
        <h2 className="text-[30px] font-bold">Cars Catalog</h2>
        <h2>Explore the cars you might like</h2>
      </div>
      <div className="flex gap-5 ">
      <select className="select select-bordered  rounded-md shadow  w-full max-w-xs" 
      onChange={(e)=>orderCarList(e.target.value)}>
  <option disabled selected>Price</option>
  <option value={-1}>Min to Max</option>
  <option value={1}>Max to Min</option>
  </select>
  <select className="select select-bordered rounded-lg shadow  w-full md:block max-w-xs hidden"
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
