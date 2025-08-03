import React from 'react';

const Footer = () => {
  return (
    <footer className="text-white py-12" style={{ backgroundColor: '#212121' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* University Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div>
                <img
                  src="/coer-logo.png"
                  alt="COER University Logo"
                  className="h-8 w-8 object-contain"
                />
              </div>
              <div>
                <h3 className="text-lg font-bold">COER University</h3>
                <p className="text-xs opacity-80">Excellence in Education</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Empowering students with quality education and industry-relevant skills to build successful careers and contribute to society.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4" style={{ color: '#ECC820' }}>Quick Links</h4>
            <div className="space-y-2">
              <a href="#about" className="block text-gray-300 hover:text-white text-sm transition duration-200">About Us</a>
              <a href="#academics" className="block text-gray-300 hover:text-white text-sm transition duration-200">Academics</a>
              <a href="#admissions" className="block text-gray-300 hover:text-white text-sm transition duration-200">Admissions</a>
              <a href="#campus" className="block text-gray-300 hover:text-white text-sm transition duration-200">Campus Life</a>
              <a href="#research" className="block text-gray-300 hover:text-white text-sm transition duration-200">Research</a>
            </div>
          </div>

          {/* Programs */}
          <div>
            <h4 className="text-lg font-semibold mb-4" style={{ color: '#ECC820' }}>Programs</h4>
            <div className="space-y-2">
              <a href="#" className="block text-gray-300 hover:text-white text-sm transition duration-200">Engineering</a>
              <a href="#" className="block text-gray-300 hover:text-white text-sm transition duration-200">Management</a>
              <a href="#" className="block text-gray-300 hover:text-white text-sm transition duration-200">Computer Applications</a>
              <a href="#" className="block text-gray-300 hover:text-white text-sm transition duration-200">Pharmacy</a>
              <a href="#" className="block text-gray-300 hover:text-white text-sm transition duration-200">Applied Sciences</a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4" style={{ color: '#ECC820' }}>Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5 opacity-80" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                </svg>
                <span className="text-gray-300 text-sm">COER University Campus</span>
              </div>
              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5 opacity-80" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                </svg>
                <span className="text-gray-300 text-sm">+91 9024160266</span>
              </div>
              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5 opacity-80" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                </svg>
                <span className="text-gray-300 text-sm">info@coer.edu.in</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-600 mt-8 pt-8 text-center">
          <p className="text-gray-300 text-sm">
            © 2025 COER University. All rights reserved. | Privacy Policy | Terms of Service
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;