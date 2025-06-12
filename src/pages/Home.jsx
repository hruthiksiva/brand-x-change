import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="space-y-24">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-primary/10 to-accent/5 py-24">
        <div className="absolute inset-0 bg-grid-neutral-900/[0.04] bg-[size:60px_60px]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-jakarta font-bold text-neutral-900 mb-6">
              Transform Your Brand Identity
            </h1>
            <p className="max-w-2xl mx-auto text-lg sm:text-xl font-inter text-neutral-600 mb-8">
              Discover and acquire premium brand identities that elevate your business. Connect with talented designers and find the perfect match for your vision.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/listings"
                className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-primary text-white font-inter font-medium hover:bg-primary/90 transition-colors duration-200"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                Browse Listings
              </Link>
              <Link
                to="/consultation"
                className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-white text-neutral-900 font-inter font-medium hover:bg-neutral-50 transition-colors duration-200 border border-neutral-200"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                Request Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-jakarta font-bold text-neutral-900 mb-4">
            Why Choose BrandXChange?
          </h2>
          <p className="max-w-2xl mx-auto font-inter text-neutral-600">
            We provide a seamless platform for buying and selling brand identities, backed by quality assurance and expert support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="group p-6 rounded-2xl bg-white hover:bg-neutral-50 transition-colors duration-200 border border-neutral-200">
            <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-200">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-xl font-jakarta font-semibold text-neutral-900 mb-2">
              Quality Assurance
            </h3>
            <p className="font-inter text-neutral-600">
              Every brand identity is thoroughly vetted to ensure the highest quality standards and unique designs.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="group p-6 rounded-2xl bg-white hover:bg-neutral-50 transition-colors duration-200 border border-neutral-200">
            <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-200">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-jakarta font-semibold text-neutral-900 mb-2">
              Secure Transactions
            </h3>
            <p className="font-inter text-neutral-600">
              Our platform ensures safe and secure transactions with escrow protection for both buyers and sellers.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="group p-6 rounded-2xl bg-white hover:bg-neutral-50 transition-colors duration-200 border border-neutral-200">
            <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-200">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-jakarta font-semibold text-neutral-900 mb-2">
              Expert Support
            </h3>
            <p className="font-inter text-neutral-600">
              Get assistance from our team of experts throughout your brand identity acquisition journey.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-primary/5 via-primary/10 to-accent/5 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-jakarta font-bold text-neutral-900 mb-4">
            Ready to Transform Your Brand?
          </h2>
          <p className="max-w-2xl mx-auto font-inter text-neutral-600 mb-8">
            Join our community of designers and businesses to start your brand transformation journey today.
          </p>
          <Link
            to="/signup"
            className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-primary text-white font-inter font-medium hover:bg-primary/90 transition-colors duration-200"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
            </svg>
            Create Account
          </Link>
        </div>
      </section>
    </div>
  );
} 