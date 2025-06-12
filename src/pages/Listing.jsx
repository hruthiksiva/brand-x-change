import React from 'react';
import { useParams } from 'react-router-dom';

export default function Listing() {
  const { id } = useParams();

  // This is a placeholder. In a real application, you would fetch the listing data
  // from your backend using the id parameter.
  const listing = {
    id,
    title: 'Premium Brand Identity',
    description: 'A complete brand identity package including logo, color palette, and typography. This comprehensive package is perfect for businesses looking to establish a strong and memorable brand presence in their market.',
    price: 5000,
    seller: 'John Doe',
    category: 'Brand Identity',
    createdAt: '2024-03-20',
    images: [
      'https://placehold.co/600x400',
      'https://placehold.co/600x400',
      'https://placehold.co/600x400',
    ],
    features: [
      'Custom Logo Design',
      'Brand Color Palette',
      'Typography System',
      'Brand Guidelines',
      'Social Media Templates',
      'Business Card Design',
    ],
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
        {/* Image Gallery */}
        <div className="relative h-[400px] bg-neutral-100">
          <div className="absolute inset-0 flex items-center justify-center">
            <img
              src={listing.images[0]}
              alt={listing.title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute bottom-4 left-4 right-4 flex space-x-2 overflow-x-auto pb-2">
            {listing.images.map((image, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 border-white shadow-sm"
              >
                <img
                  src={image}
                  alt={`${listing.title} - Image ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="p-8">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
            {/* Main Content */}
            <div className="flex-1 space-y-8">
              <div>
                <h1 className="text-3xl md:text-4xl font-jakarta font-bold text-neutral-900 mb-4">
                  {listing.title}
                </h1>
                <div className="flex items-center space-x-4 text-neutral-600 font-inter">
                  <span className="flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    {listing.seller}
                  </span>
                  <span className="flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                    </svg>
                    {listing.category}
                  </span>
                  <span className="flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {listing.createdAt}
                  </span>
                </div>
              </div>

              <div>
                <h2 className="text-xl font-jakarta font-semibold text-neutral-900 mb-4">Description</h2>
                <p className="font-inter text-neutral-600 leading-relaxed">{listing.description}</p>
              </div>

              <div>
                <h2 className="text-xl font-jakarta font-semibold text-neutral-900 mb-4">Features</h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {listing.features.map((feature, index) => (
                    <li key={index} className="flex items-center space-x-3 font-inter text-neutral-600">
                      <svg className="w-5 h-5 text-accent flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Sidebar */}
            <div className="md:w-80 space-y-6">
              <div className="bg-neutral-50 rounded-xl p-6">
                <div className="mb-6">
                  <span className="text-3xl font-jakarta font-bold text-neutral-900">${listing.price}</span>
                </div>
                <button className="w-full bg-primary text-white px-6 py-3 rounded-xl font-inter font-semibold hover:bg-primary/90 transition-all duration-300 hover:shadow-lg">
                  Contact Seller
                </button>
                <button className="w-full mt-3 border-2 border-primary text-primary px-6 py-3 rounded-xl font-inter font-semibold hover:bg-primary/5 transition-all duration-300">
                  Save for Later
                </button>
              </div>

              <div className="bg-neutral-50 rounded-xl p-6">
                <h3 className="text-lg font-jakarta font-semibold text-neutral-900 mb-4">Seller Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-primary font-jakarta font-semibold">
                        {listing.seller.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <p className="font-inter font-medium text-neutral-900">{listing.seller}</p>
                      <p className="font-inter text-sm text-neutral-600">Verified Seller</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-center space-x-4 pt-4 border-t border-neutral-200">
                    <button className="flex items-center space-x-2 text-neutral-600 hover:text-primary transition-colors duration-200">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                      <span className="font-inter">Message</span>
                    </button>
                    <button className="flex items-center space-x-2 text-neutral-600 hover:text-primary transition-colors duration-200">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                      </svg>
                      <span className="font-inter">Follow</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 