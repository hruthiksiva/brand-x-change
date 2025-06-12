import React from 'react';
import { Link } from 'react-router-dom';

export default function ListingCard({ listing }) {
  const {
    id,
    title,
    description,
    price,
    imageUrl,
    category,
    createdAt,
  } = listing;

  return (
    <Link
      to={`/listing/${id}`}
      className="block bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
    >
      <div className="relative pb-[60%]">
        <img
          src={imageUrl || '/placeholder-image.jpg'}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover rounded-t-lg"
        />
      </div>
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-semibold text-gray-900 line-clamp-1">
            {title}
          </h3>
          <span className="text-primary-600 font-bold">
            ${price.toLocaleString()}
          </span>
        </div>
        <p className="text-gray-600 text-sm line-clamp-2 mb-2">{description}</p>
        <div className="flex justify-between items-center text-sm text-gray-500">
          <span className="bg-gray-100 px-2 py-1 rounded">
            {category}
          </span>
          <span>
            {new Date(createdAt?.toDate()).toLocaleDateString()}
          </span>
        </div>
      </div>
    </Link>
  );
} 