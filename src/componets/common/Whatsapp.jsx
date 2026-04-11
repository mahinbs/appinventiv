import React from "react";
import { Link } from "react-router-dom";
import { companyDetails } from "../../constant";
const WhatsAppIcon = () => {
  return (
    <Link
      className="fixed group bottom-[1.5rem] hover:-translate-y-1 z-30 bg-white rounded-full right-[1.5rem] transition-all duration-200"
      to={`https://wa.me/${companyDetails.whatsappbox}`}
      target="_blank"
      aria-label="Contact us on WhatsApp"
    >
      <img
        src="/assets/svgs/WhatsappIcon.svg"
        alt="WhatsApp"
        className="w-[3rem] h-[3rem] sm:w-[4rem] sm:h-[4rem] rounded-full shadow-transparent shadow-large transition-all duration-300"
      />
    </Link>
  );
};

export default WhatsAppIcon;
