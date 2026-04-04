import React from "react";
import { Link } from "react-router-dom";
import Contact from "../../componets/landingPages/Contact";
import aboutUsImg from "../../assets/images/aboutuscontent.jpg";
import WhyChooseUs from "../../componets/common/WhyChooseUs";
import ReactPlayer from "react-player";
import { bannerVid } from "../../constant";
import OurServices from "../../componets/website/OurServices";
import EndlessOpportunitiesSection from "../../componets/common/EndlessOpportunitiesSection";
import UnlockEfficiency from "../../componets/common/UnlockEfficiency";
import Testimonials from "../../componets/common/Testimonials";
import Faqs from "../../componets/common/Faqs";
import Credibility from "../../componets/common/Credibility";
import CommonProject from "../../componets/website/CommonProject";

const Home = () => {
  return (
    <>
      <div id="banner" className="h-screen relative">
        <ReactPlayer
          url={bannerVid}
          loop
          muted
          width="100%"
          height="100%"
          playsinline
          playing
          className="absolute"
        />
        <div className="bg-gradient-to-r to-black/70 from-transparent absolute w-full h-full"></div>
        <div className="pt-[3rem] wrapper flex items-center h-full">
          <div
            data-aos="fade-up"
            className="relative z-10 px-6 justify-center h-full text-white flex flex-col items-center gap-5 text-center md:max-w-[60rem] mx-auto"
          >
            <div className="rounded-text-box border-white/70 font-medium">
              IT Services
            </div>
            <h1 className="heading-1">
              Engineering the Next Generation of Digital Systems with <span className="text-primary">AI</span>
            </h1>
            <p className="desc">
              We engineer resilient digital frameworks that adapt to the
              demands of modern industry. Our focus is on creating high-velocity
              systems that bridge the gap between technical complexity and
              operational clarity, ensuring your business stays ahead in a
              rapidly shifting technical landscape.
            </p>
            <Link to="/contact-us" className="primary-btn mt-2">
              Get Started
            </Link>
          </div>
        </div>
      </div>

      <section className="py-[3rem] bg-backgroundcolor text-primarytextcolor wrapper">
        <div
          data-aos="fade-right"
          className="gradient-rounded-text-box mx-auto lg:mx-0"
        >
          About Us
        </div>
        <div className="flex flex-col-reverse items-center lg:grid grid-cols-2 gap-10 mt-7">
          <div data-aos="fade-right" className="flex h-full flex-col gap-7">
            <div className="flex flex-col gap-7 text-center lg:text-start">
              <h2 className="heading-2">
                Scaling Efficiency through Intelligent Systems
              </h2>
              <p className="desc">
                At Appinventiv, we merge deep technical expertise with
                strategic innovation to redefine your digital potential. We
                specialize in engineering premium software ecosystems that
                transform complex operational challenges into streamlined
                growth. From specialized mobile platforms to large-scale cloud
                architectures, we architect the future of your business with
                precision and purpose.
              </p>
            </div>
            <div className="flex gap-5 mt-4 justify-center lg:justify-start">
              <Link to="/contact-us" className="primary-btn">
                Contact Us
              </Link>
              <Link to="/services" className="secondary-btn">
                Our Services
              </Link>
            </div>
          </div>
          <div
            data-aos="fade-left"
            className="h-full max-h-[300px] max-w-[400px] lg:max-w-full  lg:max-h-[382px] "
          >
            <img
              src={aboutUsImg}
              className=" h-full rounded-lg w-full  mx-auto object-cover"
              alt=""
            />
          </div>
        </div>
      </section>
      <OurServices length={3} />
      <section
        // data-aos-offset={-400}
        // data-aos-anchor-placement="top-bottom"
        // data-aos-anchor="selector"
        className="py-[3rem] bg-[#333333] text-white"
      >
        <div
          data-aos-offset={-400}
          // data-aos-anchor-placement="bottom-center"
          data-aos="fade-up"
          className="wrapper text-center flex flex-col gap-3"
        >
          <div className="gradient-rounded-text-box mx-auto mb-4">
            Who We Are
          </div>
          <h1 className="heading-2 bg-gradient-to-r from-[#7186FF] max-w-[50rem] mx-auto to-primary bg-clip-text text-transparent">
            Enterprise-Grade Digital Solutions Built for the Modern Era
          </h1>
          <p className="desc max-w-[50rem] mx-auto">
            We recognize that your digital infrastructure is the primary touchpoint
            for your global audience. At Appinventiv, we go beyond standard 
            development to build high-performance systems integrated with 
            intelligent analytics and automated workflows. Our focus is on 
            delivering a robust, secure, and scalable foundation that not only
            represents your brand but actively accelerates your market 
            penetration and operational velocity.
          </p>
        </div>
      </section>
      <CommonProject />
      {/* <Faqs /> */}
      <WhyChooseUs />
      <UnlockEfficiency />
      <Testimonials />
      <Credibility />
      <Faqs />
      {/* <EndlessOpportunitiesSection /> */}
      <div>
        <Contact />
      </div>
    </>
  );
};

export default Home;
