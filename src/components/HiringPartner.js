import React from 'react';
import { useEnquiry } from './EnquiryContext';

const HiringPartner = () => {
  const { openEnquiryModal } = useEnquiry();

  const partners = [
    { name: 'Reliance', logo: '🏢' },
    { name: 'Mahindra', logo: '🚗' },
    { name: 'TCS', logo: '💼' },
    { name: 'Infosys', logo: '🌐' },
    { name: 'Wipro', logo: '💻' },
    { name: 'HCL Tech', logo: '⚡' },
    { name: 'Tech Mahindra', logo: '🔧' },
    { name: 'L&T', logo: '🏗️' },
    { name: 'HDFC Bank', logo: '🏦' },
    { name: 'ICICI Bank', logo: '💳' },
    { name: 'Bajaj', logo: '🏍️' },
    { name: 'Godrej', logo: '🏠' }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Hiring Partners
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our graduates are working at top companies across India. Join our network and get placed at your dream company.
          </p>
        </div>

        {/* Partner Logos Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 mb-16">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition duration-300 flex flex-col items-center justify-center hover-lift"
            >
              <div className="text-3xl mb-2">{partner.logo}</div>
              <div className="text-sm font-semibold text-gray-800 text-center">{partner.name}</div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-white rounded-xl shadow-lg p-8 card-modern">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary-600"style={{ color: '#009933' }}>95%</div>
              <div className="text-lg font-semibold text-gray-800">Placement Rate</div>
              <div className="text-gray-600">Students placed within 6 months</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary-600"style={{ color: '#009933' }}>₹8.5L</div>
              <div className="text-lg font-semibold text-gray-800">Average Package</div>
              <div className="text-gray-600">Starting salary for our graduates</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary-600"style={{ color: '#009933' }}>500+</div>
              <div className="text-lg font-semibold text-gray-800">Partner Companies</div>
              <div className="text-gray-600">Actively hiring our students</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Start Your Career Journey?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Join thousands of successful graduates who have transformed their careers with our industry-focused training programs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={openEnquiryModal}
              className="px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition duration-300"
              style={{ backgroundColor: '#ECC820', color: '#212121' }}
            >
              View Placement Records
            </button>
            <button 
              onClick={openEnquiryModal}
              className="text-white px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition duration-300"
              style={{ backgroundColor: '#009933' }}
            >
              Talk to Counsellor
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HiringPartner;
