import React from "react";
import AboutBanner from "../../image/about-banner.webp";

function StartAbout() {
  return (
    <div className="bg-[#ececff] py-10 md:py-20 mt-16">
      <div className="flex flex-col md:flex-row items-center justify-between px-4 md:px-8">
        {/* Left Section */}
        <div className="text-center md:text-left mb-8 md:mb-0 md:w-1/2 lg:w-6/12">
          <h1 className="text-3xl font-semibold text-gray-800 mb-4 md:text-4xl lg:text-6xl">
            Our Story
          </h1>
          <div className="w-[85%]">
            We are a recognized leader in management and IT solutions, offering
            high-impact services for complex projects. With end-to-end
            capabilities and established methodologies, we assist clients in
            meeting their objectives on schedule and within budget, providing
            top-tier expertise at competitive rates
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
