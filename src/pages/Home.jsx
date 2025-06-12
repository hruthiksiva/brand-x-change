import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center py-20 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-lg">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Buy and Sell Brand Identities
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
          Your marketplace for premium brand identities, logos, and design assets.
        </p>
        <div className="space-x-4">
          <Link
            to="/signup"
            className="bg-white text-indigo-600 px-8 py-3 rounded-md font-semibold hover:bg-gray-100"
          >
            Get Started
          </Link>
          <Link
            to="/consultation"
            className="border-2 border-white text-white px-8 py-3 rounded-md font-semibold hover:bg-white hover:text-indigo-600"
          >
            Request Consultation
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="text-center p-6 bg-white rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">Premium Brands</h3>
          <p className="text-gray-600">
            Access a curated collection of high-quality brand identities and logos.
          </p>
        </div>
        <div className="text-center p-6 bg-white rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">Secure Transactions</h3>
          <p className="text-gray-600">
            Buy and sell with confidence using our secure payment system.
          </p>
        </div>
        <div className="text-center p-6 bg-white rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">Expert Support</h3>
          <p className="text-gray-600">
            Get professional guidance from our brand identity experts.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center py-16 bg-gray-50 rounded-lg">
        <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
          Join our community of brand creators and buyers. Create your account today
          and start exploring premium brand identities.
        </p>
        <Link
          to="/signup"
          className="bg-indigo-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-indigo-700"
        >
          Create Account
        </Link>
      </section>
    </div>
  );
} 