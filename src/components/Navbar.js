import React, { useState } from 'react';
import { useEnquiry } from './EnquiryContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { openEnquiryModal } = useEnquiry();

  const handleApplyClick = () => {
    openEnquiryModal();
  };

  return (
    <>
      <nav className="text-white fixed w-full z-50 shadow-lg" style={{ backgroundColor: '#212121' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo Section */}
            <div className="flex items-center space-x-3 w-full">
              <img
                src="/coer-logo.png"
                alt="COER University Logo"
                className="h-[5rem] w-[5rem] object-contain text-xl"
              />
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="hover:opacity-80 transition duration-200 text-sm font-medium border-b-2 border-transparent hover:border-white">
                Home
              </a>
              <a href="#academics" className="hover:opacity-80 transition duration-200 text-sm font-medium border-b-2 border-transparent hover:border-white">
                Academics
              </a>
              <button 
                onClick={handleApplyClick}
                className="text-white px-4 py-2 rounded text-sm font-medium hover:opacity-90 transition duration-200"
                style={{ backgroundColor: '#009933', border: '2px solid #ECC820' }}
              >
                Apply Now
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-white hover:opacity-80 focus:outline-none focus:opacity-80"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 shadow-lg" style={{ backgroundColor: '#212121' }}>
              <a href="#home" className="block px-3 py-2 text-sm font-medium text-white hover:opacity-80 rounded-md transition duration-200">
                Home
              </a>
              <a href="#academics" className="block px-3 py-2 text-sm font-medium text-white hover:opacity-80 rounded-md transition duration-200">
                Academics
              </a>
              <button 
                onClick={handleApplyClick}
                className="px-6 py-2.5 text-white text-base font-medium rounded-xl hover:opacity-90 transition duration-200 mt-2"
                style={{ backgroundColor: '#009933', border: '2px solid #ECC820' }}
              >
                Apply Now
              </button>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;