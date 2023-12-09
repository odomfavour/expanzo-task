import React from "react";
import { FaEnvelope, FaLocationDot } from "react-icons/fa6";
const ContactSection = () => {
  return (
    <div className="text-black mb-24">
      <div className="md:w-1/4 w-11/12 mx-auto">
        <p className="text-center font-extrabold text-sm">Contact</p>
        <div className="flex justify-between gap-6 text-gray-600">
          <div>
            <p className="font-normal text-sm mb-5 flex items-center gap-3">
              <FaLocationDot className="text-[#00c39c] text-lg" />
              Headquaters
            </p>
            <p className="font-light text-sm">DHO s.r.o</p>
            <p className="font-light text-sm">Borivoja 878/35</p>

            <p className="font-normal text-sm">130 00 Praha 3</p>
          </div>
          <div>
            <p className="font-normal text-sm mb-5 flex items-center gap-3">
              <FaEnvelope className="text-[#00c39c] text-lg" />
              Email
            </p>
            <p className="font-normal text-sm">info@expanzo.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
