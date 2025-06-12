import React, { createContext, useContext, useState, useEffect } from 'react';
import { 
  getAuth, 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signOut, 
  onAuthStateChanged,
  updateProfile,
  sendEmailVerification,
  sendPasswordResetEmail,
  applyActionCode,
  verifyPasswordResetCode,
  confirmPasswordReset
} from 'firebase/auth';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import { db } from '../firebase';

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const auth = getAuth();

  async function signup(email, password, displayName, mobileNumber) {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(userCredential.user, { displayName });
      
      // Send email verification
      await sendEmailVerification(userCredential.user);
      
      // Create user document in Firestore
      await setDoc(doc(db, 'users', userCredential.user.uid), {
        uid: userCredential.user.uid,
        email: email,
        displayName: displayName,
        mobileNumber: mobileNumber,
        createdAt: new Date().toISOString(),
        listings: [],
        emailVerified: false
      });

      // Sign out the user until they verify their email
      await signOut(auth);
      
      return userCredential.user;
    } catch (error) {
      throw error;
    }
  }

  async function login(email, password) {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      
      // Check if email is verified
      if (!userCredential.user.emailVerified) {
        // Send verification email again
        await sendEmailVerification(userCredential.user);
        // Sign out the user
        await signOut(auth);
        throw new Error('Please verify your email before signing in. A new verification email has been sent.');
      }
      
      return userCredential.user;
    } catch (error) {
      throw error;
    }
  }

  async function logout() {
    try {
      await signOut(auth);
    } catch (error) {
      throw error;
    }
  }

  async function sendVerificationEmail() {
    try {
      if (auth.currentUser) {
        await sendEmailVerification(auth.currentUser);
      }
    } catch (error) {
      throw error;
    }
  }

  async function sendPasswordReset(email) {
    try {
      await sendPasswordResetEmail(auth, email);
    } catch (error) {
      throw error;
    }
  }

  async function verifyEmail(code) {
    try {
      await applyActionCode(auth, code);
    } catch (error) {
      throw error;
    }
  }

  async function resetPassword(code, newPassword) {
    try {
      await confirmPasswordReset(auth, code, newPassword);
    } catch (error) {
      throw error;
    }
  }

  async function verifyPasswordResetCode(code) {
    try {
      return await verifyPasswordResetCode(auth, code);
    } catch (error) {
      throw error;
    }
  }

  async function updateUserProfile(profile) {
    try {
      await updateProfile(auth.currentUser, { displayName: profile.displayName });
      // Update user document in Firestore
      await setDoc(doc(db, 'users', auth.currentUser.uid), {
        displayName: profile.displayName,
        mobileNumber: profile.mobileNumber
      }, { merge: true });
    } catch (error) {
      throw error;
    }
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        // Check if email is verified
        if (!user.emailVerified) {
          // Sign out if email is not verified
          await signOut(auth);
          setCurrentUser(null);
          setLoading(false);
          return;
        }

        // Fetch additional user data from Firestore
        const userDoc = await getDoc(doc(db, 'users', user.uid));
        if (userDoc.exists()) {
          setCurrentUser({ ...user, ...userDoc.data() });
        } else {
          setCurrentUser(user);
        }
      } else {
        setCurrentUser(null);
      }
      setLoading(false);
    });

    return unsubscribe;
  }, [auth]);

  const value = {
    currentUser,
    signup,
    login,
    logout,
    updateUserProfile,
    sendVerificationEmail,
    sendPasswordReset,
    verifyEmail,
    resetPassword,
    verifyPasswordResetCode
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
} 