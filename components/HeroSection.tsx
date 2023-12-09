import React from "react";
import Image from "next/image";
import logo from "../public/logo-expanzo-black.svg";
const HeroSection = () => {
  return (
    <section className="mb-24">
      <div className="text-center flex justify-center items-center text-black mb-6">
        <Image src={logo} alt="Expanzo Logo" width={200} height={100} />{" "}
      </div>
      <div className="flex items-center justify-center">
        <div className="flex gap-6 items-center">
          <button className="py-3 md:px-10 px-3 border-b-2 border-green-500 text-black font-semibold">
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
    </section>
  );
};

export default HeroSection;
