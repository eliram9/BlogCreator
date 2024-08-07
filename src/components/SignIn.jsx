import React, { useState } from 'react';
import { getAuth } from 'firebase/auth';
import { signInWithEmailPassword } from '../firebase';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailPassword(email, password);
      const auth = getAuth();
      const user = auth.currentUser;
      console.log('User signed in:', user);
    } catch (error) {
      console.error('Error signing in with email and password:', error);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <form onSubmit={handleSubmit} className="flex flex-col items-center space-y-2">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="p-2 border rounded"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="p-2 border rounded"
        />
        <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">
          Sign In
        </button>
      </form>
    </div>
  );
};

export default SignIn;