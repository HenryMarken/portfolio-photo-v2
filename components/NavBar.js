import React, { useState } from "react";

const NavBar = () => {
  const [mobileButtonMenu, isMobileButtonMenu] = useState("hidden");

  const handleButtonClick = () => {
    if (mobileButtonMenu === "hidden") {
      isMobileButtonMenu("");
    } else {
      isMobileButtonMenu("hidden");
    }
  };

  return (
    //navbar goes here
    <nav className="bg-white">
      {/* we can also change the width of the navbar here with either max-w-6xl or p-8 these are just random numbers but one is for width of the scree nadn one is padding the text*/}
      {/* this justifys all the children of this div with space between */}

      <div className="flex md:flex-col md:justify-center items-center justify-between py-8 font-playfair">
        {/* Secondary Navigation */}
        <div className="px-10 md:text-4xl text-2xl md:py-5">
          <a href="#">Henry Marken</a>
        </div>
        <div className="hidden text-xl py-10 md:block items-center space-x-1">
          <a href="#" className="py-5 px-3 text-xl">
            About
          </a>
          <a href="#" className="py-3 px-3 text-xl">
            Portfolio
          </a>
          <a href="#" className="py-3 px-3 text-xl">
            Contact
          </a>
        </div>

        {/* Mobile Button*/}
        <div className="md:hidden flex justify-end px-10">
          <button className="mobile-menu-button" onClick={handleButtonClick}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={mobileButtonMenu}>
        <a
          href="#"
          className="block py-2 px-10 text-sm hover:bg-gray-200 text-lg font-playfair text-center transition duration-300"
        >
          Portfolio
        </a>
        <a
          href="#"
          className="block py-2 px-10 text-sm hover:bg-gray-200 text-lg font-playfair text-center transition duration-300"
        >
          About
        </a>
        <a
          href="#"
          className="block py-2 px-10 text-sm hover:bg-gray-200 text-lg font-playfair text-center transition duration-300"
        >
          Contact
        </a>
      </div>
    </nav>
  );
};

export default NavBar;