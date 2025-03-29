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
      title: 'Proven Expertise and Experience',
      description:'We have been blessed with the best of the talent in the industry. At CS Soft Solutions, get business solutions from experts who have a thorough experience and exposure of diverse sectors in the IT industry. We understand and ensure every customer of ours is served with the best of solutions without any fall.',
      icon: TbUserStar,
      bgColor: 'bg-white',
      borderColor: 'border-gray-100',
      textColor: 'text-gray-800',
    },
    {
      title: 'Tailored Solutions for Your Business',
      description:'We understand that no two businesses are the same. Ask our experts to offer you experienced and custom-fit solutions that match your business requirements in every aspect.',
      icon: PresentationChartLineIcon,
      bgColor: 'bg-white',
      borderColor: 'border-gray-100',
      textColor: 'text-gray-800',
    },
    {
      title: 'Uncompromising Quality Assurance',
      description: 'Quality is our priority. Ours is a team of firm believers of ensuring error-free solutions that serves the best of the quality in the market. We have a dedicated set of QA analysts that focus on checking the highest standard of quality in our deliverables.', // Description seems to be implied by the title and icon
      icon: ShieldCheckIcon,
      bgColor: 'bg-white',
      borderColor: 'border-gray-100',
      textColor: 'text-gray-800',
    },
    {
      title: 'On-Time, Every Time',
      description: 'We believe in our commitments. Through our structured project management approach, we ensure deliveries are done on time, every time without compromising with the quality of the work and the expected impact.', // Description seems to be implied by the title and icon
      icon: ClockIcon,
      bgColor: 'bg-white',
      borderColor: 'border-gray-100',
      textColor: 'text-gray-800',
    },
    {
        title: 'Agile & Adaptive Development',
        description: 'We adopt agile methodologies to deliver solutions that resonate with growth and efficiency. We keep on refining our work to ensure we become the better version of ourselves. Our iterative approach helps us to stay competitive and result-driven in the market.', // Description seems to be implied by the title and icon
        icon: CodeIcon,
        bgColor: 'bg-white',
        borderColor: 'border-gray-100',
        textColor: 'text-gray-800',
    },
    {
        title: 'Innovation at the Core',
        description: 'We thrive on innovation. We focus on building tech solutions that speak for our work and excellence. With future-ready solutions, we offer innovation and accomplishment in our deliverables.', // Description seems to be implied by the title and icon
        icon: IdeaIcon,
        bgColor: 'bg-white',
        borderColor: 'border-gray-100',
        textColor: 'text-gray-800',
    },
  ];

  return (
    <div className="bg-gray-50 py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-8 lg:px-12 xl:px-16">
        {/* Title Section */}
        <div className="text-center mb-8 md:mb-12">
          <p className="uppercase text-gray-500 text-sm tracking-widest font-semibold mb-2">
            WHY CHOOSE US
          </p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800">
            What Sets Us Apart?
          </h2>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className={`${reason.bgColor} ${reason.borderColor} rounded-lg shadow-md p-6 md:p-8 flex flex-col justify-between h-full`}
            >
              <div>
                <div className="flex justify-end mb-4 text-gray-400">
                  <img src={reason.icon} alt="icon" className="w-10 h-10" />
                </div>
                <h3 className={`text-xl font-semibold ${reason.textColor} mb-2`}>
                  {reason.title}
                </h3>
                <p className="text-gray-600 text-sm md:text-base">{reason.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;