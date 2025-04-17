import React from "react";
//import HomeBanner from "../../image/home-banner.webp";
import HomeBanner from "../../image/programing.svg";

function StartPage() {
  return (
    <div className="bg-[#ececff] py-10 md:py-20 mt-16">
      <div className="flex flex-col md:flex-row items-center justify-between px-4 md:px-8">
        {/* Left Section */}
        <div className="text-center md:text-left mb-8 md:mb-0 md:w-1/2 lg:w-6/12">
          <h1 className="text-2xl font-semibold text-gray-800 mb-4 md:text-4xl lg:text-6xl">
            ProSoft Technologies
          </h1>
          <p className="w-[85%]">
            ProSoft Technologies has been very successful in providing sound,
            meaningful full service IT solutions to commercial industry. Our
            success is measured by our clients’ satisfaction with our technical,
            administrative, schedule and cost performance. As indicated, 100% of
            our clients are referencable. We intend to bring this same level of
            client satisfaction to the federal government market. We would be
            pleased to assist your organization with high value capabilities as
            an integral team player in the fulfillment of your goals and
            objectives.
          </p>
        </div>

        {/* Right Section */}
        <div className="relative md:w-1/2 lg:w-6/12 flex justify-center ">
          <img src={HomeBanner} alt="banner-image" />
        </div>
      </div>
    </div>
  );
}

export default StartPage;
