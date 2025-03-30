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
            <h6 className="pr-3 text-center font-semibold text-lg tracking-[0.3em]">FOCUS ON VISION, MISSION AND CORE VALUES</h6>
          </div>
          <div className="border-t border-stone-950 flex-[0.1_1]"></div>
        </div>

        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-3xl lg:text-4xl font-semibold text-gray-800">
            Pillars Of Growth
          </h2>
        </div>

        {/* Vision and Mission Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {/* Vision Card */}
          <div className="bg-[#eef5f6] rounded-lg shadow-md p-6 md:p-8  border-b-4 border-[#48a1ad]">
            <div className="flex justify-center mb-4">
              <img src={VisionImage} alt="vision-image"  className="w-32"/>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 text-center mb-2">
              Our Vision
            </h3>
            <div className=" text-center ">
              We believe in establishing our presence through our work. We have
              been into the global market for years and have been establishing
              digital transformation for our clients. Our vision is to ensure
              every customer of ours grows and achieves success in this dynamic
              and volatile landscape.
            </div>
          </div>

          {/* Mission Card */}
          <div className="bg-[#fcf0f2] rounded-lg shadow-md p-6 md:p-8  border-b-4 border-[#e16b7c]">
            <div className="flex justify-center mb-4">
              <img src={MissionImage} alt="mission-image"  className="w-32" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 text-center mb-2">
              Our Mission
            </h3>
            <div className=" text-center ">
              We believe in offering result-driven, scalable and tailored tech
              solutions to bring desirable impact in your business. We have been
              helping clients over the globe to grow and expand their business
              operations, add efficiency in their existing operations and
              achieve their business goals.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisionMission;
