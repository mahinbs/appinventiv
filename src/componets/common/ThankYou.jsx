import React from "react";
import { Link } from "react-router-dom";
// import { companyDetails, logoImg, routes } from "../constant";
// import { BsFacebook, BsLinkedin, BsTwitter, BsYoutube } from "react-icons/bs";
// import { companyDetails, logoImg, routes } from "../../constant";

const Thankyou = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center bg-primary/20">
      <div className="wrapper h-full flex flex-col items-center py-[8rem] gap-3 text-[#2e2e45] text-center">
        <h1 className="heading-1">Thank You!</h1>
        <p className="desc !font-semibold">
          We have received your message and will get back to you as soon as
          possible.
        </p>
        <Link to="/" className="primary-btn w-fit mt-4 text-black">
          Home
        </Link>
      </div>
    </div>
  );
};

export default Thankyou;
