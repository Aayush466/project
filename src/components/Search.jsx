import React from "react";

const Search = () => {
    // Array of image URLs and corresponding text
    const images = [
        { src: "https://mubychemicals.com/assets/images/Pharmaceuticals.jpg", text: "PHARMACEUTICALS" },
        { src: "https://globalcalcium.com/img/certificate/12.jpg", text: "API" },
        { src: "https://mubychemicals.com/assets/images/Nutraceuticals.jpg", text: "NUTRACEUTICALS" },
        { src: "https://mubychemicals.com/assets/images/Speciality-Chemicals.jpg", text: "SPECIALITY CHEMICALS" },
        { src: "https://mubychemicals.com/assets/images/Mineral-Fortifiers.jpg", text: "MINERAL FORTIFIERS" }
    ];

    return (
        <div className="w-full h-auto py-10">
            <div className="flex flex-col items-center mt-10">
                <h5 className="text-[60px] text-blue-600 font-bold">Products </h5>
                <h1 className="text-[30px]  text-black">What we offer </h1>
            </div>
            <div className="px-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 ml-10 mr-10 mt-6">
                    {images.map((image, index) => (
                        <div
                            key={index}
                            className="relative w-full transform transition-all duration-300 hover:scale-105"
                        >
                            <img
                                src={image.src}
                                alt={`Image ${index + 1}`}
                                className="w-full h-64 object-cover rounded-md shadow-md transition-all duration-300 ease-in-out transform hover:scale-110"
                            />
                            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-xl font-bold rounded-md opacity-0 transition-opacity duration-300 ease-in-out hover:opacity-100">
                                {image.text}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Search;
