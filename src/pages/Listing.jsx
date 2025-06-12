import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase';
import { useAuth } from '../contexts/AuthContext';

export default function Listing() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { currentUser } = useAuth();
  const [listing, setListing] = useState(null);
  const [seller, setSeller] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchListingAndSeller = async () => {
      try {
        const listingDoc = await getDoc(doc(db, 'listings', id));
        if (!listingDoc.exists()) {
          setError('Listing not found');
          return;
        }
        const listingData = { id: listingDoc.id, ...listingDoc.data() };
        setListing(listingData);

        // Fetch seller information
        const sellerDoc = await getDoc(doc(db, 'users', listingData.sellerId));
        if (sellerDoc.exists()) {
          setSeller(sellerDoc.data());
        }
      } catch (err) {
        setError('Failed to fetch listing');
        console.error('Error fetching listing:', err);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchListingAndSeller();
    }
  }, [id]);

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

  if (!listing) {
    return null;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Listing Images */}
        <div className="space-y-4">
          {listing.images && listing.images.length > 0 ? (
            <div className="aspect-w-4 aspect-h-3 rounded-xl overflow-hidden">
              <img
                src={listing.images[0]}
                alt={listing.title}
                className="w-full h-full object-cover"
              />
            </div>
          ) : (
            <div className="aspect-w-4 aspect-h-3 rounded-xl bg-gray-100 flex items-center justify-center">
              <span className="text-gray-400">No image available</span>
            </div>
          )}
        </div>

        {/* Listing Details */}
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">{listing.title}</h1>
            <p className="text-2xl font-semibold text-primary mt-2">${listing.price}</p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-900 mb-2">Description</h2>
            <p className="text-gray-600">{listing.description}</p>
          </div>

          {/* Features Section */}
          {listing.features && listing.features.length > 0 && (
            <div>
              <h2 className="text-lg font-semibold text-gray-900 mb-2">Features</h2>
              <ul className="list-disc list-inside space-y-1 text-gray-600">
                {listing.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Supporting Documentation Section */}
          {listing.supportingDocs && (
            <div className="border-t border-gray-200 pt-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-2">Supporting Documentation</h2>
              {listing.supportingDocs.available ? (
                <div className="space-y-2">
                  <p className="text-gray-600">{listing.supportingDocs.description}</p>
                  <div className="flex items-center text-primary">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    <span className="text-sm font-medium">Documentation available upon request</span>
                  </div>
                </div>
              ) : (
                <p className="text-gray-500 italic">No supporting documentation available</p>
              )}
            </div>
          )}

          {/* Usage History Section */}
          {listing.usageHistory && (
            <div className="border-t border-gray-200 pt-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-2">Usage History & Metrics</h2>
              <div className="space-y-4">
                {listing.usageHistory.description && (
                  <div>
                    <h3 className="text-sm font-medium text-gray-700 mb-1">General Description</h3>
                    <p className="text-gray-600">{listing.usageHistory.description}</p>
                  </div>
                )}
                
                {(listing.usageHistory.metrics.traffic || 
                  listing.usageHistory.metrics.revenue || 
                  listing.usageHistory.metrics.brandRecognition) && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {listing.usageHistory.metrics.traffic && (
                      <div>
                        <h3 className="text-sm font-medium text-gray-700 mb-1">Traffic Stats</h3>
                        <p className="text-gray-600">{listing.usageHistory.metrics.traffic}</p>
                      </div>
                    )}
                    {listing.usageHistory.metrics.revenue && (
                      <div>
                        <h3 className="text-sm font-medium text-gray-700 mb-1">Revenue</h3>
                        <p className="text-gray-600">{listing.usageHistory.metrics.revenue}</p>
                      </div>
                    )}
                    {listing.usageHistory.metrics.brandRecognition && (
                      <div className="md:col-span-2">
                        <h3 className="text-sm font-medium text-gray-700 mb-1">Brand Recognition</h3>
                        <p className="text-gray-600">{listing.usageHistory.metrics.brandRecognition}</p>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          )}

          <div>
            <h2 className="text-lg font-semibold text-gray-900 mb-2">Seller</h2>
            {seller ? (
              <Link
                to={`/user/${listing.sellerId}`}
                className="text-primary hover:text-primary/90 transition-colors"
              >
                {seller.displayName}
              </Link>
            ) : (
              <p className="text-gray-600">Loading seller information...</p>
            )}
          </div>

          {currentUser && currentUser.uid !== listing.sellerId && (
            <button
              onClick={() => navigate(`/consultation?listingId=${listing.id}`)}
              className="w-full md:w-auto px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
            >
              Contact Seller
            </button>
          )}
        </div>
      </div>
    </div>
  );
} 