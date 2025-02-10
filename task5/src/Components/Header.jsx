import React, { useState } from "react";
import Logo from "../assets/logos.png";
import { ChevronDown } from "lucide-react";
export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className=" fixed w-full z-20 top-0 start-0 border-b border-gray-200">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* Logo Section */}
        <a href="" className="flex items-center space-x-2">
          <img src={Logo} className="h-8" alt="Monotree Logo" />
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden inline-flex items-center p-2 w-10 h-10 justify-center text-gray-500 rounded-lg hover:bg-gray-100"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>

        {/* Navigation Links and Buttons */}
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } w-full md:flex md:w-auto md:order-1 md:items-center md:justify-between md:flex-grow md:ml-8`}
        >
          {/* Main Navigation */}
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium md:flex-row md:space-x-6 md:mt-0 md:border-0 md:bg-white">
            <li className="relative group">
              <button className="flex items-center py-2 px-3 text-gray-700">
                Product
                <ChevronDown className="h-5 w-8 pl-1 pt-1"></ChevronDown>
              </button>
            </li>
            <li>
              <a
                href="#why"
                className="block py-2 px-3 text-gray-700 hover:text-gray-900"
              >
                Why us
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="block py-2 px-3 text-gray-700 hover:text-gray-900"
              >
                About us
              </a>
            </li>
            <li>
              <a
                href="#cases"
                className="block py-2 px-3 text-gray-700 hover:text-gray-900"
              >
                Cases
              </a>
            </li>
            <li>
              <a
                href="#blog"
                className="block py-2 px-3 text-gray-700 hover:text-gray-900"
              >
                Blog
              </a>
            </li>
          </ul>

          {/* Right Side Buttons */}
          <div className="flex flex-col md:flex-row items-center mt-4 md:mt-0 md:space-x-4">
            <button className="w-full md:w-auto px-4 py-2 bg-gray-100 text-gray-700 hover:bg-gray-200 rounded-lg">
              Book a demo
            </button>
            <button className="w-full md:w-auto mt-2 md:mt-0 flex items-center justify-center text-gray-700">
              English <ChevronDown className="h-5 w-8 pl-1 pt-1"></ChevronDown>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
