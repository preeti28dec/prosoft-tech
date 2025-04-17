import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import { Link } from "react-router-dom";
import ServiceCard from "./../serviceCard";
import Technologies from "./../technologies";
import logoProsft from "../../image/prosoft_new.svg";

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isTechnologiesOpen, setIsTechnologiesOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Function to set active section and close dropdowns when a main nav is clicked
  const handleNavClick = (section) => {
    setActiveSection(section);
    setIsServicesOpen(false);
    setIsTechnologiesOpen(false);
  };

  return (
    <>
      {/* Header */}
      <header className="bg-white shadow-md px-4 py-1 flex items-center justify-between fixed top-0 w-full z-10">
        {/* Menu Button for Small Screens */}
        <button
          className="text-gray-700 text-2xl md:hidden"
          onClick={() => setIsSidebarOpen(true)}
        >
          <FaBars />
        </button>

        {/* Logo */}
        <Link to="/"  ><img src={logoProsft} alt="Prosoft Tech Logo"   className="h-[9vh] w-[120px] object-cover" /></Link>


        {/* <div className="text-2xl font-bold text-[#15b874]">ProSoft Tech</div> */}

        {/* Navigation (Hidden on Small Screens) */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link
            className={`${
              activeSection === "home"
                ? "text-[#0f0987] font-bold"
                : "text-gray-700"
            } hover:text-[#0f0987] text-lg font-semibold`}
            to="/"
            onClick={() => handleNavClick("home")}
          >
            Home
          </Link>

          <Link
            className={`${
              activeSection === "about"
                ? "text-[#0f0987] font-bold"
                : "text-gray-700"
            } hover:text-[#0f0987] text-lg font-semibold`}
            to="/about"
            onClick={() => handleNavClick("about")}
          >
            About Us
          </Link>

          {/* Services Dropdown */}
          <div className="relative group">
            <button
              className={`flex items-center ${
                activeSection === "services"
                  ? "text-[#0f0987] font-bold"
                  : "text-gray-700"
              } hover:text-[#0f0987] text-lg font-semibold`}
              onClick={() => {
                if (activeSection === "services") {
                  setActiveSection("");
                  setIsServicesOpen(false);
                } else {
                  setActiveSection("services");
                  setIsServicesOpen(true);
                  setIsTechnologiesOpen(false);
                }
              }}
            >
              Services <IoMdArrowDropdown className="ml-1 text-2xl" />
            </button>
            {isServicesOpen && activeSection === "services" && (
              <div className="absolute group-hover:block z-10">
                <div className="fixed w-full left-0 bg-gray mt-4 py-3">
                  <ServiceCard />
                </div>
              </div>
            )}
          </div>

          {/* Technologies Dropdown */}
          <div className="relative group">
            <button
              className={`flex items-center ${
                activeSection === "technologies"
                  ? "text-[#0f0987] font-bold"
                  : "text-gray-700"
              } hover:text-[#0f0987] text-lg font-semibold`}
              onClick={() => {
                if (activeSection === "technologies") {
                  setActiveSection(""); // Close if clicking again
                  setIsTechnologiesOpen(false);
                } else {
                  setActiveSection("technologies");
                  setIsTechnologiesOpen(true);
                  setIsServicesOpen(false); // Close Services
                }
              }}
            >
              Technologies <IoMdArrowDropdown className="ml-1 text-2xl" />
            </button>
            {isTechnologiesOpen && activeSection === "technologies" && (
              <div className="absolute group-hover:block z-10">
                <div className="fixed w-full left-0 bg-gray mt-4 py-3">
                  <Technologies />
                </div>
              </div>
            )}
          </div>

          <Link
            className={`${
              activeSection === "careers"
                ? "text-[#0f0987] font-bold"
                : "text-gray-700"
            } hover:text-[#0f0987] text-lg font-semibold`}
            to="/careers"
            onClick={() => handleNavClick("careers")}
          >
            Careers
          </Link>
        </nav>

        {/* Contact Button */}
        {/* <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 hidden md:block text-lg font-semibold">
          LET'S TALK
        </button> */}
        <div>&nbsp;</div>
      </header>

      {/* Sidebar (for small screens) */}
      <div
        className={`fixed top-0 left-0 h-full w-75 bg-white shadow-lg p-6 transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-50 overflow-y-auto`}
      >
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-gray-700"
          onClick={() => setIsSidebarOpen(false)}
        >
          <FaTimes size={20} />
        </button>

        {/* Sidebar Navigation */}
        <nav className="flex flex-col space-y-4">
        <Link
            className={`${
              activeSection === "home"
                ? "text-[#0f0987] font-bold"
                : "text-gray-700"
            } hover:text-[#0f0987] text-lg font-semibold`}
            to="/"
            onClick={() => handleNavClick("home")}
          >
            Home
          </Link>

          <Link
            className={`${
              activeSection === "about"
                ? "text-[#0f0987] font-bold"
                : "text-gray-700"
            } hover:text-[#0f0987] text-lg font-semibold`}
            to="/about"
            onClick={() => handleNavClick("about")}
          >
            About Us
          </Link>

          {/* Services Dropdown */}
          <div>
            <button
              className="flex items-center justify-between w-full text-gray-700 hover:text-[#0f0987] text-lg font-semibold"
              onClick={() => setIsServicesOpen(!isServicesOpen)}
            >
              Services <IoMdArrowDropdown className=" text-2xl" />
            </button>
            {isServicesOpen && <ServiceCard />}
          </div>

          {/* Technologies Dropdown */}
          <div>
            <button
              className="flex items-center justify-between w-full text-gray-700 hover:text-[#0f0987] text-lg font-semibold"
              onClick={() => setIsTechnologiesOpen(!isTechnologiesOpen)}
            >
              Technologies <IoMdArrowDropdown className="text-2xl" />
            </button>
            {isTechnologiesOpen && <Technologies />}
          </div>

          <Link
            className={`${
              activeSection === "careers"
                ? "text-[#0f0987] font-bold"
                : "text-gray-700"
            } hover:text-[#0f0987] text-lg font-semibold`}
            to="/careers"
            onClick={() => handleNavClick("careers")}
          >
            Careers
          </Link>
        </nav>
      </div>

      {/* Overlay (click outside to close sidebar) */}
      {isSidebarOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-40"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}
    </>
  );
};

export default Header;
