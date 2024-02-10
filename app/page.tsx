"use client";
import CarsFiltersOption from "@/components/Home/CarsFiltersOption";
import CarsList from "@/components/Home/CarsList";
import Hero from "@/components/Home/Hero";
import SearchInput from "@/components/Home/SearchInput";
import { getCarsList } from "@/services";
import { useEffect, useState } from "react";

export default function Home() {
  const [carsList,setCarsList]=useState<any>([])
  const [carsOrgList,setCarsOrgList]=useState<any>([])

  useEffect(()=>{
    getCarsList_()
  },[])
  const getCarsList_ = async()=>{
    const result:any= await getCarsList()
    console.log("result",result)
    setCarsList(result?.carLists)
    setCarsOrgList(result?.carLists)
  }
useEffect
  const filterCarList=(brand:string)=>{
    const filterList =carsOrgList.filter((item:any)=> item.brand===brand)
setCarsList(filterList)
  }

  const orderCarList =(order:any)=>{
    const sortedData = [...carsOrgList].sort((a,b)=>
    order==-1?a.price-b.price:b.price-a.price)
    setCarsList(sortedData)
  }
    return (
    <div className="p-5 sm:px-10 md:px-20">
      <Hero/>
      <SearchInput/>
      <CarsFiltersOption carsOrgList={carsOrgList}
      setBarnd={(value:any)=>filterCarList(value)}
      orderCarList={(value:any)=>orderCarList(value)}/>
      <CarsList carsList={carsList}/>
    </div>
  );
}
