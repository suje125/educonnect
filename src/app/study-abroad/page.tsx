import Link from 'next/link';
import Image from 'next/image';

export default function StudyAbroad() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/images/study-abroad-hero.jpg"
            alt="Study Abroad Fair India 2025 - Meet Global Universities"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Study Abroad Fair 2025
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Join India's largest international education fair. Meet top universities, get free counseling, and explore scholarship opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/register-fair"
              className="bg-blue-600 text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Register for Fair
            </Link>
            <Link
              href="/book-consultation"
              className="bg-white text-blue-600 px-8 py-3 rounded-md text-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Free Counseling
            </Link>
          </div>
        </div>
      </section>

      {/* Fair Locations */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Education Fair Locations in India</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {locations.map((location, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src={location.image}
                    alt={`Education Fair in ${location.city} - ${location.date}`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{location.city}</h3>
                  <p className="text-gray-600 mb-4">{location.date}</p>
                  <p className="text-gray-600 mb-4">{location.venue}</p>
                  <Link
                    href={location.link}
                    className="inline-block bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors"
                  >
                    Register Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Participating Countries */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Countries Participating in Education Fair</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {countries.map((country, index) => (
              <div key={index} className="text-center">
                <div className="relative h-32 mb-4">
                  <Image
                    src={country.flag}
                    alt={`Study in ${country.name} - Education Fair India 2025`}
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className="text-lg font-semibold mb-2">{country.name}</h3>
                <p className="text-gray-600 text-sm">{country.universities} Universities</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Benefits of Attending Education Fair</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow">
                <div className="text-blue-600 text-4xl mb-4">
                  <i className={benefit.icon}></i>
                </div>
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Meet Top Universities?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Register now for our upcoming education fair and get direct admission to foreign universities. Free counseling and scholarship guidance available.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/register-fair"
              className="bg-white text-blue-600 px-8 py-3 rounded-md text-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Register for Fair
            </Link>
            <Link
              href="/universities"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              View Universities
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

const locations = [
  {
    city: 'Mumbai',
    date: 'March 15-16, 2025',
    venue: 'Grand Hyatt Mumbai',
    image: 'https://placehold.co/800x400/2563eb/ffffff?text=Mumbai+Education+Fair',
    link: '/events/mumbai'
  },
  {
    city: 'Delhi',
    date: 'March 22-23, 2025',
    venue: 'The Leela Palace',
    image: 'https://placehold.co/800x400/2563eb/ffffff?text=Delhi+Education+Fair',
    link: '/events/delhi'
  },
  {
    city: 'Bangalore',
    date: 'March 29-30, 2025',
    venue: 'The Oberoi',
    image: 'https://placehold.co/800x400/2563eb/ffffff?text=Bangalore+Education+Fair',
    link: '/events/bangalore'
  }
];

const countries = [
  {
    name: 'United States',
    flag: 'https://placehold.co/200x100/2563eb/ffffff?text=USA',
    universities: '50+'
  },
  {
    name: 'Canada',
    flag: 'https://placehold.co/200x100/2563eb/ffffff?text=Canada',
    universities: '40+'
  },
  {
    name: 'United Kingdom',
    flag: 'https://placehold.co/200x100/2563eb/ffffff?text=UK',
    universities: '35+'
  },
  {
    name: 'Australia',
    flag: 'https://placehold.co/200x100/2563eb/ffffff?text=Australia',
    universities: '30+'
  },
  {
    name: 'Germany',
    flag: 'https://placehold.co/200x100/2563eb/ffffff?text=Germany',
    universities: '25+'
  },
  {
    name: 'Ireland',
    flag: 'https://placehold.co/200x100/2563eb/ffffff?text=Ireland',
    universities: '20+'
  },
  {
    name: 'New Zealand',
    flag: 'https://placehold.co/200x100/2563eb/ffffff?text=New+Zealand',
    universities: '15+'
  },
  {
    name: 'Singapore',
    flag: 'https://placehold.co/200x100/2563eb/ffffff?text=Singapore',
    universities: '10+'
  }
];

const benefits = [
  {
    icon: 'fas fa-handshake',
    title: 'Direct University Interaction',
    description: 'Meet university representatives face-to-face and get your questions answered instantly.'
  },
  {
    icon: 'fas fa-file-alt',
    title: 'On-spot Applications',
    description: 'Apply to universities directly at the fair and get instant feedback on your application.'
  },
  {
    icon: 'fas fa-money-bill-wave',
    title: 'Scholarship Opportunities',
    description: 'Discover exclusive scholarships and financial aid options for Indian students.'
  },
  {
    icon: 'fas fa-graduation-cap',
    title: 'Free Counseling',
    description: 'Get expert guidance on course selection, admission requirements, and visa process.'
  },
  {
    icon: 'fas fa-users',
    title: 'Network with Students',
    description: 'Connect with other students planning to study abroad and share experiences.'
  },
  {
    icon: 'fas fa-book',
    title: 'Course Information',
    description: 'Learn about various courses, their requirements, and career prospects.'
  }
]; 