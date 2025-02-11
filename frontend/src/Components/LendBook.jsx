import React, { useState, useEffect } from "react";
import {fetchBooks} from '../API/BookService';
import {createIssuedBook} from '../API/BookIssuedService';
import { useNavigate } from "react-router";
import Navbar from "./Navbar";
import { useAuth } from './AuthContext'; 

const LendBook = () => {
    const { auth, clearAuth } = useAuth();
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchType, setSearchType] = useState("title"); // Default search type is by title
  const navigate = useNavigate();

  useEffect(() => {
    fetchAllBooks();
  }, []);

  const fetchAllBooks = async () => {
    try {
      const response = await fetchBooks();
      setBooks(response.data.filter((book) => book.availableCopies > 0)); // Only show available books
    } catch (error) {
      console.error("Error fetching books:", error);
    }
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredBooks = books.filter((book) => {
    if (searchType === "title") return book.title.toLowerCase().includes(searchTerm.toLowerCase());
    if (searchType === "author") return book.author.toLowerCase().includes(searchTerm.toLowerCase());
    if (searchType === "category") return book.category.toLowerCase().includes(searchTerm.toLowerCase());
    return book;
  });

  const handleLendBook = async (book) => {
      try {
        const issuedate = new Date();
        const returndate = new Date(issuedate);
        returndate.setDate(returndate.getDate() + 15);
    
        const lendingData = {
          bookid: book.id,
          userid: auth.id, // Replace with the actual logged-in user ID
          issuedate: issuedate.toISOString().split("T")[0],
          returndate: returndate.toISOString().split("T")[0],
          status: "Borrowed",
          fine: 0,
          isReturned: false,
          issueDuration: 15, // 15-day lending period
          remarks: "",
        };
    
        await createIssuedBook(lendingData);
        alert(`Book "${book.title}" has been lent successfully! Please return it on or before ${returndate.toISOString().split("T")[0]}.`);
        fetchAllBooks(); // Refresh the book list to update available copies
      } catch (error) {
        console.error("Error lending book:", error);
        alert("Failed to lend the book. Please try again.");
      }
    };

  return (
    <>
      <Navbar />
      <div className="container py-5">
        <h1 className="text-center mb-4">Lend a Book</h1>

        {/* Search Section */}
        <div className="d-flex mb-4">
          <select
            className="form-select w-auto me-2"
            value={searchType}
            onChange={(e) => setSearchType(e.target.value)}
          >
            <option value="default">Search by...</option>
            <option value="title">Title</option>
            <option value="author">Author</option>
            <option value="category">Category</option>
          </select>
          <input
            type="text"
            className="form-control"
            placeholder={`Search by ${searchType}`}
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>

        {/* Book Cards */}
        <div className="row">
          {filteredBooks.map((book) => (
            <div className="col-md-4 mb-4" key={book.id}>
              <div className="card shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">{book.title}</h5>
                  <p className="card-text">
                    <strong>Author:</strong> {book.author}
                  </p>
                  <p className="card-text">
                    <strong>Category:</strong> {book.category}
                  </p>
                  <p className="card-text">
                    <strong>Publisher:</strong> {book.publisher}
                  </p>
                  <p className="card-text">
                    <strong>Language:</strong> {book.language}
                  </p>
                  <p className="card-text">
                    <strong>Available Copies:</strong> {book.availableCopies}
                  </p>
                  <button
                    className="btn btn-primary"
                    onClick={() => handleLendBook(book)}
                  >
                    Lend Book
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button className="btn btn-primary" onClick={() => navigate("/student")} style={{marginLeft : '40%'}}>Dashboard</button>
      </div>
    </>
  );
};

export default LendBook;
