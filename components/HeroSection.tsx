import React from "react";
import Image from "next/image"; // Import the Image component
import logo from "../public/logo-expanzo-black.svg";
const HeroSection = () => {
  return (
    <div className="mb-24">
      <div className="text-center flex justify-center items-center text-black mb-6">
        {/* <p className="text-4xl font-semibold">Expanzo</p>
        <p className="capitalize font-normal">Expand Your Business</p> */}
        <Image src={logo} alt="Expanzo Logo" width={200} height={100} />{" "}
        {/* Adjust width and height according to your design */}
      </div>
      <div className="flex items-center justify-center">
        <div className="flex gap-6 items-center">
          <button className="py-3 px-10 border-b-2 border-green-500 text-black font-semibold">
            All
          </button>
          <button className="p-3 text-black border-b-2 border-transparent hover:border-green-500 font-semibold">
            Companies
          </button>
          <button className="p-3 text-black border-b-2 border-transparent hover:border-green-500 font-semibold">
            Phones
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
