import React from "react";
import { BsPatchCheck } from "react-icons/bs";
import growWithImage from "../../image/grow-with-us.webp";

const JoinUsToWitness = () => {
  const coreValuesData = [
    {
      title: "Growth-Oriented Culture",
      description:"We empower you to shape your own success journey..",
    },
    {
      title: "Innovative Work Environment",
      description:"Work with cutting-edge technologies and exciting projects.",
    },
    {
      title: "Recognition & Rewards",
      description:"Your efforts are valued and celebrated.",
    },
    {
      title: "Work-Life Balance",
      description:"We work hard, but we also know how to have fun.",
    },
    {
      title: "Learning & Development",
      description:"Continuous learning opportunities to enhance your skills.",
    },
    {
      title: "Dynamic Team",
      description:"Collaborate with passionate professionals who never give up.",
    }
  ];

  return (
    <div className="bg-[#ececff] flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12 p-4 md:p-8 ">
      {/* Left Section - Image */}
      <div className="w-full md:w-1/2">
        <img
          src={growWithImage}
          alt="Core Values Illustration"
          className="w-full h-auto rounded-lg "
        />
      </div>

      {/* Right Section - Core Values Text */}
      <div className="w-full md:w-1/2 max-h-[670px] overflow-y-auto">
        {/* Title Section */}
        <div className="mb-6 md:mb-5 text-left">
          <div className="flex items-center mb-3 ">
            <div className="">
              <h6 className="pr-3  font-semibold  tracking-[0.3em]">
                GROW WITH US
              </h6>
            </div>
            <div className="border-t border-stone-950 flex-[0.2_1]"></div>
          </div>
          <div className="font-semibold mt-2 text-4xl">
            Join us to witness
          </div>
        </div>

        {/* Core Values List */}
        <div className="grid grid-cols-1 gap-6 lg:gap-8">
          {coreValuesData.map((value, index) => (
            <div key={index} className="flex flex-col">
              <div className="flex items-center mb-3">
                <div className=" rounded-lg p-2 border border-gray-300">
                  <BsPatchCheck className="w-6 h-6 text-[#3b306c]" />
                </div>
                <div>
                <h3 className="text-lg font-semibold text-gray-800 mx-2">
                  {value.title}
                </h3>
                <div className="mx-2">
                {value.description}
              </div>
                </div>
              </div>
              
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JoinUsToWitness;
