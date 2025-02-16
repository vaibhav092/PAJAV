import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa"; // Import icons

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-green-100 to-emerald-200 text-black py-4 sm:py-6">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 text-center md:text-left">
          
          {/* PAJAV Info */}
          <div className="mb-4 md:mb-0">
            <h2 className="text-xl sm:text-2xl font-bold text-black">PAJAV</h2>
            <p className="text-xs sm:text-sm mt-1 sm:mt-2 max-w-md mx-auto md:mx-0">
              Extending hope and empowering the future through environmental
              conservation and sustainability.
            </p>
          </div>

          {/* Social Media */}
          <div className="text-center md:text-right">
            <h3 className="text-base sm:text-lg font-semibold text-black">Connect With Us</h3>
            <div className="flex justify-center md:justify-end space-x-4 mt-2 sm:mt-3">
              <a 
                href="#" 
                className="hover:text-blue-700 transition-colors duration-300"
                aria-label="Facebook"
              >
                <FaFacebook className="text-xl sm:text-2xl" />
              </a>
              <a 
                href="#" 
                className="hover:text-pink-500 transition-colors duration-300"
                aria-label="Instagram"
              >
                <FaInstagram className="text-xl sm:text-2xl" />
              </a>
              <a 
                href="#" 
                className="hover:text-blue-500 transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="text-xl sm:text-2xl" />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-gray-400 my-3 sm:my-4" />

        {/* Bottom Section */}
        <div className="text-center text-xs sm:text-sm">
          <p>© {new Date().getFullYear()} PAJAV. All Rights Reserved.</p>
          <p className="mt-1">Together, we can restore nature's balance.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;