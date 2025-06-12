import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext.jsx';

export default function Header() {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  async function handleLogout() {
    try {
      await logout();
      navigate('/signin');
    } catch (error) {
      console.error('Failed to log out:', error);
    }
  }

  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-indigo-600">
            BrandXChange
          </Link>
          <div className="flex items-center space-x-4">
            {currentUser ? (
              <>
                <Link
                  to="/create-listing"
                  className="text-gray-600 hover:text-indigo-600"
                >
                  Create Listing
                </Link>
                <Link
                  to="/profile"
                  className="text-gray-600 hover:text-indigo-600"
                >
                  Profile
                </Link>
                <button
                  onClick={handleLogout}
                  className="text-gray-600 hover:text-indigo-600"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/signin"
                  className="text-gray-600 hover:text-indigo-600"
                >
                  Sign In
                </Link>
                <Link
                  to="/signup"
                  className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700"
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
} 