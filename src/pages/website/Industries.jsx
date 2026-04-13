import React from "react";
import Banner from "../../componets/website/Banner";
import { industriesWeServe } from "../../constant";

const industryImageByTitle = {
  Healthcare:
    "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1400&q=80",
  Fintech:
    "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=1400&q=80",
  "E-commerce":
    "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1400&q=80",
  Education:
    "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1400&q=80",
  Logistics:
    "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1400&q=80",
  "Real Estate":
    "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1400&q=80",
  "Travel and Hospitality":
    "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1400&q=80",
  "Media and Entertainment":
    "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1400&q=80",
};

const Industries = () => {
  return (
    <>
      <Banner page="Industries" />
      <section className="py-[4rem] text-primarytextcolor bg-backgroundcolor/40">
        <div className="wrapper">
          <div className="text-center">
            <div className="gradient-rounded-text-box mx-auto mb-4">
              Industries
            </div>
            <h2 className="heading-2">Industries We Provide Services To</h2>
            <p className="desc max-w-[44rem] mx-auto mt-4">
              We engineer specialized digital ecosystems for diverse domains,
              combining industry context with modern technology architecture.
            </p>
          </div>
        </div>

        <div className="wrapper mt-12">
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {industriesWeServe.map((industry, index) => (
            <div
              key={industry.id}
              className={`group relative rounded-2xl overflow-hidden border border-primary/15 bg-white shadow-sm`}
            >
              <div className="relative h-[220px] overflow-hidden">
                <img
                  src={industryImageByTitle[industry.title]}
                  alt={industry.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                <p className="absolute top-4 left-4 text-xs font-semibold tracking-[0.2em] text-white/90">
                  INDUSTRY {String(industry.id).padStart(2, "0")}
                </p>
              </div>
              <div className="p-6">
                <h3 className="text-xl lg:text-2xl font-semibold">
                  {industry.title}
                </h3>
                <p className="desc mt-3 leading-7">{industry.description}</p>
                <div className="mt-5 h-[2px] w-12 bg-primary/60 group-hover:w-24 transition-all duration-300" />
              </div>
            </div>
          ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Industries;
