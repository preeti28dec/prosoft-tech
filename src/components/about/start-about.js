import React from "react";
import AboutBanner from "../../image/about-banner.webp";

function StartAbout() {
  return (
    <div className="bg-[#eaeff0] py-10 md:py-20">
      <div className="flex flex-col md:flex-row items-center justify-between px-4 md:px-8">
        {/* Left Section */}
        <div className="text-center md:text-left mb-8 md:mb-0 md:w-1/2 lg:w-6/12">
          <h1 className="text-3xl font-semibold text-gray-800 mb-4 md:text-4xl lg:text-6xl">
            Who We Are?
          </h1>
          <div className="mx-2 font-semibold">
            CS Soft Solutions Pvt. Ltd is a growth-driven IT solutions provider,
            focusing on bringing digital transformations for businesses at every
            scale. We are first movers who believe in adding proficiency and
            innovation in every solution we offer. With more than a decade of
            being a IT leader, we thrive to build solutions that bring results
            and impact.
          </div>
        </div>

        {/* Right Section */}
        <div className="relative md:w-1/2 lg:w-6/12 flex justify-center ">
          <img src={AboutBanner} alt="banner-image" />
        </div>
      </div>
    </div>
  );
}

export default StartAbout;
