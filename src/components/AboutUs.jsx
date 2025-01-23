import React from 'react';

const AboutUs = () => {
  return (
    <div className="flex flex-col md:flex-row items-center p-6 bg-white rounded-lg shadow-lg w-full mx-auto my-10">
      {/* Image Section */}
      <img
        src="https://www.shutterstock.com/image-illustration/drug-manufacturing-process-conveyor-medical-260nw-2462200277.jpg" 
        alt="Product"
        className="w-full md:w-1/3 rounded-lg mb-4 md:mb-0 md:mr-6"
      />
      {/* Text Section */}
      <div className="md:w-2/3">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">About Us</h2>
        <p className="text-sm text-gray-600 mb-4">
          Global Calcium is one of the leading API manufacturing companies
          situated in Bangalore, India, specialized in Specialty API's,
          Benzodiazepines, Ophthalmics, Oncology, Chelated Minerals, and Organic
          Mineral Salts of Aspartate, Citrate, Gluconate, Lactate, and more.
        </p>
        <p className="text-sm text-gray-600 mb-6">
          The company has 14 manufacturing plants with more than 1400+ fully
          trained employees and sells its products through various distribution
          channels in 80 countries.
        </p>
        <div className="flex gap-4">
          <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
