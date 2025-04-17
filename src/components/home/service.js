import React, { useState } from "react";
import checkUser from "../../image/check-user.png";
import BookIcon from "../../image/book.png";
import EvolutionIcon from "../../image/evolution.png";
import RevesrUser from "../../image/revers-user.png";
import Understanding from "../../image/Understanding.png";
import starService from "../../image/start-service.png";

const Card = ({ title, description, icon, isTeamService = false, color }) => (
<div className="rounded-lg shadow-md p-6   items-center" style={{ backgroundColor: color }}>
      <div className={`text-2xl font-semibold my-2 text-gray-800 mb-2`}> 
        {title}
      </div>
      {/* <img src={icon} alt={title} className="mb-4 w-16 h-16" /> */}
    <p className="text-gray-800 ">{description}</p>
  </div>
);

const TABS = [
  {
    name: "Turnkey Services",
    data: [
      {
        title: "Extensive comprehension",
        description:"We thoroughly explore our clients’ requirements, carefully examining each aspect to uncover the most suitable solution tailored to their needs. This in-depth discovery phase allows us to gain valuable insights, supporting accurate and strategic decision-making throughout the process.",
        icon: Understanding,
        color:"#f4ecff"
      },
      {
        title: "Pursuing Engineering Excellence",
        description:"With a fearless and imaginative mindset, we turn visionary ideas into tangible solutions. Our team designs, develops, and thoroughly validates products that are ready for the market—guaranteeing exceptional quality and performance. By harnessing cutting-edge methods and best-in-class industry standards, we breathe life into every concept.",
        icon: starService,
        color:"#e4f6eb"

      },
      {
        title: "Progressive Growth",
        description:"Once the product is launch-ready, we introduce it to the market with strategic precision. Our commitment doesn’t stop there—we actively support its growth by refining and optimizing it through real-time feedback and shifting user demands. This ongoing enhancement ensures the product stays competitive and responsive to ever-changing market dynamics.",
        icon: EvolutionIcon,
        color:"#eaf0ff"
      },
    ],
  },
  {
    name: "Dedicated Team Service",
    data: [
      {
        title: "Specialized Assessment & Workforce Planning",
        description:"Assessing the current team structure, reviewing project objectives, and identifying critical skill gaps that need to be addressed. The organization partners with the staff augmentation provider to precisely outline the required roles, responsibilities, and desired qualifications for the incoming talent.",
        icon: BookIcon,
        color:"#fff3ec"
      },
      {
        title: "Recruitment & Hiring Decisions",
        description:"Once the requirements are established, we thoroughly assess and vet candidates based on set criteria, conducting in-depth interviews and evaluations to ensure the ideal match. The shortlisted candidates are then submitted to the organization for final review and approval.",
        icon: checkUser,
        color:"#eaf0ff"
      },
      {
        title: "Hassle-Free Onboarding & Incorporation",
        description:"We ensure a seamless onboarding experience with thorough training and continuous support for effective collaboration. We maintain regular communication, monitor augmented staff performance, and promptly resolve any issues to guarantee smooth teamwork.",
        icon: RevesrUser,
        color:"#e4f6eb"
      },
    ],
  },
];

const ServiceHome = () => {
  const [activeTab, setActiveTab] = useState(TABS[0].name);
  const activeData = TABS.find((tab) => tab.name === activeTab).data;

  return (
    <div className="bg-white py-14">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-semibold text-gray-900 mb-8 text-center">
        We Ensure Concrete Results
        </h1>
        <div className="flex justify-center mb-6 border-b-2 border-indigo-600 rounded-md overflow-hidden shadow-sm">
          {TABS.map(({ name }) => (
            <button
              key={name}
              className={`px-10 py-3 text-xl font-medium mx-1 border-x-2 border-t-2 border-indigo-600 rounded-t-lg transition duration-150 ease-in-out ${
                activeTab === name
                  ? "bg-indigo-500 text-white hover:bg-indigo-600"
                  : "bg-white text-indigo-600"
              }`}
              onClick={() => setActiveTab(name)}
            >
              {name}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {activeData.map(({ title, description, icon , color}) => (
            <Card
              key={title}
              title={title}
              description={description}
              icon={icon}
              isTeamService={activeTab === "Team as a Services"}
              color={color}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceHome;
