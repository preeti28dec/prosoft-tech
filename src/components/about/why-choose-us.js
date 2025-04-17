import React from 'react';
import TbUserStar from '../../image/groupstar.png';
import PresentationChartLineIcon from '../../image/search-graph.png';
import ShieldCheckIcon from '../../image/check-star.png';
import ClockIcon from '../../image/clock.png';
import CodeIcon from '../../image/code.png';
import IdeaIcon from '../../image/idea.png';


const WhyChooseUs = () => {
  const reasons = [
    {
      title: 'Demonstrated Excellence and Industry Insight',
      description:'At ProSoft Technologies, we’re proud to have some of the finest talent in the industry. Our team brings deep experience across a wide range of IT sectors, delivering reliable, business-focused solutions. We are committed to providing every client with exceptional service and dependable results—without compromise.',
      icon: TbUserStar,
      borderColor: 'border-gray-100',
      textColor: 'text-gray-800',
      color:'bg-[#ffede4]',
    },
    {
      title: 'Custom-Fit Solutions for Your Unique Needs',
      description:'We recognize that every business is different. Our experts deliver personalized, experience-driven solutions designed to align perfectly with your specific goals and requirements',
      icon: PresentationChartLineIcon,
      borderColor: 'border-gray-100',
      textColor: 'text-gray-800',
      color:'bg-[#dffff0]',

    },
    {
      title: 'Relentless Commitment to Quality',
      description: 'Quality is at the heart of everything we do. Our team is dedicated to delivering flawless solutions that meet the highest industry standards. With a specialized team of QA analysts, we ensure every deliverable is thoroughly tested and exceeds expectations.',
      icon: ShieldCheckIcon,
      borderColor: 'border-gray-100',
      textColor: 'text-gray-800',
      color:'bg-[#e2ebff]',

    },
    {
      title: 'Reliable Delivery, Every Time',
      description: 'We honor our commitments with a disciplined project management approach that guarantees timely delivery—without sacrificing quality or impact. Your deadlines are our priority.',
      icon: ClockIcon,
      borderColor: 'border-gray-100',
      textColor: 'text-gray-800',
      color:'bg-[#fdffdf]',

    },
    // {
    //     title: 'Agile & Adaptive Development',
    //     description: 'We adopt agile methodologies to deliver solutions that resonate with growth and efficiency. We keep on refining our work to ensure we become the better version of ourselves. Our iterative approach helps us to stay competitive and result-driven in the market.', // Description seems to be implied by the title and icon
    //     icon: CodeIcon,
    //     borderColor: 'border-gray-100',
    //     textColor: 'text-gray-800',
    //     color:'bg-[#e8deff]',

    // },
    // {
    //     title: 'Innovation at the Core',
    //     description: 'We thrive on innovation. We focus on building tech solutions that speak for our work and excellence. With future-ready solutions, we offer innovation and accomplishment in our deliverables.', // Description seems to be implied by the title and icon
    //     icon: IdeaIcon,
    //     borderColor: 'border-gray-100',
    //     textColor: 'text-gray-800',
    //     color:'bg-[#ffeced]',

    // },
  ];

  return (
    <div className="bg-white pb-16 md:pb-24  pt-10">
      <div className=" px-4 md:px-8 lg:px-12 xl:px-16">
        {/* Title Section */}
        <div className="flex items-center mb-3 justify-center ">
          <div className="border-t border-stone-950 flex-[0.1_1] mx-4"></div>
          <div className="">
            <h6 className="pr-3 text-center font-semibold text-lg tracking-[0.2em]">Why Clients Trust Us</h6>
          </div>
          <div className="border-t border-stone-950 flex-[0.1_1]"></div>
        </div>
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-3xl lg:text-4xl font-semibold text-gray-800">
          Our Distinct Edge
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
                <div className="flex justify-between mb-4 text-gray-400">
                <h3 className={`sm:text-3xl font-semibold ${reason.textColor} mb-2`}>
                  {reason.title}
                </h3>
                <div>
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

export default WhyChooseUs;