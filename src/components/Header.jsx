import React, { useState } from 'react';
import Logo from '../assets/Logo.png';

const Header = () => {
  const [activeLink, setActiveLink] = useState('Home'); // State to track active link

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <>
      <div className="bg-blue-700 text-red-600 w-full h-7"></div>
      <header className="bg-white shadow sticky top-0 z-50">
        <div className="container mx-auto flex items-center justify-between p-4">
          {/* Logo Section */}
          <a href="/" className="flex items-center">
            <img
              src={Logo}
              alt="logo img"
              className="max-w-[150px] w-full pl-[30px] h-[50px] drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)]"
            />
          </a>

          {/* Navigation Section */}
          <nav className="hidden md:flex space-x-6 pr-24">
            {['Home', 'About', 'Our Product', 'Contact'].map((item, index) => (
              <a
                key={index}
                href={`#${item.toLowerCase().replace(' ', '')}`} // Target the id for each section
                onClick={() => handleLinkClick(item)} // Set active link on click
                className={`${
                  activeLink === item
                    ? 'text-blue-500' // Active link color
                    : 'text-gray-600 hover:text-blue-500' // Inactive link with hover effect
                }`}
              >
                {item}
              </a>
            ))}
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
