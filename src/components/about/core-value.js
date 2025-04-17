import React from 'react';
import { BsPatchCheck } from "react-icons/bs";
import CoreValuesImage from '../../image/core-value.png';

const CoreValues = () => {
  const coreValuesData = [
    {
      title: 'Excellence',
      description: 'We are focused to deliver the greatest standard of work and efficiency to every solution we offer.',
    },
    {
      title: 'Innovation',
      description: 'We keep on pushing our boundaries and bringing innovative IT Solutions.',
    },
    {
      title: 'Integrity',
      description: 'With an end-to-end comprehensive process, we believe in practicing ethical and transparent business operations.',
    },
    {
      title: 'Collaboration',
      description: 'For us, teamwork is the best work. We believe in working and growing together.',
    },
    {
      title: 'Continuous Learning',
      description: 'We learn every day to ensure growth remains constant for us in every stage.',
    },
    {
      title: 'Customer Focus',
      description: 'For us, clients are the decision makers. We deliver solutions that prioritize client’s requirements.', 
    },
    {
     title: 'Agility',
     description: 'We are quite adaptive to change and are focused to ensure efficiency in execution.', 
    },
    {
        title: 'Social Responsibility',
        description: 'We believe in giving back to society. We actively take participation in contributing back through our various corporate social activities.', 
    }
  ];

  return (
    <div className="bg-[#ececff] flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12 p-4 md:p-8">
      {/* Left Section - Image */}
      <div className="w-full md:w-1/2">
        <img
          src={CoreValuesImage}
          alt="Core Values Illustration"
          className="w-full h-auto rounded-lg "
        />
      </div>

      {/* Right Section - Core Values Text */}
      <div className="w-full md:w-1/2 max-h-[670px] overflow-y-auto">
      {/* Title Section */}
        <div className="mb-6 md:mb-10 text-left">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800">
            Core Values
          </h2>
          <p className="text-gray-600 text-sm md:text-base mt-2">
            These core values define who we are and guide everything we do:
          </p>
        </div>

        {/* Core Values List */}
        <div className="grid grid-cols-1 gap-6 lg:gap-8">
          {coreValuesData.map((value, index) => (
            <div key={index} className="flex flex-col">
              <div className="flex items-center mb-3">
                <div className="bg-white rounded-lg shadow-md p-2 border border-gray-100">
                  <BsPatchCheck className="w-5 h-5 text-[#0f0987]" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mx-2">
                  {value.title}
                </h3>
              </div>
              <p className="text-gray-600 text-sm md:text-base">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoreValues;