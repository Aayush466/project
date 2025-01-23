import React, { useState, useEffect } from "react";

const ImageSlider = () => {
  const images = [
    "https://medicalbuyer.co.in/wp-content/uploads/2024/11/Indias-USD-70B-MedTech-pharma-industry-to-double-by-2030.jpg",
    "https://pharmaceuticals.gov.in/sites/default/files/PTUAS.jpg",
    "https://www.compliancequest.com/wp-content/uploads/2023/11/qa-and-qc-in-pharmaceutical-industry.jpg",
    "https://www.alten.pt/wp-content/uploads/sites/11/2021/06/por_210518_digital_pa_quality-control_web.png"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to go to the previous image
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Function to go to the next image
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Auto-rotate functionality using setInterval
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000); // Change slide every 3 seconds (3000ms)

    // Cleanup interval when component unmounts
    return () => clearInterval(interval);
  }, [currentIndex]); // Depend on currentIndex to reset the interval when the index changes

  return (
    <div className="relative w-full max-w-full mx-auto">
      {/* Image Display */}
      <div className="overflow-hidden rounded-lg shadow-lg">
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="w-full h-[425px] object-cover transition-all duration-500"
        />
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition"
      >
        &#10094;
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition"
      >
        &#10095;
      </button>

      {/* Dots for current slide  */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full cursor-pointer transition-all ${
              currentIndex === index ? "bg-white" : "bg-gray-400"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
