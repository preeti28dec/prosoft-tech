import React from "react";
import ourStory from "../../image/our-story.png";

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
        Customized <span className="text-green-500">Growth Solutions</span> For{" "}
        <br />
        Every Business Need From <br />
        Startups, Medium Scale-Ups To <br />
        Enterprises
      </h1>
      <p className="text-gray-700 leading-relaxed">
        ProSoft Technologies is a versatile IT services provider that specialize in
        offering cutting edge digital transformation as per your business
        requirements. We offer tailored growth solutions to businesses of all
        sizes, from startups to enterprises. By leveraging our expertise across
        various technologies and industries, we can be your digital partners. CS
        Soft Solutions delivers customized growth solutions that cater to the
        unique needs of each business, ensuring success at every stage of
        development.
      </p>
    </div>
  );
}

export default OurStorySection;
