import React from 'react';
import { TbTargetArrow } from "react-icons/tb";
import VisionImage from '../../image/vision.png';
import MissionImage from '../../image/mission.png';

const VisionMission = () => {
  return (
    <div className="bg-gray-50 py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-8 lg:px-12 xl:px-16">
        {/* Title Section */}
        <div className="text-center mb-8 md:mb-12">
          <p className="uppercase text-gray-500 text-sm tracking-widest font-semibold mb-2">
            FOCUS ON VISION, MISSION AND CORE VALUES
          </p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800">
            Pillars Of Growth
          </h2>
        </div>

        {/* Vision and Mission Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {/* Vision Card */}
          <div className="bg-white rounded-lg shadow-md p-6 md:p-8 lg:p-10 border border-gray-100">
            <div className="flex justify-center mb-4">
              <img src={VisionImage} alt="vision-image"/>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 text-center mb-2">Our Vision</h3>
            <p className="text-gray-600 text-sm md:text-base text-center">
              We believe in establishing our presence through our work. We have been into the
              global market for years and have been establishing digital transformation for our
              clients. Our vision is to ensure every customer of ours grows and achieves success in
              this dynamic and volatile landscape.
            </p>
          </div>

          {/* Mission Card */}
          <div className="bg-white rounded-lg shadow-md p-6 md:p-8 lg:p-10 border border-gray-100">
            <div className="flex justify-center mb-4">
            <img src={MissionImage} alt="mission-image"/>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 text-center mb-2">Our Mission</h3>
            <p className="text-gray-600 text-sm md:text-base text-center">
              We believe in offering result-driven, scalable and tailored tech solutions to bring
              desirable impact in your business. We have been helping clients over the globe to
              grow and expand their business operations, add efficiency in their existing
              operations and achieve their business goals.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisionMission;