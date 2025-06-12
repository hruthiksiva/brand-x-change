import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Profile from './pages/Profile.jsx';
import PublicProfile from './pages/PublicProfile';
import Listing from './pages/Listing';
import Listings from './pages/Listings';
import CreateListing from './pages/CreateListing';
import Consultation from './pages/Consultation.jsx';
import About from './pages/About';
import Contact from './pages/Contact';
import PasswordReset from './pages/PasswordReset';
import EmailVerification from './pages/EmailVerification';
import PrivateRoute from './components/PrivateRoute';
import { useAuth } from './contexts/AuthContext';

// Configure future flags for React Router v7
const router = {
  future: {
    v7_startTransition: true,
    v7_relativeSplatPath: true
  }
};

function AppRoutes() {
  const { currentUser } = useAuth();

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/password-reset" element={<PasswordReset />} />
      <Route path="/verify-email" element={<EmailVerification />} />
      <Route path="/profile" element={<PrivateRoute><Profile /></PrivateRoute>} />
      <Route path="/profile/:id" element={<PublicProfile />} />
      <Route path="/listings" element={<Listings />} />
      <Route path="/listings/:id" element={<Listing />} />
      <Route path="/create-listing" element={<PrivateRoute><CreateListing /></PrivateRoute>} />
      <Route path="/consultation" element={<PrivateRoute><Consultation /></PrivateRoute>} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default function App() {
  return (
    <Router>
      <AuthProvider>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow">
            <AppRoutes />
          </main>
          <Footer />
        </div>
      </AuthProvider>
    </Router>
  );
} 