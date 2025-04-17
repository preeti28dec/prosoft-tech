import React from "react";
const CurrentOpenings = () => {
  return (
    <div className="bg-white pb-16 md:pb-24  pt-10">
      <div className=" px-4 md:px-8 lg:px-12 xl:px-16">
        <div className="flex items-center mb-3 justify-center ">
          <div className="border-t border-stone-950 flex-[0.1_1] mx-4"></div>
          <div className="">
            <h6 className="pr-3 text-center font-semibold tracking-[0.3em] uppercase">
              Apply jobs
            </h6>
          </div>
          <div className="border-t border-stone-950 flex-[0.1_1]"></div>
        </div>
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-3xl lg:text-4xl font-semibold text-gray-800">
            Current Openings – Join Our Team!
          </h2>
        </div>
      </div>
      <div className="w-4/6 mx-auto text-lg font-semibold text-center">
      Join a vibrant, forward-thinking workplace where passion fuels innovation. Discover new opportunities and elevate your career with ProSoft Technologies.
      </div>
    </div>
  );
};
export default CurrentOpenings;
