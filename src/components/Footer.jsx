import React from "react";
import { IoMail, IoCall } from "react-icons/io5"; // Import email and phone icons

const Footer = () => {
  return (
    <footer className="bg-blue-500 text-white py-6 mt-3">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="#home" className="hover:text-blue-300">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-blue-300">
                About Us
              </a>
            </li>
            <li>
              <a href="#products" className="hover:text-blue-300">
                Our Products
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-blue-300">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Top Categories */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Top Categories</h3>
          <ul className="space-y-2">
            <li>
              <a href="#pharma" className="hover:text-blue-300">
                Pharmaceuticals
              </a>
            </li>
            <li>
              <a href="#nutra" className="hover:text-blue-300">
                Nutraceuticals
              </a>
            </li>
            <li>
              <a href="#chemicals" className="hover:text-blue-300">
                Specialty Chemicals
              </a>
            </li>
            <li>
              <a href="#fortifiers" className="hover:text-blue-300">
                Mineral Fortifiers
              </a>
            </li>
          </ul>
        </div>

        {/* Specialization */}
        <div>
          <h3 className="text-lg font-semibold mb-4">We Specialize In</h3>
          <p className="text-sm">
            We manufacture Bulk Drugs/API, Excipients, Pharmaceuticals
            (IP/BP/USP/NF/Ph. Eur., JP), Specialty Chemicals, Mineral Fortifiers,
            Food Chemical Codex (FCC), and Flavour chemicals.
            <br />
            Our facility is cGMP, GLP, ISO 9001, ISO 14001 certified.
          </p>
        </div>

        {/* Contact Details */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Details</h3>
          <p className="text-sm">
            <strong>Muby Chemicals</strong>
            <br />
            S-8, Sarifa Mansion, 2nd Flank Road, S.H. Marg, Chinch Bunder,
            Mumbai - 400 009, India.
          </p>
          <p className="text-sm mt-2 flex items-center">
            <IoMail className="mr-2" /> {/* Mail icon to the left */}
            <strong>Email:</strong>{" "}
            <a href="mailto:info@mubychemicals.com" className="hover:text-blue-300">
              info@mubychemicals.com
            </a>
          </p>
          <p className="text-sm mt-2 flex items-center">
            <IoCall className="mr-2" /> {/* Call icon to the left */}
            <strong>Phone:</strong>{" "}
            <a href="tel:+912223770100" className="hover:text-blue-300">
              +91-22-23770100
            </a>
          </p>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t mt-6 pt-4 text-center text-sm text-gray-200">
        © 2023 Muby Chemicals. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
