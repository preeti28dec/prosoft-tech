import React from "react";
import { TbTargetArrow } from "react-icons/tb";
import VisionImage from "../../image/vision.png";
import MissionImage from "../../image/mission.png";

const VisionMission = () => {
  return (
    <div className="bg-white py-16 md:py-24">
      <div className="px-4 md:px-8 lg:px-12 xl:px-16">
        {/* Title Section */}
        <div className="flex items-center mb-3 justify-center ">
          <div className="border-t border-stone-950 flex-[0.1_1] mx-4"></div>
          <div className="">
            <h6 className="pr-3 text-center font-semibold text-lg tracking-[0.2em]">
              Concentrate on Our Vision, Mission, and Core Principles
            </h6>
          </div>
          <div className="border-t border-stone-950 flex-[0.1_1]"></div>
        </div>

        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-3xl lg:text-4xl font-semibold text-gray-800">
            Keys to Growth
          </h2>
        </div>

        {/* Vision and Mission Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {/* Vision Card */}
          <div className="bg-[#eef5f6] rounded-lg shadow-md p-6 md:p-8  border-b-4 border-[#48a1ad]">
            <div className="flex justify-center mb-4">
              <img src={VisionImage} alt="vision-image" className="w-32" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 text-center mb-2">
              Our Goal
            </h3>
            <div className=" text-center ">
              We focus on building our presence through the quality of our work.
              With years of experience in the global market, we have been
              driving digital transformation for our clients. Our goal is to
              empower every customer to grow and succeed in an ever-changing and
              unpredictable landscape
            </div>
          </div>

          {/* Mission Card */}
          <div className="bg-[#fcf0f2] rounded-lg shadow-md p-6 md:p-8  border-b-4 border-[#e16b7c]">
            <div className="flex justify-center mb-4">
              <img src={MissionImage} alt="mission-image" className="w-32" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 text-center mb-2">
              Our Objective
            </h3>
            <div className=" text-center ">
              We are committed to providing scalable, results-oriented, and
              customized tech solutions that deliver meaningful impact to your
              business. For years, we have supported clients worldwide in
              scaling their operations, enhancing efficiency, and achieving
              their business objectives
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisionMission;
