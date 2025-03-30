import React, { useState } from "react";

const MilestoneCard = ({ year, description }) => (
  <div className="bg-white rounded-md shadow-md p-6 text-center">
    <h2 className="text-2xl font-bold mb-2">{year}</h2>
    <p className="text-gray-700 ">{description}</p>
  </div>
);

const MilestoneTimeline = () => {
  const timelineSections = [
    {
      title: "Early Years",
      years: "(2009-2015)",
      milestones: [
        {
          year: "2009",
          description:
            "Founded with a vision to provide innovative software solutions, starting with a team of five passionate developers and marketers.",
        },
        {
          year: "2010",
          description:
            "Secured our first major international client, laying the foundation for a global presence.",
        },
        {
          year: "2013",
          description:
            "Signed an MoU with Ayonix for face recognition and AI partnership, launching our first AI division.",
        },
      ],
    },
    {
      title: "Building a Strong Foundation",
      years: "(2016-2018)",
      milestones: [
        {
          year: "2016",
          description:
            "Achieved ISO / IEC 27001 : 2003 and ISO 9001 : 2015 certifications, reinforcing our commitment to quality and security.",
        },
        {
          year: "2017",
          description:
            "Relocated to our first owned office building, expanding capacity to 600 employees.",
        },
        {
          year: "2018",
          description:
            "Entered Cloud Services, offering secure and scalable solutions.",
        },
      ],
    },
    {
      title: "Expanding Horizons",
      years: "(2019-2021)",
      milestones: [
        {
          year: "2019",
          description:
            "Launched our second major product line focused on [New Product Area].",
        },
        {
          year: "2020",
          description:
            "Successfully navigated the global pandemic, ensuring business continuity and employee well-being.",
        },
        {
          year: "2021",
          description:
            "Expanded our global footprint by opening a new office in [New Location].",
        },
      ],
    },
    {
      title: "Solidifying Leadership",
      years: "(2022-2024)",
      milestones: [
        {
          year: "2022",
          description:
            "Recognized as a market leader in [Industry] by [Awarding Body].",
        },
        {
          year: "2023",
          description:
            "Invested significantly in research and development, leading to the launch of [Innovative Feature].",
        },
        {
          year: "2024",
          description:
            "Celebrated our 15th anniversary, reflecting on years of innovation and growth.",
        },
      ],
    },
    {
      title: "Futuristic Vision 2025 Onwards",
      years: "And Upwards",
      milestones: [
        {
          year: "2025",
          description:
            "Focusing on AI-driven solutions and further global expansion.",
        },
        {
          year: "2026",
          description:
            "Exploring new technological frontiers and strategic partnerships.",
        },
        {
          year: "2027",
          description:
            "Aiming for sustainable growth and making a greater global impact.",
        },
      ],
    },
  ];

  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const currentSection = timelineSections[currentSectionIndex];

  return (
    <div className="bg-[#eaeff0] py-20">
      <div className="container mx-auto px-4">
        <div className=" mb-8">
          <div className="flex items-center mb-3">
            <div>
              <h6 className="tracking-[0.3em]  pr-3 text-center font-bold">
                OUR MILESTONE JOURNEY
              </h6>
            </div>
            <div className="border-t border-stone-950 flex-[0.1_1]"></div>
          </div>
          <div className="font-semibold text-4xl">
            From <span className="text-green-500">Vision </span>To Global Impact
          </div>
        </div>

        <div className="relative rounded-lg overflow-hidden my-3">
          <div className="flex justify-between bg-white border border-green-500 rounded-lg">
            {timelineSections.map((section, index) => (
              <div
                key={index}
                className={`flex-1 rounded-lg text-center py-3 px-2 relative  ${
                  index === currentSectionIndex ? "text-white" : ""
                }`}
                style={{
                  background:
                    index === currentSectionIndex
                      ? "linear-gradient(50deg, rgb(59, 48, 108) 0%, rgb(59, 48, 108) 34%, rgb(19, 184, 116) 100%)"
                      : "transparent",
                }}
              >
                <button
                  onClick={() => setCurrentSectionIndex(index)}
                  className={`focus:outline-none w-full ${
                    index === currentSectionIndex
                      ? "font-bold bg-opacity-30"
                      : "opacity-75"
                  }`}
                >
                  <div className="">{section.title}</div>
                  <div className="">{section.years}</div>
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline Navigation */}

        {/* Milestone Cards for the Current Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {currentSection.milestones.map((milestone, index) => (
            <MilestoneCard
              key={index}
              year={milestone.year}
              description={milestone.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MilestoneTimeline;
