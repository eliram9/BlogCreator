import React from 'react';
import { getAuth } from 'firebase/auth';
import { signInWithGoogle } from '../firebase';

const Login = () => {
  const handleGoogleSignIn = async () => {
    try {
      await signInWithGoogle();
      const auth = getAuth();
      const user = auth.currentUser;
      console.log('User signed in:', user);
    } catch (error) {
      console.error('Error signing in with Google:', error);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <button
        onClick={handleGoogleSignIn}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Sign in with Google
      </button>
    </div>
  );
};

export default Login;