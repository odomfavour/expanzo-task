import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { FaBars, FaX } from "react-icons/fa6";
import { FaPen } from "react-icons/fa";
import { BsFillPersonFill } from "react-icons/bs";
import Image from "next/image"; // Import the Image component
import logo from "../public/logo-expanzo.svg";
import logo1 from "../public/logo-expanzo-black.svg";

const MobileMenu = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  return (
    <div
      className={`mobile-menu fixed top-0 left-0 right-0 bottom-0 bg-white w-2/3 py-3 pl-5 ${
        isOpen ? "" : "hidden"
      }`}
    >
      <div className="flex justify-between items-center pr-3">
        <div>
          <Image src={logo1} alt="Expanzo Logo" width={80} height={100} />{" "}
        </div>
        <button className="" onClick={onClose}>
          <FaX className="text-lg text-red-700" />
        </button>
      </div>
      <ul className="text-black py-8 flex flex-col gap-4 mt-8">
        <li>
          <Link href="/" className="text-base">
            DASHBOARD
          </Link>
        </li>
        <li>
          <Link href="/contact" className="text-base">
            CONTACT
          </Link>
        </li>
        <li>
          <Link href="#" className="flex gap-3 items-center text-base">
            LOGIN
          </Link>
        </li>
        <li>
          <Link href="#" className="flex gap-3 items-centertext-base">
            REGISTRATION
          </Link>
        </li>
      </ul>
    </div>
  );
};

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <section>
      <div className="py-2 bg-[#139577]">
        <div className="w-11/12 mx-auto">
          <div className="flex md:flex-row flex-col-reverse gap-6 justify-between">
            <ul className="flex items-center gap-4">
              <li>
                <FaBars
                  className="text-white text-2xl"
                  onClick={toggleMobileMenu}
                />
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

            <ul className="md:flex gap-2 hidden">
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
      <MobileMenu isOpen={isMobileMenuOpen} onClose={closeMobileMenu} />
    </section>
  );
};

export default Header;
