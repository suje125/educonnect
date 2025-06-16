import Image from 'next/image'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'For Universities – Expand Your Reach in India',
  description: 'Register your university for our education fairs. Connect directly with Indian students. Cost-effective recruitment and event management.',
}

export default function UniversitiesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[60vh] bg-blue-600">
        <div className="absolute inset-0">
          <Image
            src="https://placehold.co/1920x1080/2563eb/ffffff?text=For+Universities"
            alt="For Universities - Expand Your Reach in India"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        <div className="relative h-full flex items-center justify-center text-center text-white">
          <div className="max-w-4xl px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">For Universities</h1>
            <p className="text-xl md:text-2xl">Expand Your Reach in India</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Connect Section */}
        <section className="mb-16 text-center">
          <h2 className="text-3xl font-bold mb-6">Connect with Thousands of Indian Students</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            We invite accredited international universities to participate in our education fairs, hosted in top Indian cities and online.
          </p>
        </section>

        {/* Why Partner Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Why Partner With Us?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Large Student Pool</h3>
              <p className="text-gray-700">Access to a large pool of qualified, interested students</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Top Cities</h3>
              <p className="text-gray-700">Events in top cities like Mumbai, Delhi, Bangalore, Pune</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Digital Promotion</h3>
              <p className="text-gray-700">Promotion through digital, school, and college networks</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Direct Engagement</h3>
              <p className="text-gray-700">Direct student engagement and application support</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Affordable Packages</h3>
              <p className="text-gray-700">Affordable packages starting from just custom quote</p>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Services We Offer to Universities</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Event Setup</h3>
              <p className="text-gray-700">Event booth setup & logistics</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Student Targeting</h3>
              <p className="text-gray-700">Targeted student invitations</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Lead Management</h3>
              <p className="text-gray-700">Lead collection & post-fair follow-up</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Local Support</h3>
              <p className="text-gray-700">Local support staff during fairs</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Branding</h3>
              <p className="text-gray-700">Branding on all marketing material</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center bg-blue-50 p-12 rounded-lg">
          <h2 className="text-3xl font-bold mb-4">Ready to Expand in India?</h2>
          <p className="text-lg text-gray-700 mb-8">Join our network of international universities and connect with qualified Indian students</p>
          <a href="/register-fair" className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition">
            Register Your University Now
          </a>
        </section>
      </div>
    </div>
  )
} 