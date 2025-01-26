import React from 'react'
import { useAuth } from './AuthContext'
import { useNavigate } from 'react-router'

const Logout = () => {
    const navigate = useNavigate();
    const { auth, clearAuth } = useAuth();
    clearAuth();
    // localStorage.removeItem("auth");
    navigate('/');
  return (
    <div>
      
    </div>
  )
}

export default Logout
