import React from 'react';
import { useAuth } from '../context/AuthContext.jsx';

export default function Profile() {
  const { currentUser } = useAuth();

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Profile</h1>
      <div className="bg-white shadow rounded-lg p-6">
        <div className="space-y-4">
          <div>
            <h2 className="text-lg font-semibold text-gray-700">Display Name</h2>
            <p className="text-gray-600">{currentUser.displayName}</p>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-gray-700">Email</h2>
            <p className="text-gray-600">{currentUser.email}</p>
          </div>
        </div>
      </div>
    </div>
  );
} 