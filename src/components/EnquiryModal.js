import React, { useState } from 'react';
import { useEnquiry } from './EnquiryContext';

const EnquiryModal = () => {
  const { isEnquiryModalOpen, closeEnquiryModal } = useEnquiry();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    courseInterest: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const message = `Hello! I'm interested in admission at COER University.

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Course Interest: ${formData.courseInterest}
Please contact me for more information.`;

    const whatsappNumber = "9024160266";
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');

    // Reset form and close modal
    setFormData({ name: '', email: '', phone: '', courseInterest: '' });
    closeEnquiryModal();
  };

  if (!isEnquiryModalOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl max-w-md w-full p-6 relative">
        <button
          onClick={closeEnquiryModal}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold mb-2" style={{ color: '#212121' }}>Admission Enquiry</h2>
          <p className="text-gray-600">Get in touch with COER University</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:border-green-500 focus:outline-none"
            placeholder="Full Name"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:border-green-500 focus:outline-none"
            placeholder="Email Address"
          />
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            required
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:border-green-500 focus:outline-none"
            placeholder="Phone Number"
          />
          <input
            type="text"
            name="courseInterest"
            value={formData.courseInterest}
            onChange={handleInputChange}
            required
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:border-green-500 focus:outline-none"
            placeholder="Course You're Interested In"
          />
          <button
            type="submit"
            className="w-full text-white py-2 rounded-md hover:opacity-90 font-medium"
            style={{ backgroundColor: '#009933' }}
          >
            Send Enquiry via WhatsApp
          </button>
        </form>
      </div>
    </div>
  );
};

export default EnquiryModal;