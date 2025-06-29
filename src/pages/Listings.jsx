import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { collection, getDocs, query, orderBy, doc, getDoc, where } from 'firebase/firestore';
import { db } from '../firebase';

export default function Listings() {
  const [listings, setListings] = useState([]);
  const [filteredListings, setFilteredListings] = useState([]);
  const [sellers, setSellers] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Listings' },
    { id: 'domain', name: 'Domains' },
    { id: 'brand', name: 'Brands' },
    { id: 'website', name: 'Websites' },
    { id: 'other', name: 'Others' }
  ];

  useEffect(() => {
    const fetchListingsAndSellers = async () => {
      try {
        // Fetch all listings
        const listingsQuery = query(collection(db, 'listings'), orderBy('createdAt', 'desc'));
        const querySnapshot = await getDocs(listingsQuery);
        const listingsData = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setListings(listingsData);
        setFilteredListings(listingsData);

        // Fetch seller information for each listing
        const sellerIds = [...new Set(listingsData.map(listing => listing.sellerId))];
        const sellersData = {};
        
        for (const sellerId of sellerIds) {
          const sellerDoc = await getDoc(doc(db, 'users', sellerId));
          if (sellerDoc.exists()) {
            sellersData[sellerId] = sellerDoc.data();
          }
        }
        
        setSellers(sellersData);
      } catch (error) {
        setError('Failed to fetch listings');
        console.error('Error fetching listings:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchListingsAndSellers();
  }, []);

  useEffect(() => {
    if (activeCategory === 'all') {
      setFilteredListings(listings);
    } else {
      const filtered = listings.filter(listing => listing.category === activeCategory);
      setFilteredListings(filtered);
    }
  }, [activeCategory, listings]);

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-red-50 border border-red-200 rounded-xl p-4">
          <p className="text-red-700">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-jakarta font-bold text-neutral-900 mb-2">Browse Listings</h1>
        <p className="font-inter text-neutral-600">Discover amazing IP assets and services</p>
      </div>

      {/* Category Filters */}
      <div className="mb-8">
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-lg font-inter text-sm font-medium transition-colors duration-200 ${
                activeCategory === category.id
                  ? 'bg-primary text-white'
                  : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredListings.map((listing) => (
          <Link
            key={listing.id}
            to={`/listings/${listing.id}`}
            className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-200"
          >
            <div className="relative h-48 bg-neutral-100">
              <img
                src={listing.images?.[0] || 'https://placehold.co/600x400'}
                alt={listing.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between mb-2">
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary">
                  {listing.category.charAt(0).toUpperCase() + listing.category.slice(1)}
                </span>
                <span className="text-2xl font-jakarta font-bold text-primary">
                  ${listing.price}
                </span>
              </div>
              <h2 className="text-xl font-jakarta font-semibold text-neutral-900 mb-2 line-clamp-1">
                {listing.title}
              </h2>
              <p className="font-inter text-neutral-600 mb-4 line-clamp-2">
                {listing.description}
              </p>
              <div className="flex items-center space-x-2 text-neutral-600">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <Link
                  to={`/user/${listing.sellerId}`}
                  className="text-sm text-gray-600 hover:text-primary transition-colors"
                  onClick={(e) => e.stopPropagation()}
                >
                  {sellers[listing.sellerId]?.displayName || 'Loading...'}
                </Link>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {filteredListings.length === 0 && (
        <div className="text-center py-12">
          <h3 className="text-xl font-jakarta font-semibold text-neutral-900 mb-2">No listings found</h3>
          <p className="font-inter text-neutral-600 mb-6">
            {activeCategory === 'all' 
              ? "Be the first to create a listing!"
              : `No ${activeCategory} listings available at the moment.`}
          </p>
          <Link
            to="/create-listing"
            className="inline-flex items-center px-6 py-3 rounded-xl bg-primary text-white font-inter font-semibold hover:bg-primary/90 transition-colors duration-200"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
            </svg>
            Create Listing
          </Link>
        </div>
      )}
    </div>
  );
} 