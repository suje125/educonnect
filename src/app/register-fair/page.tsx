'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function RegisterFairPage() {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    universityName: '',
    country: '',
    website: '',
    contactName: '',
    email: '',
    phone: '',
    eventType: 'physical',
    preferredCities: [] as string[],
    additionalInfo: '',
  })
  const [errors, setErrors] = useState<Record<string, string>>({})

  const validateForm = () => {
    const newErrors: Record<string, string> = {}
    
    if (!formData.universityName.trim()) {
      newErrors.universityName = 'University name is required'
    }
    
    if (!formData.country.trim()) {
      newErrors.country = 'Country is required'
    }
    
    if (!formData.website.trim()) {
      newErrors.website = 'Website is required'
    } else if (!/^https?:\/\/.+/.test(formData.website)) {
      newErrors.website = 'Please enter a valid website URL'
    }
    
    if (!formData.contactName.trim()) {
      newErrors.contactName = 'Contact name is required'
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required'
    } else if (!/^\+?[\d\s-]{10,}$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number'
    }
    
    if (formData.preferredCities.length === 0) {
      newErrors.preferredCities = 'Please select at least one city'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }
    
    setIsSubmitting(true)
    
    try {
      // Here you would typically send the data to your API
      const response = await fetch('/api/register-fair', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
      
      if (!response.ok) {
        throw new Error('Registration failed')
      }
      
      // Show success message and redirect
      alert('Registration successful! We will contact you soon.')
      router.push('/thank-you')
    } catch (error) {
      console.error('Registration error:', error)
      alert('Registration failed. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  const handleCheckboxChange = (city: string) => {
    setFormData(prev => ({
      ...prev,
      preferredCities: prev.preferredCities.includes(city)
        ? prev.preferredCities.filter(c => c !== city)
        : [...prev.preferredCities, city]
    }))
    // Clear error when user makes a selection
    if (errors.preferredCities) {
      setErrors(prev => ({
        ...prev,
        preferredCities: ''
      }))
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Hero Section */}
      <div className="relative h-[40vh] w-full overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1920&auto=format&fit=crop"
          alt="Education Fair"
          fill
          className="object-cover brightness-[0.3]"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/80" />
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-5xl font-bold mb-4">Register for Education Fair</h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Connect with qualified Indian students and expand your international presence
            </p>
          </motion.div>
        </div>
      </div>

      {/* Form Section */}
      <div className="max-w-5xl mx-auto px-4 py-16">
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="bg-white/5 backdrop-blur-lg rounded-3xl shadow-2xl p-8 border border-white/10"
        >
          {/* University Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold mb-8 text-white flex items-center">
              <span className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mr-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </span>
              University Information
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <label htmlFor="universityName" className="block text-sm font-medium text-gray-300 mb-2">
                  University Name *
                </label>
                <input
                  type="text"
                  id="universityName"
                  name="universityName"
                  value={formData.universityName}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 rounded-xl bg-white/5 border ${
                    errors.universityName ? 'border-red-500' : 'border-white/10'
                  } focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-white placeholder-gray-400`}
                  placeholder="Enter university name"
                />
                {errors.universityName && (
                  <p className="mt-2 text-sm text-red-400">{errors.universityName}</p>
                )}
              </div>

              <div>
                <label htmlFor="country" className="block text-sm font-medium text-gray-300 mb-2">
                  Country *
                </label>
                <input
                  type="text"
                  id="country"
                  name="country"
                  value={formData.country}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 rounded-xl bg-white/5 border ${
                    errors.country ? 'border-red-500' : 'border-white/10'
                  } focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-white placeholder-gray-400`}
                  placeholder="Enter country"
                />
                {errors.country && (
                  <p className="mt-2 text-sm text-red-400">{errors.country}</p>
                )}
              </div>

              <div className="md:col-span-2">
                <label htmlFor="website" className="block text-sm font-medium text-gray-300 mb-2">
                  Website *
                </label>
                <input
                  type="url"
                  id="website"
                  name="website"
                  value={formData.website}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 rounded-xl bg-white/5 border ${
                    errors.website ? 'border-red-500' : 'border-white/10'
                  } focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-white placeholder-gray-400`}
                  placeholder="https://www.example.com"
                />
                {errors.website && (
                  <p className="mt-2 text-sm text-red-400">{errors.website}</p>
                )}
              </div>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold mb-8 text-white flex items-center">
              <span className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mr-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </span>
              Contact Information
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <label htmlFor="contactName" className="block text-sm font-medium text-gray-300 mb-2">
                  Contact Name *
                </label>
                <input
                  type="text"
                  id="contactName"
                  name="contactName"
                  value={formData.contactName}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 rounded-xl bg-white/5 border ${
                    errors.contactName ? 'border-red-500' : 'border-white/10'
                  } focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-white placeholder-gray-400`}
                  placeholder="Enter contact name"
                />
                {errors.contactName && (
                  <p className="mt-2 text-sm text-red-400">{errors.contactName}</p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 rounded-xl bg-white/5 border ${
                    errors.email ? 'border-red-500' : 'border-white/10'
                  } focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-white placeholder-gray-400`}
                  placeholder="Enter email address"
                />
                {errors.email && (
                  <p className="mt-2 text-sm text-red-400">{errors.email}</p>
                )}
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 rounded-xl bg-white/5 border ${
                    errors.phone ? 'border-red-500' : 'border-white/10'
                  } focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-white placeholder-gray-400`}
                  placeholder="Enter phone number"
                />
                {errors.phone && (
                  <p className="mt-2 text-sm text-red-400">{errors.phone}</p>
                )}
              </div>
            </div>
          </motion.div>

          {/* Event Details */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold mb-8 text-white flex items-center">
              <span className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mr-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </span>
              Event Details
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-4">
                  Event Type *
                </label>
                <div className="space-y-4">
                  {[
                    { value: 'physical', label: 'Physical Event', icon: '🏢' },
                    { value: 'virtual', label: 'Virtual Event', icon: '💻' },
                    { value: 'hybrid', label: 'Hybrid Event', icon: '🌐' },
                  ].map((type) => (
                    <label
                      key={type.value}
                      className={`flex items-center p-4 rounded-xl border transition-all duration-300 cursor-pointer ${
                        formData.eventType === type.value
                          ? 'bg-blue-600/20 border-blue-500'
                          : 'bg-white/5 border-white/10 hover:bg-white/10'
                      }`}
                    >
                      <input
                        type="radio"
                        name="eventType"
                        value={type.value}
                        checked={formData.eventType === type.value}
                        onChange={handleInputChange}
                        className="hidden"
                      />
                      <span className="text-2xl mr-3">{type.icon}</span>
                      <span className="text-white">{type.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-4">
                  Preferred Cities *
                </label>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { name: 'Mumbai', icon: '🌆' },
                    { name: 'Delhi', icon: '🏛️' },
                    { name: 'Bangalore', icon: '💻' },
                    { name: 'Chennai', icon: '🌊' },
                    { name: 'Hyderabad', icon: '🏰' },
                    { name: 'Kolkata', icon: '🎭' },
                  ].map((city) => (
                    <label
                      key={city.name}
                      className={`flex items-center p-4 rounded-xl border transition-all duration-300 cursor-pointer ${
                        formData.preferredCities.includes(city.name)
                          ? 'bg-blue-600/20 border-blue-500'
                          : 'bg-white/5 border-white/10 hover:bg-white/10'
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={formData.preferredCities.includes(city.name)}
                        onChange={() => handleCheckboxChange(city.name)}
                        className="hidden"
                      />
                      <span className="text-2xl mr-3">{city.icon}</span>
                      <span className="text-white">{city.name}</span>
                    </label>
                  ))}
                </div>
                {errors.preferredCities && (
                  <p className="mt-2 text-sm text-red-400">{errors.preferredCities}</p>
                )}
              </div>
            </div>
          </motion.div>

          {/* Additional Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold mb-8 text-white flex items-center">
              <span className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mr-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              </span>
              Additional Information
            </h2>
            <div>
              <textarea
                id="additionalInfo"
                name="additionalInfo"
                value={formData.additionalInfo}
                onChange={handleInputChange}
                rows={4}
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-white placeholder-gray-400"
                placeholder="Enter any additional information or requirements"
              />
            </div>
          </motion.div>

          {/* Submit Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex justify-center"
          >
            <button
              type="submit"
              disabled={isSubmitting}
              className={`px-8 py-4 bg-blue-600 text-white rounded-xl font-medium transition-all duration-300 ${
                isSubmitting
                  ? 'opacity-50 cursor-not-allowed'
                  : 'hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-500/25 transform hover:-translate-y-0.5'
              }`}
            >
              {isSubmitting ? (
                <span className="flex items-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Submitting...
                </span>
              ) : (
                'Submit Registration'
              )}
            </button>
          </motion.div>
        </motion.form>
      </div>
    </div>
  )
} 