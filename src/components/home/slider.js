import React, { useState, useRef, useEffect } from 'react';
import { FaApple, FaMicrosoft, FaPlaystation, FaAws } from 'react-icons/fa';
import { MdCheckCircleOutline } from 'react-icons/md';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
import { SiAdobe } from "react-icons/si";

config.autoAddCss = false;

const certifications = [
  { name: 'Amazon Web Services', icon: <FaAws className="h-16 md:h-20 w-auto text-orange-500" /> },
  { name: 'Apple', icon: <FaApple className="h-16 md:h-20 w-auto text-gray-800" /> },
  { name: 'Microsoft Gold Certified', icon: <FaMicrosoft className="h-16 md:h-20 w-auto text-blue-500" /> },
  { name: 'Adobe', icon: <SiAdobe className="h-16 md:h-20 w-auto text-red-600" /> },
  { name: 'Play Store', icon: <FaPlaystation className="h-16 md:h-20 w-auto text-blue-600" /> },
  { name: 'GDPR Certified', icon: <MdCheckCircleOutline className="h-16 md:h-20 w-auto text-green-500" /> },
  { name: 'Quality Management', icon: <MdCheckCircleOutline className="h-16 md:h-20 w-auto text-blue-700" /> },
];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef(null);
  const intervalRef = useRef(null);
  const visibleItems = 4;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = (prevIndex + 1) % (certifications.length - visibleItems + 1);
      sliderRef.current.scrollLeft = newIndex * getItemWidth();
      return newIndex;
    });
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex > 0 ? prevIndex - 1 : 0;
      sliderRef.current.scrollLeft = newIndex * getItemWidth();
      return newIndex;
    });
  };

  const getItemWidth = () => {
    return sliderRef.current ? sliderRef.current.offsetWidth / visibleItems : 0;
  };

  useEffect(() => {
    const startAutoSlide = () => {
      intervalRef.current = setInterval(nextSlide, 5000);
    };

    startAutoSlide();
    return () => clearInterval(intervalRef.current);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (sliderRef.current) {
        sliderRef.current.scrollLeft = currentIndex * getItemWidth();
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [currentIndex]);

  return (
    <div className="bg-gray-50 py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2 uppercase tracking-wider">
          CERTIFICATIONS & PARTNERSHIPS
        </h2>
        <div className="border-b-2 border-gray-300 w-24 mx-auto mb-6"></div>
        <h3 className="text-lg text-gray-600 mb-8">CERTIFICATIONS AND PARTNERSHIPS</h3>

        <div className="relative overflow-hidden">
          <div
            ref={sliderRef}
            className="flex transition-transform duration-300 ease-in-out scroll-smooth"
            style={{ scrollBehavior: 'smooth' }}
          >
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="flex-shrink-0 md:px-6 flex flex-col items-center justify-center"
                style={{ width: `${100 / visibleItems}%` }}
              >
                <div className="mb-2">{cert.icon}</div>
                <div
                  className={`text-sm font-medium py-1 px-3 rounded-full mt-2 relative overflow-hidden`}
                >
                <button className="relative overflow-hidden border-2 border-green-500 text-green-500 px-5 py-2.5 text-sm font-medium rounded-lg transition-all duration-300 ease-in-out hover:text-white 
  before:content-[''] before:absolute before:top-0 before:left-0 before:w-0 before:h-full before:bg-green-500 before:transition-all before:duration-[1000ms] hover:before:w-full before:z-0">
  <span className="relative z-10">{cert.name}</span>
</button>


                  <span className="absolute inset-0 bg-green-500 transition-transform scale-x-0 hover:scale-x-100 origin-left duration-300 ease-in-out"></span>
                </div>
              </div>
            ))}
          </div>

          {certifications.length > visibleItems && (
            <>
              <button
                onClick={prevSlide}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-70 hover:bg-opacity-90 text-gray-600 rounded-full p-2 shadow-md focus:outline-none focus:ring-2 focus:ring-green-500 hover:bg-green-200 hover:text-green-700 transition duration-200"
              >
                <FontAwesomeIcon icon={faChevronLeft} />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-70 hover:bg-opacity-90 text-gray-600 rounded-full p-2 shadow-md focus:outline-none focus:ring-2 focus:ring-green-500 hover:bg-green-200 hover:text-green-700 transition duration-200"
              >
                <FontAwesomeIcon icon={faChevronRight} />
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Slider;
