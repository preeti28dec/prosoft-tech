import React from "react";
import AllStar from "../../image/all-star.png";
import Trophy from "../../image/trophy.png";
import Mirror from "../../image/mirror.png";
import Celebrate from "../../image/celebrate.png";
const GrowWithUs = () => {
  const reasons = [
    {
      title: "Celebrate Together, Criticize Privately",
      description:
        "We believe in fostering a positive and supportive work environment where achievements are celebrated as a team, and constructive feedback is given with respect and discretion.",
      icon: Celebrate,
      borderColor: "border-gray-100",
      textColor: "text-gray-800",
      color: "bg-[#ffede4]",
    },
    {
      title: "Become a Better Version of Yourself Every Day",
      description:
        "We encourage continuous learning, self-improvement, and personal growth, ensuring you evolve both professionally and personally.",
      icon: Mirror,
      borderColor: "border-gray-100",
      textColor: "text-gray-800",
      color: "bg-[#dffff0]",
    },
    {
      title: "Take Ownership, Drive Excellence",
      description:
        "We believe in accountability and delivering our best in everything we do.",
      icon: AllStar,
      borderColor: "border-gray-100",
      textColor: "text-gray-800",
      color: "bg-[#e2ebff]",
    },
    {
      title: "Respect, Collaborate and Succeed",
      description:
        "Mutual respect and teamwork drive our success, fostering a supportive and innovative work culture.",
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
            <h6 className="pr-3 text-center font-semibold text-lg tracking-[0.3em]">
              GROW WITH US
            </h6>
          </div>
          <div className="border-t border-stone-950 flex-[0.1_1]"></div>
        </div>
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-3xl lg:text-4xl font-semibold text-gray-800">
            Our Work Ethics
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
                    className={`text-4xl font-semibold ${reason.textColor} mb-2 w-80`}
                  >
                    {reason.title}
                  </h3>
                  <div className=" ">
                    <img src={reason.icon} alt="icon" className="w-24" />
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
