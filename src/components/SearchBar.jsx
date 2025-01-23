import React from 'react';
import { IoReorderThree } from 'react-icons/io5'; // Importing the hamburger icon from React Icons
import { IoCall } from 'react-icons/io5'; // Importing the phone icon from Ionicons

const SearchBar = () => {
  return (
    <>
      <div className='flex items-center justify-between space-x-4 w-full bg-blue-500 p-4'>
        {/* Hamburger Icon section */}
        <div className='flex items-center space-x-2'>
          <IoReorderThree className='text-white text-3xl' /> {/* Render the hamburger icon */}
        </div>
        
        {/* Search bar section */}
        <div className='flex-1'>
          <div className='group'>
            <input 
              type="text"
              placeholder='search'
              className='w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-1 focus:border-primary bg-white' 
            />
          </div>
        </div>
        
        {/* Customer support section */}
        <div className='text-sm text-gray-200'>
          <div className='flex items-center space-x-2'>
            <IoCall className='text-white text-xl' /> {/* Render the phone icon */}
            <div className='flex flex-col items-start'>
              <span>Customer Support:</span>
              <span>8806424938</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchBar;


