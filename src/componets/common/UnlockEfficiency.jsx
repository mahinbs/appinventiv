import React from "react";
import { Link } from "react-router-dom";

const UnlockEfficiency = () => {
  return (
    <section className="py-[3rem] text-primarytextcolor bg-backgroundcolor">
      <div
        data-aos-offset={-400}
        data-aos="fade-up"
        className="wrapper flex flex-col text-primarytextcolor items-center gap-5 text-center"
      >
        <div className="gradient-rounded-text-box">Optimize Operations</div>
        <h2 className="heading-2">
          Are You Prepared to Scale with Strategic Intelligence?
        </h2>
        <p className="desc max-w-[40rem] text-center">
          We engineer specialized systems that grow with your organization. 
          Discover how our technical depth and innovative frameworks can 
          empower your market presence and ensure a resilient digital future.
        </p>
        <Link to="/contact-us" className="primary-btn mt-3">
          Contact Us
        </Link>
      </div>
    </section>
  );
};

export default UnlockEfficiency;
