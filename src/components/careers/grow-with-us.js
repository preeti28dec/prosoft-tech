import React from "react";
import AllStar from "../../image/all-star.png";
import Trophy from "../../image/trophy.png";
import Mirror from "../../image/mirror.png";
import Celebrate from "../../image/celebrate.png";
const GrowWithUs = () => {
  const reasons = [
    {
      title: "Celebrate as a Team, Address Concerns Privately",
      description:"We strive to create a collaborative and supportive work culture where success is shared, and feedback is offered respectfully and privately to foster growth.",
      icon: Celebrate,
      borderColor: "border-gray-100",
      textColor: "text-gray-800",
      color: "bg-[#ffede4]",
    },
    {
      title: "Strive for Progress, Every Day",
      description:"We foster a culture of continuous learning and self-development, empowering you to grow both in your career and personal life.",
      icon: Mirror,
      borderColor: "border-gray-100",
      textColor: "text-gray-800",
      color: "bg-[#dffff0]",
    },
    {
      title: "Embrace Responsibility, Achieve Excellence",
      description:"We value accountability and are committed to delivering outstanding results in every task we undertake.",
      icon: AllStar,
      borderColor: "border-gray-100",
      textColor: "text-gray-800",
      color: "bg-[#e2ebff]",
    },
    {
      title: "Honor, Collaborate, and Achieve",
      description:"We believe that respect and teamwork are key to our success, creating an environment where innovation and support thrive.",
      icon: Trophy,
      borderColor: "border-gray-100",
      textColor: "text-gray-800",
      color: "bg-[#fdffdf]",
    },
  ];

  return (
    <div className="bg-white pb-16 md:pb-24  pt-10">
      <div className=" px-4 md:px-8 lg:px-12 xl:px-16">
        {/* Title Section */}
        <div className="flex items-center mb-3 justify-center ">
          <div className="border-t border-stone-950 flex-[0.1_1] mx-4"></div>
          <div className="">
            <h6 className="pr-3 text-center font-semibold text-lg tracking-[0.2em]">
            Thrive With Us
            </h6>
          </div>
          <div className="border-t border-stone-950 flex-[0.1_1]"></div>
        </div>
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-3xl lg:text-4xl font-semibold text-gray-800">
          How We Work
          </h2>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className={`${reason.borderColor} ${reason.color} rounded-lg shadow-md p-6 md:p-8 flex flex-col justify-between h-full`}
            >
              <div>
                <div className="flex justify-between mb-4 text-gray-400 flex-wrap">
                  <h3
                    className={`text-3xl font-semibold ${reason.textColor} mb-2 `}
                  >
                    {reason.title}
                  </h3>
                  <div className=" ">
                    {/* <img src={reason.icon} alt="icon" className="w-24" /> */}
                  </div>
                </div>
                <div className="text-sm md:text-base">{reason.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GrowWithUs;
