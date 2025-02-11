import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext'; // Import Auth Context
import {fetchBookByTitle , fetchBookByAuthor , fetchBookByPublisher , fetchBookByLanguage , fetchBookByCategory , fetchBookById} from '../API/BookService'

const Navbar = () => {
  const navigate = useNavigate(); // Navigation hook
  const { auth, clearAuth } = useAuth(); // Access auth state and updater

  const [showModal, setShowModal] = useState(false);
  const [bookDetails, setBookDetails] = useState([]);

  const handleShowModal = (details) => {
    setBookDetails(details);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setBookDetails([]);
  };

  const handleSearch = async (searchType, searchValue) => {
    let response;
    switch (searchType) {
      case 'title':
        response = await fetchBookByTitle(searchValue);
        break;
      case 'author':
        response = await fetchBookByAuthor(searchValue);
        break;
      case 'publisher':
        response = await fetchBookByPublisher(searchValue);
        break;
      case 'language':
        response = await fetchBookByLanguage(searchValue);
        break;
      case 'category':
        response = await fetchBookByCategory(searchValue);
        break;
      case 'id':
        response = await fetchBookById(searchValue);
        break;
      default:
        return;
    }

    // console.log(response.data);
    // console.log(response.data.length);

    if (response.data.length > 0) {
      handleShowModal(response.data);
    }
    else{
      handleShowModal([]);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const searchType = event.target.searchType.value;
    const searchValue = event.target.searchValue.value;
    handleSearch(searchType, searchValue);
  };


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
          <form className="d-flex align-items-center gap-2" style={{ height: '80px' }} onSubmit={handleSubmit}>
            <div className="d-flex">
              <input
                className="form-control"
                name="searchValue"
                type="search"
                placeholder="Search books..."
                aria-label="Search"
                style={{ width: '200px' }}
              />
              <select className="form-select" style={{ width: '120px' }} name='searchType'>
                <option value="default">Select ..</option>
                <option value="id">Book ID</option>
                <option value="title">Title</option>
                <option value="author">Author</option>
                <option value="publisher">Publisher</option>
                <option value="language">Language</option>
                <option value="category">Category</option>
              </select>
              <button
                className="btn btn-outline-light ms-2"
                type="submit"
                style={{ width: '80px' }}
                onClick={handleSearch}
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
      
           {/* Book Details Modal */}
      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton style={{ backgroundColor: "#f6f7f8", borderBottom: "none"  , textAlign : 'center'}}>
          <Modal.Title style={{ color: "#2c3e50" }}>Book Details</Modal.Title>
        </Modal.Header>
        <Modal.Body >
          {bookDetails.length > 0 ? (
            <ul>
              {bookDetails.map((book, index) => (
                <li key={index} style={{ marginBottom: "15px" }}>
                  <p><strong>Book ID:</strong> {book.id}</p>
                  <p><strong>Title:</strong> {book.title}</p>
                  <p><strong>Author:</strong> {book.author}</p>
                  <p><strong>Publisher:</strong> {book.publisher}</p>
                  <p><strong>Language:</strong> {book.language}</p>
                  <p><strong>Category:</strong> {book.category}</p>
                  <p><strong>Price:</strong> Rs.{book.price}</p>
                  <p><strong>Total Copies:</strong> {book.totalCopies}</p>
                  <p><strong>Copies Available:</strong> {book.availableCopies}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p>No book found.</p>
          )}
        </Modal.Body>
        <Modal.Footer style={{ backgroundColor: "#f6f7f8", borderTop: "none" }}>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </nav>
  );
};

export default Navbar;
