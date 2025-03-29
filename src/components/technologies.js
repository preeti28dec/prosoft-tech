import React from "react";

const services = [
  {
    category: "Front End",
    technologies: ["Angular JS", "Next JS", "React JS", "Vue JS"],
  },
  {
    category: "Mobile",
    technologies: ["Android", "Flutter", "iOS Applications", "MAUI", "React Native"],
  },
  {
    category: "Backend",
    technologies: ["C#", "Java", "Node JS", "PHP", "Python", ".net"],
  },
  {
    category: "Ecommerce",
    technologies: ["Open Cart", "Magento", "Shopify", "Shopware", "WooCommerce"],
  },
  {
    category: "Others / Miscellaneous",
    technologies: ["UX/UI", "Mean", "Mern", "Testing", "AI/ML"],
  },
];

const icons = {
  "Angular JS": "🅰️",
  "Next JS": "⬛",
  "React JS": "⚛️",
  "Vue JS": "✅",
  Android: "🤖",
  Flutter: "💙",
  "iOS Applications": "🍏",
  MAUI: "🌊",
  "React Native": "📱",
  "C#": "🔷",
  Java: "☕",
  "Node JS": "🌿",
  PHP: "🐘",
  Python: "🐍",
  ".net": "🟣",
  "Open Cart": "🛒",
  Magento: "🛍️",
  Shopify: "🏪",
  Shopware: "🛎️",
  WooCommerce: "💳",
  "UX/UI": "🎨",
  Mean: "🧩",
  Mern: "🧑‍💻",
  Testing: "✅",
  "AI/ML": "🤖",
};

const Technologies = () => {
  return (
    <div className="bg-white grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 p-6 border border-gray-200 shadow-lg rounded-lg">
      {services.map((service, index) => (
        <div key={index} className="p-4 border-r last:border-r-0 sm:last:border-r md:border-r-0 lg:border-r">
          <h2 className="text-lg font-semibold text-green-600 border-b-2 border-green-400 pb-2 mb-4">
            {service.category}
          </h2>
          <ul>
            {service.technologies.map((tech, idx) => (
              <li
                key={idx}
                className="flex items-center gap-2 py-1 cursor-pointer transition-colors hover:text-green-600"
                onClick={() => alert(`${tech} clicked!`)}
              >
                <span className="text-xl">{icons[tech] || "📢"}</span>
                {tech}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Technologies;