import React, { useState, useEffect } from 'react';
import Login from './components/Login';
import SignIn from './components/SignIn';
import { getAuth, signOut } from 'firebase/auth';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
    return unsubscribe;
  }, []);

  const handleLogout = () => {
    const auth = getAuth();
    signOut(auth).then(() => {
      console.log('User signed out');
    }).catch((error) => {
      console.error('Error signing out:', error);
    });
  };

  return (
    <div className="App flex justify-center items-center h-screen">
      {user ? (
        <div className="flex flex-col items-center">
          <h1 className="text-2xl font-bold">Welcome, {user.displayName || user.email}!</h1>
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-4 py-2 rounded mt-4"
          >
            Logout
          </button>
        </div>
      ) : (
        <div className="flex flex-col items-center space-y-4">
          <Login />
          <SignIn />
        </div>
      )}
    </div>
  );
}

export default App;