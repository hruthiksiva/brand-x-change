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
              Your Trusted IP Marketplace
            </h1>
            <p className="max-w-2xl mx-auto text-lg sm:text-xl font-inter text-neutral-600 mb-8">
              Buy and sell intellectual property assets with confidence. From trademarks and brand names to domains and patents, we provide a secure platform for IP transactions backed by expert verification.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/listings"
                className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-primary text-white font-inter font-medium hover:bg-primary/90 transition-colors duration-200"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                Browse IP Assets
              </Link>
              <Link
                to="/consultation"
                className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-white text-neutral-900 font-inter font-medium hover:bg-neutral-50 transition-colors duration-200 border border-neutral-200"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                IP Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-jakarta font-bold text-neutral-900 mb-4">
            Why Choose BrandXChange for IP Trading?
          </h2>
          <p className="max-w-2xl mx-auto font-inter text-neutral-600">
            We provide a comprehensive platform for intellectual property transactions, ensuring legal compliance and secure transfers.
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
              Legal Verification
            </h3>
            <p className="font-inter text-neutral-600">
              Every IP asset undergoes thorough legal verification, including trademark searches, domain ownership checks, and patent validation.
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
              Secure Transfer Process
            </h3>
            <p className="font-inter text-neutral-600">
              Our platform ensures secure IP transfers with escrow protection, legal documentation, and proper registration updates.
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
              IP Expert Support
            </h3>
            <p className="font-inter text-neutral-600">
              Access specialized IP consultants for valuation, due diligence, and transfer assistance throughout your transaction.
            </p>
          </div>
        </div>
      </section>

      {/* Asset Types Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-jakarta font-bold text-neutral-900 mb-4">
            Types of IP Assets
          </h2>
          <p className="max-w-2xl mx-auto font-inter text-neutral-600">
            Trade various forms of intellectual property with confidence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 rounded-2xl bg-white border border-neutral-200">
            <h3 className="text-lg font-jakarta font-semibold text-neutral-900 mb-2">Trademarks</h3>
            <p className="font-inter text-neutral-600">Registered and unregistered trademarks, brand names, and logos</p>
          </div>
          <div className="p-6 rounded-2xl bg-white border border-neutral-200">
            <h3 className="text-lg font-jakarta font-semibold text-neutral-900 mb-2">Domain Names</h3>
            <p className="font-inter text-neutral-600">Premium domains with traffic, revenue, or brand value</p>
          </div>
          <div className="p-6 rounded-2xl bg-white border border-neutral-200">
            <h3 className="text-lg font-jakarta font-semibold text-neutral-900 mb-2">Patents</h3>
            <p className="font-inter text-neutral-600">Utility and design patents with market potential</p>
          </div>
          <div className="p-6 rounded-2xl bg-white border border-neutral-200">
            <h3 className="text-lg font-jakarta font-semibold text-neutral-900 mb-2">Copyrights</h3>
            <p className="font-inter text-neutral-600">Creative works, software, and digital assets</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-primary/5 via-primary/10 to-accent/5 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-jakarta font-bold text-neutral-900 mb-4">
            Ready to Trade Your IP Assets?
          </h2>
          <p className="max-w-2xl mx-auto font-inter text-neutral-600 mb-8">
            Join our community of IP owners and buyers. List your assets or find the perfect IP for your business.
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