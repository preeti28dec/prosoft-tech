import React, { useState } from "react";

const services = [
  // { id: 1, title: "AI Consulting Services", icon: "🤖" },
  { id: 2, title: "App Development Services", icon: "📱" },
  // { id: 3, title: "Demand Generation", icon: "💡" },
  // { id: 4, title: "DevOps Engineering Services", icon: "⚙️" },
  // { id: 5, title: "Digital Marketing Services", icon: "📢" },
  // { id: 6, title: "Ecommerce Development Services", icon: "🛒" },
  { id: 7, title: "Product Development Services", icon: "📦" },
  { id: 8, title: "Software Legacy Modernization", icon: "💻" },
  { id: 9, title: "Web Development Services", icon: "🌐" },
];

const ServiceCard = () => {
  const [selectedService, setSelectedService] = useState("");

  return (
    <div className="bg-white mx-auto px-6 py-3 border border-gray-200 shadow-lg rounded-lg w-full">
      <h2 className="text-3xl font-bold text-center mb-6">Our Services</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {services.map((service) => (
          <div
            key={service.id}
            className="flex flex-col items-center justify-center p-6 bg-gray-100 rounded-lg shadow-md hover:bg-green-50 hover:shadow-lg transition duration-300 cursor-pointer"
            onClick={() => setSelectedService(service.title)}
          >
            <div className="text-4xl mb-3">{service.icon}</div>
            <h3 className="text-lg font-semibold text-center">{service.title}</h3>
          </div>
        ))}
      </div>

      {/* {selectedService && (
        <div className="mt-6 p-4 bg-green-100 text-center text-lg font-semibold border border-green-400 rounded-lg">
          Selected Service: {selectedService}
        </div>
      )} */}
    </div>
  );
};

export default ServiceCard;
