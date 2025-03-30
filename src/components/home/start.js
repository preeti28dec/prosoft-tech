import React from 'react';
import HomeBanner from '../../image/home-banner.webp';

function StartPage() {
  return (
    <div className="bg-[#eaeff0] py-10 md:py-20">
      <div className="flex flex-col md:flex-row items-center justify-between px-4 md:px-8">
        {/* Left Section */}
        <div className="text-center md:text-left mb-8 md:mb-0 md:w-1/2 lg:w-6/12">
          <h1 className="text-3xl font-semibold text-gray-800 mb-4 md:text-4xl lg:text-6xl">
            Smart Solutions, <span className="text-green-500">Real</span> <div className="my-3">Results: Growth,</div> <span className="text-green-500">Delivered</span>
          </h1>
        </div>

        {/* Right Section */}
        <div className="relative md:w-1/2 lg:w-6/12 flex justify-center ">
         <img src={HomeBanner} alt="banner-image"/>
        </div>
      </div>
    </div>
  );
}

export default StartPage;