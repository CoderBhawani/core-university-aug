import React from 'react';

const About = () => {
  const stats = [
    { number: "15K+", label: "Students Enrolled" },
    { number: "75+", label: "Academic Programs" },
    { number: "500+", label: "Expert Faculty" },
    { number: "98%", label: "Graduate Success Rate" },
    { number: "50+", label: "Research Centers" },
    { number: "25+", label: "Years of Excellence" }
  ];

  return (
    <section id="about" className="py-8" bg-white>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#333333' }}>
            About Coer University
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Established with a vision to bridge Eastern wisdom and modern education, Coer University 
            stands as a beacon of academic excellence, cultural heritage, and innovative learning.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-2">
          <div className="space-y-6 animate-on-scroll">
            <div>
              <h3 className="text-2xl font-bold mb-4" style={{ color: '#333333' }}>Our Legacy</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                For over two decades, Coer University has been at the forefront of educational innovation, 
                combining time-honored Eastern philosophical traditions with cutting-edge Western methodologies 
                to create a unique learning environment.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our commitment to excellence has produced leaders, innovators, and scholars who have made 
                significant contributions to society across various fields including business, technology, 
                arts, and social sciences.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4" style={{ color: '#333333' }}>Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To foster holistic development through quality education that integrates cultural wisdom 
                with contemporary knowledge, preparing students to become ethical leaders and global citizens 
                who contribute meaningfully to society.
              </p>
            </div>
          </div>

          <div className="animate-on-scroll">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold mb-6" style={{ color: '#333333' }}>Why Choose Coer University?</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full flex items-center justify-center mt-1" style={{ backgroundColor: '#333333' }}>
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold" style={{ color: '#333333' }}>World-Class Faculty</h4>
                    <p className="text-sm text-gray-600">Learn from renowned professors and industry experts</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full flex items-center justify-center mt-1" style={{ backgroundColor: '#333333' }}>
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold" style={{ color: '#333333' }}>Global Perspective</h4>
                    <p className="text-sm text-gray-600">International partnerships and exchange programs</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full flex items-center justify-center mt-1" style={{ backgroundColor: '#333333' }}>
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold" style={{ color: '#333333' }}>Cultural Integration</h4>
                    <p className="text-sm text-gray-600">Unique blend of Eastern wisdom and Western innovation</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full flex items-center justify-center mt-1" style={{ backgroundColor: '#333333' }}>
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold" style={{ color: '#333333' }}>Career Excellence</h4>
                    <p className="text-sm text-gray-600">98% placement rate with top global companies</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center bg-white rounded-lg p-4 border border-gray-200 animate-on-scroll card-modern"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-2xl font-bold mb-1" style={{ color: '#333333' }}>{stat.number}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;