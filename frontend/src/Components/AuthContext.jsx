import React, { createContext, useContext, useState, useEffect } from "react";

// Create the AuthContext
const AuthContext = createContext();

// AuthProvider Component
export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(() => {
    // Load initial auth state from localStorage
    const savedAuth = localStorage.getItem("auth");
    return savedAuth ? JSON.parse(savedAuth) : null;
  });

  // Function to update auth state and persist it in localStorage
  const updateAuth = (user) => {
    setAuth(user);
    localStorage.setItem("auth", JSON.stringify(user));
  };

  // Function to clear auth state (logout)
  const clearAuth = () => {
    setAuth(null);
    localStorage.removeItem("auth");
  };

  return (
    <AuthContext.Provider value={{ auth, setAuth: updateAuth, clearAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use AuthContext
export const useAuth = () => useContext(AuthContext);
