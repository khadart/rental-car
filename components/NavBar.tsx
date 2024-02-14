import React from "react";
import Image from "next/image";
import { UserButton } from "@clerk/nextjs";
function NavBar() {
  return (
    <div className="flex items-center justify-between p-0.5 shadow-md border-b-[1px]  text-gray-900 ">
      <Image src="/car.png" alt="logo" width={80} height={80} />
      <div className=" hidden md:flex gap-5" >
        <h2 className="hover:bg-blue-500
        px-3 cursor-pointer
        p-2 rounded-full hover:text-white">Home</h2>
        <h2 className="hover:bg-blue-500
        px-3 cursor-pointer
        p-2 rounded-full hover:text-white">History</h2>
        <h2 className="hover:bg-blue-500
        px-3 cursor-pointer
        p-2 rounded-full hover:text-white">Contact Us</h2>
      </div>
      <UserButton></UserButton>
    </div>
  );
}

export default NavBar;
