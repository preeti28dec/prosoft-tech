import React from "react";
import CareersBanner from "../../image/workspace.svg";
import { useState, useEffect } from "react";

function StartCareers() {
  const words = ["Growth-Driven.", "Winner.", "Passionate.","Innovator.","Learner."];
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState("");
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout;

    if (!isDeleting && charIndex <= words[wordIndex].length) {
      // Typing effect
      timeout = setTimeout(() => {
        setText(words[wordIndex].slice(0, charIndex));
        setCharIndex((prev) => prev + 1);
      }, 200);
    } else if (isDeleting && charIndex >= 0) {
      // Backspacing effect
      timeout = setTimeout(() => {
        setText(words[wordIndex].slice(0, charIndex));
        setCharIndex((prev) => prev - 1);
      }, 200);
    } else {
      // Switch to next word after typing and deleting
      if (!isDeleting) {
        timeout = setTimeout(() => setIsDeleting(true), 2000); // Wait before deleting
      } else {
        setIsDeleting(false);
        setCharIndex(0);
        setWordIndex((prev) => (prev + 1) % words.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, wordIndex]);

  return (
    <div className="bg-[#ececff] py-10 md:py-20 mt-16">
      <div className="flex flex-col md:flex-row items-center justify-between px-4 md:px-8">
        {/* Left Section */}
        <div className="text-center md:text-left mb-8 md:mb-0 md:w-1/2 lg:w-6/12">
          <h1 className="text-3xl font-semibold text-gray-800 mb-4 md:text-4xl lg:text-6xl">
          Join Us on a Journey of Continuous  <span className="text-[#0f0987]">{text}</span>
          </h1>
          <div className="mx-2 font-semibold">
          We empower individuals to grow and define their own path to success.</div>
        </div>

        {/* Right Section */}
        <div className="relative md:w-1/2 lg:w-6/12 flex justify-center ">
          <img src={CareersBanner} alt="careers-image" />
        </div>
      </div>
    </div>
  );
}

export default StartCareers;
