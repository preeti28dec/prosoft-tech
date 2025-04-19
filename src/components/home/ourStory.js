import React from "react";
//import ourStory from "../../image/our-story.png";
import ourStory from "../../image/our_story.svg";

function OurStorySection() {
  return (
    <div className="bg-white flex flex-col md:flex-row items-center justify-center min-h-screen bg-gray-100">
      <div className="md:w-1/2 p-8">
        {/* Illustration Component */}
        <Illustration />
      </div>
      <div className="md:w-1/2 p-8 text-center md:text-left">
        {/* Text Content Component */}
        <TextContent />
      </div>
    </div>
  );
}

function Illustration() {
  return (
    <div className="relative">
      {/* Placeholder for your SVG or image */}
      <img
        src={ourStory}
        alt="Business Growth Illustration"
        className="w-full h-auto"
      />
    </div>
  );
}

function TextContent() {
  return (
    <div className="">
      <div className="flex items-center mb-3">
        <div>
          <h6 className="pr-3 text-center font-semibold">OUR STORY</h6>
        </div>
        <div className="border-t border-stone-950 flex-[0.2_1]"></div>
      </div>
      <h1 className="text-3xl lg:text-4xl font-semibold text-gray-800 mb-6">
      Customized <span className="text-[#0f0987]">growth solutions </span>for businesses, from startups to enterprises.
      </h1>
      <p className="text-gray-700 leading-relaxed">
      ProSoft Technologies is a dynamic IT services provider, specializing in cutting-edge digital transformation tailored to your business needs. We offer customized growth solutions for businesses of all sizes, from startups to enterprises. With our expertise across diverse technologies and industries, we become your trusted digital partner. ProSoft delivers bespoke growth strategies, ensuring success at every development stage.
      </p>
    </div>
  );
}

export default OurStorySection;
