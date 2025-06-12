import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';

export default function EmailVerification() {
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { sendVerificationEmail } = useAuth();

  async function handleResendVerification() {
    try {
      setError('');
      setMessage('');
      setLoading(true);
      await sendVerificationEmail();
      setMessage('Verification email has been sent. Please check your inbox.');
    } catch (error) {
      setError('Failed to send verification email. Please try again.');
    }
    setLoading(false);
  }

  return (
    <div className="max-w-md mx-auto p-8 bg-white rounded-2xl shadow-sm">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-jakarta font-bold text-neutral-900 mb-2">
          Verify Your Email
        </h2>
        <p className="font-inter text-neutral-600">
          Please verify your email address to access your account. Check your inbox for the verification link.
        </p>
      </div>

      {error && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <p className="font-inter text-sm text-red-700">{error}</p>
            </div>
          </div>
        </div>
      )}

      {message && (
        <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <p className="font-inter text-sm text-green-700">{message}</p>
            </div>
          </div>
        </div>
      )}

      <div className="space-y-6">
        <p className="text-center text-neutral-600">
          Didn't receive the verification email? Check your spam folder or click the button below to resend.
        </p>
        
        <button
          onClick={handleResendVerification}
          disabled={loading}
          className="w-full flex justify-center items-center px-6 py-3 rounded-xl font-inter font-semibold text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
        >
          {loading ? (
            <>
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Sending...
            </>
          ) : (
            'Resend Verification Email'
          )}
        </button>
      </div>
    </div>
  );
} 