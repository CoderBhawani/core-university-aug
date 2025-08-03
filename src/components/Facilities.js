import React from 'react';
import { useEnquiry } from './EnquiryContext';

const   Facilities = () => {
  const facilities = [
    {
      icon: '💻',
      title: 'Modern Computer Labs',
      description: 'Latest hardware and software for hands-on learning'
    },
    {
      icon: '📚',
      title: 'Digital Library',
      description: 'Access to thousands of books and resources'
    },
    {
      icon: '🚀',
      title: 'Project-Based Learning',
      description: 'Real-world projects to build your portfolio'
    },
    {
      icon: '👨‍🏫',
      title: 'Expert Mentorship',
      description: 'Industry professionals guiding your journey'
    },
    {
      icon: '🌐',
      title: 'High-Speed Internet',
      description: 'Reliable connectivity for seamless learning'
    },
    {
      icon: '🏫',
      title: 'Modern Classrooms',
      description: 'Comfortable and well-equipped learning spaces'
    },
    {
      icon: '☕',
      title: 'Student Lounge',
      description: 'Relaxation area for breaks and networking'
    },
    {
      icon: '🚗',
      title: 'Parking Facility',
      description: 'Secure parking space for students and staff'
    }
  ];

  const { openEnquiryModal } = useEnquiry();

  return (
    <section id="facilities" className="bg-gradient-to-b from-gray-50 to-white ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-6">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
            Our Facilities
          </h2>
          <p className="text-gray-600 text-sm max-w-2xl mx-auto">
            Modern facilities designed to enhance your learning experience
          </p>
        </div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
          {facilities.map((facility, index) => (
            <div key={index} className="bg-white rounded-lg p-3 text-center hover:shadow-md transition duration-200 border border-gray-100">
              <div className="text-xl mb-1">{facility.icon}</div>
              <h3 className="font-medium text-gray-900 mb-1 text-xs">{facility.title}</h3>
              <p className="text-gray-600 text-xs leading-tight">{facility.description}</p>
            </div>
          ))}
        </div>

        {/* Campus Tour Section */}
        <div className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Experience Our Campus
              </h3>
              <p className="text-gray-600 text-sm mb-2">
                Visit our modern campus and see these facilities in person.
              </p>
              <div className="flex flex-wrap gap-2 text-xs text-gray-600">
                <span className="bg-gray-100 px-2 py-1 rounded">• Guided tour</span>
                <span className="bg-gray-100 px-2 py-1 rounded">• Meet faculty</span>
                <span className="bg-gray-100 px-2 py-1 rounded">• Explore labs</span>
                <span className="bg-gray-100 px-2 py-1 rounded">• Career guidance</span>
              </div>
            </div>
            <div className="text-center lg:text-right">
              <button 
                onClick={openEnquiryModal}
                className="text-white px-4 py-2 rounded-md font-medium hover:opacity-90 transition duration-200 text-sm"
                style={{ backgroundColor: '#009933' }}
              >
                Schedule Campus Tour
              </button>
              <p className="text-xs text-gray-500 mt-1">Free visit • No obligation</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Facilities;
