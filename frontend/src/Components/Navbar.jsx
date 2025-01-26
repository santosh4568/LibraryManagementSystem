import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext'; // Import Auth Context

const Navbar = () => {
  const navigate = useNavigate(); // Navigation hook
  const { auth, clearAuth } = useAuth(); // Access auth state and updater

  return (
    <nav className="navbar navbar-expand-lg" style={{ background: 'linear-gradient(to right, #2c3e50, #3498db)', height: '80px' }}>
      <div className="container-fluid">
        {/* Brand/Logo */}
        <Link className="navbar-brand text-white" to="/">
          <i className="fas fa-book-reader me-2"></i>
          MyLibrary
        </Link>

        {/* Mobile Toggle Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div className="collapse navbar-collapse" id="navbarContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          </ul>

          {/* Search Bar */}
          <form className="d-flex align-items-center gap-2" style={{ height: '80px' }}>
            <div className="d-flex">
              <input
                className="form-control"
                type="search"
                placeholder="Search books..."
                aria-label="Search"
                style={{ width: '200px' }}
              />
              <button
                className="btn btn-outline-light ms-2"
                type="submit"
                style={{ width: '80px' }}
              >
                Search
              </button>
            </div>
          </form>

          {/* Auth Links */}
          <ul className="navbar-nav ms-auto">
            {!auth ? (
              <>
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/login">Login</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/register">Register</Link>
                </li>
              </>
            ) : (
              <>
              <li className="nav-item">
                {auth.role === 'Admin' && (<Link className="nav-link text-white" to="/admin">{auth.name} ({auth.role})</Link>)}
                {auth.role === 'Student' && (<Link className="nav-link text-white" to="/student">{auth.name} ({auth.role})</Link>)}
                {auth.role === 'Teacher' && (<Link className="nav-link text-white" to="/teacher">{auth.name} ({auth.role})</Link>)}
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/logout">Logout</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
