import { usePathname } from "next/navigation";
import Link from "next/link";
import React from "react";
import { FaBars } from "react-icons/fa6";
import { FaPen } from "react-icons/fa";
import { BsFillPersonFill } from "react-icons/bs";
import Image from "next/image"; // Import the Image component
import logo from "../public/logo-expanzo.svg";

const Header = () => {
  const pathname = usePathname();
  return (
    <div className="py-2 bg-[#139577]">
      <div className="w-11/12 mx-auto">
        <div className="flex justify-between">
          <ul className="flex items-center gap-4">
            <li>
              <FaBars className="text-white text-2xl" />
            </li>
            <li>
              <Link href="/" className="text-white text-xs">
                DASHBOARD
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-white text-xs">
                CONTACT
              </Link>
            </li>
          </ul>
          {pathname !== "/" && (
            <div>
              <Image src={logo} alt="Expanzo Logo" width={80} height={100} />{" "}
            </div>
          )}

          <ul className="flex gap-2">
            <li>
              <Link
                href="#"
                className="flex gap-3 items-center text-gray-50 text-xs"
              >
                <div className="rounded-full bg-[#00c39c] h-[32px] w-[32px] flex items-center justify-center">
                  <BsFillPersonFill className="text-gray-50  text-sm" />
                </div>
                LOGIN
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="flex gap-3 items-center text-gray-50 text-xs"
              >
                <div className="rounded-full bg-[#00c39c] h-[32px] w-[32px] flex items-center justify-center">
                  <FaPen className="text-gray-50 text-sm" />
                </div>
                REGISTRATION
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
