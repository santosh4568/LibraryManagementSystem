import React, { useState, useEffect } from "react";
import { fetchIssuedBookByUserId } from "../API/BookIssuedService";
import { fetchBookById } from "../API/BookService";
import { useNavigate } from "react-router";
import Navbar from "./Navbar";
import { useAuth } from "./AuthContext";

const BorrowedBooks = () => {
  const { auth } = useAuth();
  const [borrowedBooks, setBorrowedBooks] = useState([]);
  const [bookDetails, setBookDetails] = useState({});
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchType, setSearchType] = useState("title"); // Default search type is by title
  const navigate = useNavigate();

  useEffect(() => {
    fetchBorrowedBooks();
  }, []);

  const fetchBorrowedBooks = async () => {
    try {
      const response = await fetchIssuedBookByUserId(auth.id);
      const borrowedBooksData = response.data;
      setBorrowedBooks(borrowedBooksData);
      await fetchBookDetails(borrowedBooksData);
    } catch (error) {
      console.error("Error fetching borrowed books:", error);
    } finally {
      setLoading(false);
    }
  };

  const fetchBookDetails = async (borrowedBooks) => {
    try {
      const details = {};
      await Promise.all(
        borrowedBooks.map(async (borrowedBook) => {
          const bookResponse = await fetchBookById(borrowedBook.bookid);
          details[borrowedBook.bookid] = bookResponse.data; // Store book details in a dictionary for easy lookup
        })
      );
      //console.log("Book details:", details); // Debugging: Log the book details
      setBookDetails(details);
    } catch (error) {
      console.error("Error fetching book details:", error);
    }
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredBooks = borrowedBooks.filter((borrowedBook) => {
    const bookArray = bookDetails[borrowedBook.bookid];
    if (!Array.isArray(bookArray) || bookArray.length === 0) return false;
  
    const book = bookArray[0];
    if (!book) return false;
    if (searchType === "title") return book.title?.toLowerCase().includes(searchTerm.toLowerCase());
    if (searchType === "author") return book.author?.toLowerCase().includes(searchTerm.toLowerCase());
    if (searchType === "category") return book.category?.toLowerCase().includes(searchTerm.toLowerCase());
    return book;
  });

  const handleDash = () => {
    navigate("/student");
  };

  if (loading) {
    return (
      <>
        <Navbar />
        <div className="container py-5">
          <h2 className="text-center">Loading Borrowed Books...</h2>
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="container py-5">
        <h1 className="text-center mb-4">Borrowed Books</h1>

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

        {/* Borrowed Books Cards */}
        <div className="row">
          {filteredBooks.map((borrowedBook) => {
            const book = bookDetails[borrowedBook.bookid][0];
            return (
              <div className="col-md-4 mb-4" key={borrowedBook.id}>
                <div className="card shadow-sm">
                  <div className="card-body">
                    {/* <h5 className="card-title">Issued Book ID: {borrowedBook.id}</h5> */}
                    {book ? (
                      <>
                        <p className="card-text">
                          <strong>Title:</strong> {book.title || "Title not available"}
                        </p>
                        <p className="card-text">
                          <strong>Author:</strong> {book.author || "Author not available"}
                        </p>
                        <p className="card-text">
                          <strong>Category:</strong> {book.category || "Category not available"}
                        </p>
                        <p className="card-text">
                          <strong>Publisher:</strong> {book.publisher || "Publisher not available"}
                        </p>
                        <p className="card-text">
                          <strong>Language:</strong> {book.language || "Language not available"}
                        </p>
                      </>
                    ) : (
                      <p className="card-text text-danger">Book details not available.</p>
                    )}
                    <p className="card-text">
                      <strong>Issued Date:</strong> {borrowedBook.issuedate}
                    </p>
                    <p className="card-text">
                      <strong>Return Date:</strong> {borrowedBook.returndate}
                    </p>
                    <p className="card-text">
                      <strong>Status:</strong> {borrowedBook.status}
                    </p>
                    <p className="card-text">
                      <strong>Fine:</strong> {borrowedBook.fine}
                    </p>
                    <p className="card-text">
                      <strong>Remarks:</strong> {borrowedBook.remarks}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <button className="btn btn-primary" onClick={handleDash} style={{marginLeft : '40%'}}>Dashboard</button>
      </div>
    </>
  );
};

export default BorrowedBooks;