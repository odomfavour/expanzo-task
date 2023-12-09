import React, { useState } from "react";
import Image from "next/image";
import logo from "../public/logo-expanzo-black.svg";
const HeroSection = () => {
  const [activeTab, setActiveTab] = useState("all");
  return (
    <section className="mb-24">
      <div className="text-center flex justify-center items-center text-black mb-6">
        <Image src={logo} alt="Expanzo Logo" width={200} height={100} />{" "}
      </div>
      <div className="flex items-center justify-center">
        <div className="flex gap-6 items-center">
          <button
            className={`${
              activeTab === "all" ? "border-green-500" : "border-transparent"
            } hover:border-green-500 py-3 md:px-10 px-3 border-b-2 text-black font-semibold`}
            onClick={() => setActiveTab("all")}
          >
            All
          </button>
          <button
            className={`${
              activeTab === "companies"
                ? "border-green-500"
                : "border-transparent"
            } hover:border-green-500 py-3 md:px-10 px-3 border-b-2 text-black font-semibold`}
            onClick={() => setActiveTab("companies")}
          >
            Companies
          </button>
          <button
            className={`${
              activeTab === "phones" ? "border-green-500" : "border-transparent"
            } hover:border-green-500 py-3 md:px-10 px-3 border-b-2 text-black font-semibold`}
            onClick={() => setActiveTab("phones")}
          >
            Phones
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
