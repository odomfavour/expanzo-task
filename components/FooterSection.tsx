import React from "react";
import Image from "next/image"; // Import the Image component
import logo from "../public/logo-expanzo-black.svg";
import Link from "next/link";

const FooterSection = () => {
  return (
    <div className="bg-gray-100 py-14">
      <div className="w-8/12 mx-auto">
        <div className="flex items-center justify-between ">
          <Image src={logo} alt="Expanzo Logo" width={180} height={40} />{" "}
          <ul className="flex gap-6">
            <li>
              <Link href="#" className="text-black text-sm font-extrabold">
                CONTACTS
              </Link>
            </li>
            <li>
              <Link href="#" className="text-black text-sm font-extrabold">
                PHONES
              </Link>
            </li>
            <li>
              <Link href="#" className="text-black text-sm font-extrabold">
                TOP SEARCH
              </Link>
            </li>
            <li></li>
          </ul>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default FooterSection;
