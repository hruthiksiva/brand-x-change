import React from 'react';
import { useParams } from 'react-router-dom';

export default function Listing() {
  const { id } = useParams();

  // This is a placeholder. In a real application, you would fetch the listing data
  // from your backend using the id parameter.
  const listing = {
    id,
    title: 'Premium Brand Identity',
    description: 'A complete brand identity package including logo, color palette, and typography.',
    price: 5000,
    seller: 'John Doe',
    category: 'Brand Identity',
    createdAt: '2024-03-20'
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white shadow rounded-lg overflow-hidden">
        <div className="p-6">
          <h1 className="text-3xl font-bold mb-4">{listing.title}</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h2 className="text-lg font-semibold text-gray-700 mb-2">Description</h2>
              <p className="text-gray-600">{listing.description}</p>
            </div>
            <div>
              <h2 className="text-lg font-semibold text-gray-700 mb-2">Details</h2>
              <ul className="space-y-2 text-gray-600">
                <li>Price: ${listing.price}</li>
                <li>Seller: {listing.seller}</li>
                <li>Category: {listing.category}</li>
                <li>Listed: {listing.createdAt}</li>
              </ul>
            </div>
          </div>
          <div className="mt-8">
            <button className="w-full bg-indigo-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-indigo-700">
              Contact Seller
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 