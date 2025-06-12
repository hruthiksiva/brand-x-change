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