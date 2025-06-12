import React from 'react';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-jakarta font-bold text-neutral-900 mb-6">
          Empowering Brand Growth Through Innovation
        </h1>
        <p className="text-xl font-inter text-neutral-600 max-w-3xl mx-auto">
          BrandXChange is your trusted marketplace for brand assets, trademarks, and business names. We connect creators, buyers, and consultants in a secure, professional environment.
        </p>
      </div>

      {/* Mission Section */}
      <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <h2 className="text-3xl font-jakarta font-bold text-neutral-900 mb-6">Our Mission</h2>
          <p className="font-inter text-neutral-600 mb-6">
            We're on a mission to revolutionize how brands are bought, sold, and developed. Our platform makes it easier than ever to find the perfect brand identity, secure valuable trademarks, and connect with expert consultants.
          </p>
          <p className="font-inter text-neutral-600">
            Whether you're looking to launch a new brand, expand your portfolio, or sell your existing brand assets, BrandXChange provides the tools and support you need to succeed.
          </p>
        </div>
        <div className="bg-neutral-50 rounded-2xl p-8">
          <div className="grid grid-cols-2 gap-6">
            <div className="text-center">
              <div className="text-4xl font-jakarta font-bold text-primary mb-2">1000+</div>
              <p className="font-inter text-neutral-600">Active Listings</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-jakarta font-bold text-primary mb-2">500+</div>
              <p className="font-inter text-neutral-600">Verified Sellers</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-jakarta font-bold text-primary mb-2">50+</div>
              <p className="font-inter text-neutral-600">Expert Consultants</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-jakarta font-bold text-primary mb-2">98%</div>
              <p className="font-inter text-neutral-600">Satisfaction Rate</p>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-jakarta font-bold text-neutral-900 mb-8 text-center">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-xl font-jakarta font-semibold text-neutral-900 mb-2">Brand Marketplace</h3>
            <p className="font-inter text-neutral-600">
              Buy and sell brand assets, trademarks, and business names in a secure, professional environment.
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
              </svg>
            </div>
            <h3 className="text-xl font-jakarta font-semibold text-neutral-900 mb-2">Expert Consultation</h3>
            <p className="font-inter text-neutral-600">
              Connect with experienced brand consultants for guidance on brand development and strategy.
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-xl font-jakarta font-semibold text-neutral-900 mb-2">Legal Protection</h3>
            <p className="font-inter text-neutral-600">
              Secure your brand with trademark registration and legal documentation services.
            </p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-primary/5 rounded-2xl p-8 text-center">
        <h2 className="text-3xl font-jakarta font-bold text-neutral-900 mb-4">Ready to Get Started?</h2>
        <p className="font-inter text-neutral-600 mb-8 max-w-2xl mx-auto">
          Join our community of brand creators, buyers, and consultants. Start your journey today.
        </p>
        <div className="flex justify-center space-x-4">
          <Link
            to="/signup"
            className="inline-flex items-center px-6 py-3 rounded-xl bg-primary text-white font-inter font-semibold hover:bg-primary/90 transition-colors duration-200"
          >
            Create Account
          </Link>
          <Link
            to="/listings"
            className="inline-flex items-center px-6 py-3 rounded-xl border-2 border-primary text-primary font-inter font-semibold hover:bg-primary/5 transition-colors duration-200"
          >
            Browse Listings
          </Link>
        </div>
      </div>
    </div>
  );
} 