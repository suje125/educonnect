import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Services – Connecting Students & Global Universities',
  description: 'We organize international education fairs in India to connect top universities with Indian students. Explore our student support, university partnerships, and event solutions.',
}

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="relative h-[70vh] bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="absolute inset-0">
          <Image
            src="https://placehold.co/1920x1080/2563eb/ffffff?text=Our+Services"
            alt="Our Services - Education Fair Platform"
            fill
            className="object-cover mix-blend-overlay"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-800/80"></div>
        </div>
        <div className="relative h-full flex items-center justify-center text-center text-white">
          <div className="max-w-4xl px-4">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
              Our Services
            </h1>
            <p className="text-2xl md:text-3xl font-light text-blue-100">
              Connecting Students & Global Universities
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        {/* For Students Section */}
        <section className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">🎓 For Students</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide comprehensive support to help you achieve your international education goals
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Meet Global Universities</h3>
              <p className="text-gray-600 leading-relaxed">
                Connect with representatives from top universities in USA, UK, Canada, Australia & more
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Admissions Support</h3>
              <p className="text-gray-600 leading-relaxed">
                Get on-the-spot admissions interviews and personalized counseling
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Scholarship Guidance</h3>
              <p className="text-gray-600 leading-relaxed">
                Learn about available scholarships and funding opportunities
              </p>
            </div>
          </div>
        </section>

        {/* For Universities Section */}
        <section className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">🏫 For Universities</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive solutions to help you connect with qualified Indian students
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Fair Organization</h3>
              <p className="text-gray-600 leading-relaxed">
                Organize education fairs across major Indian cities
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Student Connection</h3>
              <p className="text-gray-600 leading-relaxed">
                Connect directly with thousands of pre-verified Indian students
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Digital Promotion</h3>
              <p className="text-gray-600 leading-relaxed">
                Promote academic programs through targeted digital campaigns
              </p>
            </div>
          </div>
        </section>

        {/* Event Services Section */}
        <section className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">📅 Event Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              End-to-end event management and support services
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Event Planning</h3>
              <p className="text-gray-600 leading-relaxed">
                Complete event planning and venue management
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Student Targeting</h3>
              <p className="text-gray-600 leading-relaxed">
                Targeted student invitations and promotion
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Lead Generation</h3>
              <p className="text-gray-600 leading-relaxed">
                Comprehensive lead generation and CRM
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-600 to-blue-800 p-12 text-center">
          <div className="absolute inset-0 bg-[url('https://placehold.co/1920x1080/2563eb/ffffff?text=Pattern')] opacity-10"></div>
          <div className="relative">
            <h2 className="text-4xl font-bold mb-6 text-white">Ready to Get Started?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join our network of international universities and connect with qualified Indian students
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/register-fair"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-blue-600 bg-white rounded-xl hover:bg-blue-50 transition-colors duration-300"
              >
                Register Your University
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white border-2 border-white rounded-xl hover:bg-white/10 transition-colors duration-300"
              >
                Contact Us
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

const mainServices = [
  {
    icon: 'fas fa-university',
    title: 'University Recruitment',
    description: 'Connect with qualified Indian students and expand your international student base.',
    link: '/services/university-recruitment'
  },
  {
    icon: 'fas fa-graduation-cap',
    title: 'Student Counseling',
    description: 'Expert guidance for students on course selection, applications, and scholarships.',
    link: '/services/student-counseling'
  },
  {
    icon: 'fas fa-handshake',
    title: 'Education Fair Organization',
    description: 'Professional organization of education fairs across major Indian cities.',
    link: '/services/fair-organization'
  }
];

const universityServices = [
  {
    title: 'Student Recruitment Services',
    features: [
      'Access to qualified Indian students',
      'Pre-screened student applications',
      'Direct student interaction at fairs',
      'Post-fair follow-up support',
      'Market insights and trends'
    ]
  },
  {
    title: 'Fair Participation Benefits',
    features: [
      'Prime booth locations',
      'Marketing and promotion',
      'Student registration management',
      'On-site support staff',
      'Post-event analytics'
    ]
  }
];

const studentServices = [
  {
    icon: 'fas fa-search',
    title: 'University Search',
    description: 'Find the perfect university from our extensive database of international institutions.'
  },
  {
    icon: 'fas fa-file-alt',
    title: 'Application Support',
    description: 'Get help with university applications, documents, and requirements.'
  },
  {
    icon: 'fas fa-money-bill-wave',
    title: 'Scholarship Guidance',
    description: 'Discover and apply for scholarships and financial aid opportunities.'
  }
];

const process = [
  {
    title: 'Registration',
    description: 'Register for the education fair as a university or student.'
  },
  {
    title: 'Preparation',
    description: 'Get ready with your requirements and documents.'
  },
  {
    title: 'Fair Participation',
    description: 'Attend the fair and connect with universities or students.'
  },
  {
    title: 'Follow-up',
    description: 'Receive support for applications and admissions.'
  }
]; 