'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    country: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Get in touch with us for education fair participation, student recruitment, or general inquiries
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2">For Universities</h3>
                  <p className="text-gray-600 mb-4">
                    Interested in participating in our education fairs or recruiting Indian students?
                  </p>
                  <div className="flex items-center text-gray-600 mb-2">
                    <i className="fas fa-envelope w-6"></i>
                    <span>universities@educonnect.com</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <i className="fas fa-phone w-6"></i>
                    <span>+91 1234567890</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">For Students</h3>
                  <p className="text-gray-600 mb-4">
                    Have questions about studying abroad or attending our education fairs?
                  </p>
                  <div className="flex items-center text-gray-600 mb-2">
                    <i className="fas fa-envelope w-6"></i>
                    <span>students@educonnect.com</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <i className="fas fa-phone w-6"></i>
                    <span>+91 1234567891</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Office Locations</h3>
                  <div className="space-y-4">
                    {offices.map((office, index) => (
                      <div key={index} className="text-gray-600">
                        <p className="font-semibold">{office.city}</p>
                        <p>{office.address}</p>
                        <p>Phone: {office.phone}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-8">Send us a Message</h2>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    required
                  >
                    <option value="">Select a subject</option>
                    <option value="university">University Partnership</option>
                    <option value="student">Student Inquiry</option>
                    <option value="fair">Education Fair Information</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Participate in Our Education Fair?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join India's largest international education fair and connect with top universities or find your dream study destination.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/register-fair"
              className="bg-white text-blue-600 px-8 py-3 rounded-md text-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Register for Fair
            </Link>
            <Link
              href="/services"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              View Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

const offices = [
  {
    city: 'Mumbai',
    address: '123 Business Park, Andheri East, Mumbai - 400093',
    phone: '+91 1234567892'
  },
  {
    city: 'Delhi',
    address: '456 Corporate Plaza, Connaught Place, Delhi - 110001',
    phone: '+91 1234567893'
  },
  {
    city: 'Bangalore',
    address: '789 Tech Hub, Koramangala, Bangalore - 560034',
    phone: '+91 1234567894'
  }
];

const faqs = [
  {
    question: 'How can universities participate in the education fair?',
    answer: 'Universities can participate by registering through our website or contacting our university relations team. We offer various participation packages with different benefits.'
  },
  {
    question: 'What services do you offer to students?',
    answer: 'We provide comprehensive services including university search, application support, scholarship guidance, and visa assistance. Students can also attend our education fairs to meet university representatives.'
  },
  {
    question: 'How can I register for the education fair?',
    answer: 'Students can register for the fair through our website. Registration is free and gives you access to meet university representatives, attend seminars, and get free counseling.'
  },
  {
    question: 'Do you offer any scholarships?',
    answer: 'Yes, we work with various universities to provide scholarship opportunities for Indian students. Our counselors can guide you through the scholarship application process.'
  }
]; 