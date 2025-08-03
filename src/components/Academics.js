import React, { useEffect } from 'react';
import { useEnquiry } from './EnquiryContext';

const Academics = () => {
  const { openEnquiryModal } = useEnquiry();

  const departments = [
    {
      name: "School of Engineering",
      programs: ["Computer Science", "Mechanical Engineering", "Electrical Engineering", "Civil Engineering"],
      icon: "⚙️",
      color: "bg-blue-100 text-blue-600"
    },
    {
      name: "School of Business",
      programs: ["MBA", "BBA", "Finance", "Marketing"],
      icon: "💼",
      color: "bg-green-100 text-green-600"
    },
    {
      name: "School of Arts & Sciences",
      programs: ["Psychology", "English Literature", "Mathematics", "Physics"],
      icon: "🎨",
      color: "bg-purple-100 text-purple-600"
    },
    {
      name: "School of Law",
      programs: ["LLB", "LLM", "Corporate Law", "Criminal Law"],
      icon: "⚖️",
      color: "bg-yellow-100 text-yellow-600"
    },
    {
      name: "School of Design",
      programs: ["Graphic Design", "Fashion Design", "Interior Design", "Architecture"],
      icon: "🎯",
      color: "bg-pink-100 text-pink-600"
    },
    {
      name: "School of Media & Communication",
      programs: ["Journalism", "Mass Communication", "Digital Media", "Public Relations"],
      icon: "🗞️",
      color: "bg-red-100 text-red-600"
    },
   
  ];
  
  const academicFeatures = [
    {
      title: "Research Excellence",
      description: "Leading research programs with state-of-the-art laboratories",
      icon: "🔬"
    },
    {
      title: "Industry Partnerships",
      description: "Collaborations with top companies for internships and placements",
      icon: "🤝"
    },
    {
      title: "Global Exchange",
      description: "Student exchange programs with international universities",
      icon: "🌍"
    },
    {
      title: "Expert Faculty",
      description: "World-class professors and industry professionals",
      icon: "👨‍🏫"
    },
    {
      title: "Modern Campus",
      description: "Smart classrooms, Wi-Fi enabled campus and digital infrastructure",
      icon: "🏫"
    },
    {
      title: "24/7 Library Access",
      description: "Digital and physical library resources available around the clock",
      icon: "📚"
    },
    {
      title: "Innovation Hub",
      description: "Incubation centers for startups and student-led projects",
      icon: "🚀"
    },
    {
      title: "On-Campus Accommodation",
      description: "Fully furnished hostels with all modern amenities and 24/7 security",
      icon: "🛏️"
    }
    
  ];
  

  // Scroll animation effect
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="academics" className="bg-gradient-to-b from-gray-50 to-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 animate-on-scroll">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Academic Excellence
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our comprehensive range of academic programs designed to prepare you for success in your chosen field.
          </p>
        </div>

        {/* Academic Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {academicFeatures.map((feature, index) => (
            <div 
              key={index}
              className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition duration-300 animate-on-scroll"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Schools and Departments */}
        <div className="animate-on-scroll">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-10">
            Schools & Departments
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {departments.map((dept, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition duration-300 overflow-hidden animate-on-scroll"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="p-6">
                  <div className={`w-16 h-16 ${dept.color} rounded-full flex items-center justify-center text-2xl mb-4`}>
                    {dept.icon}
                  </div>
                  
                  <h4 className="text-xl font-bold text-gray-900 mb-4">{dept.name}</h4>
                  
                  <div className="space-y-2">
                    {dept.programs.map((program, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-600">
                        <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                        </svg>
                        {program}
                      </div>
                    ))}
                  </div>
                  
                  <button 
                    onClick={openEnquiryModal}
                    className="mt-6 w-full text-white py-2 rounded-lg hover:opacity-90 transition duration-200 font-medium"
                    style={{ backgroundColor: '#009933' }}
                  >
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-on-scroll">
          <div className="rounded-2xl p-8 text-white" style={{ backgroundColor: '#212121' }}>
            <h3 className="text-2xl font-bold mb-4">Ready to Start Your Academic Journey?</h3>
            <p className="opacity-80 mb-6 max-w-2xl mx-auto">
              Join thousands of students who have chosen COER University for their higher education. 
              Discover programs that align with your career goals and aspirations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={openEnquiryModal}
                className="text-white px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition duration-200"
                style={{ backgroundColor: '#009933' }}
              >
                Apply Now
              </button>
              <button 
                onClick={openEnquiryModal}
                className="px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition duration-200"
                style={{ backgroundColor: '#ECC820', color: '#212121' }}
              >
                Download Brochure
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Academics;
