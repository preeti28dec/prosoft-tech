import React, { useState } from "react";
import checkUser from "../../image/check-user.png";
import BookIcon from "../../image/book.png";
import EvolutionIcon from "../../image/evolution.png";
import RevesrUser from "../../image/revers-user.png";
import Understanding from "../../image/Understanding.png";
import starService from "../../image/start-service.png";

const Card = ({ title, description, icon, isTeamService = false, color }) => (
<div className="rounded-lg shadow-md p-6 flex flex-col items-center" style={{ backgroundColor: color }}>
    <div className="flex my-3">
      <div className={`text-3xl font-semibold text-gray-800 mb-2`}> 
        {title}
      </div>
      <img src={icon} alt={title} className="mb-4 w-16 h-16" />
    </div>
    <p className="text-gray-800 text-lg">{description}</p>
  </div>
);

const TABS = [
  {
    name: "End to End Services",
    data: [
      {
        title: "In-Depth Understanding",
        description:"We take a deep dive into understanding our client's requirements, meticulously analyzing every detail to identify the most effective solution for their needs. This comprehensive exploration phase enables us to gather critical insights, ensuring informed and precise decision-making at every step.",
        icon: Understanding,
        color:"#fff3ec"
      },
      {
        title: "Crafting Excellence in Engineering",
        description:"With a bold, creative approach, we transform concepts into reality. Our team builds and rigorously tests market-ready products, ensuring top-notch quality and functionality. We bring ideas to life by leveraging innovative techniques and industry-leading practices.",
        icon: starService,
        color:"#e4f6eb"

      },
      {
        title: "Continuous Evolution",
        description:"When the product is ready, we launch it into the market with precision. We stay committed to its growth, continuously enhancing it based on real-time feedback and evolving needs, ensuring it remains competitive and adaptable to dynamic market trends.",
        icon: EvolutionIcon,
        color:"#eaf0ff"
      },
    ],
  },
  {
    name: "Team as a Services",
    data: [
      {
        title: "Expert Evaluation & Talent Mapping",
        description:"Analyzing the existing team, evaluating project requirements, and determining the skill gaps that need to be filled. The organization collaborates with the staff augmentation provider to clearly define the roles, responsibilities, and qualifications of the required staff.",
        icon: BookIcon,
        color:"#fff3ec"
      },
      {
        title: "Talent Acquisition & Final Selection",
        description:"After defining the requirements, we rigorously screen and evaluate candidates against predefined criteria, conducting detailed interviews and assessments to ensure the best fit. The selected candidates are then presented to the organization for final evaluation and approval.",
        icon: RevesrUser,
        color:"#e4f6eb"
      },
      {
        title: "Seamless Onboarding & Integration",
        description:"We ensure a smooth onboarding process, providing comprehensive training and ongoing support to facilitate successful collaboration. Throughout the engagement, we maintain regular communication and monitor the performance of augmented staff, promptly addressing any concerns to ensure effective teamwork.",
        icon: checkUser,
        color:"#eaf0ff"
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
          We Deliver Measurable Results
        </h1>
        <div className="flex justify-center mb-6 border-b-2 border-indigo-600 rounded-md overflow-hidden shadow-sm">
          {TABS.map(({ name }) => (
            <button
              key={name}
              className={`px-10 py-3 text-xl font-medium mx-1 border-x-2 border-t-2 border-indigo-600 rounded-t-lg transition duration-150 ease-in-out ${
                activeTab === name
                  ? "bg-white text-indigo-600"
                  : "bg-indigo-500 text-white hover:bg-indigo-600"
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
