import React from "react";
import Navbar from "./Navbar";
import { useNavigate } from "react-router";

const StudentLanding = () => {
  const navigate = useNavigate();

//   const handleSearchBooks = () => {
//     navigate("/student/search-books");
//   };

  const handleLendBooks = () => {
    navigate("/student/lend-books");
  };

  const handleReturnBooks = () => {
    navigate("/student/return-books");
  };

  const handleViewBook = () => {
    navigate("/student/view-books");
  };

  return (
    <>
      <Navbar />
      <div
        className="d-flex align-items-center justify-content-center"
        style={{
          minHeight: "80vh",
          background: "linear-gradient(to right, rgb(246, 247, 248), rgb(210, 227, 239))",
          color: "#2c3e50",
        }}
      >
        <div className="container py-5">
          <div className="text-center mb-5">
            <h1 className="display-4 fw-bold">Student Dashboard</h1>
            <p className="lead">Easily explore and manage your books.</p>
          </div>

          <div className="row text-center">
            {/* Book Search */}
            {/* <div className="col-md-4 mb-4">
              <div className="p-4 rounded shadow" style={{ background: "#ffffff" }}>
                <h3 className="fw-bold">Search Books</h3>
                <p>Find books available in the library.</p>
                <button className="btn btn-primary" onClick={handleSearchBooks}>
                  Search Books
                </button>
              </div>
            </div> */}

            {/* Lend Books */}
            <div className="col-md-4 mb-4">
              <div className="p-4 rounded shadow" style={{ background: "#ffffff" }}>
                <h3 className="fw-bold">Lend Books</h3>
                <p>Borrow books from the library.</p>
                <button className="btn btn-primary" onClick={handleLendBooks}>
                  Lend Books
                </button>
              </div>
            </div>

            {/* Return Books */}
            <div className="col-md-4 mb-4">
              <div className="p-4 rounded shadow" style={{ background: "#ffffff" }}>
                <h3 className="fw-bold">Return Books</h3>
                <p>Return borrowed books on time.</p>
                <button className="btn btn-primary" onClick={handleReturnBooks}>
                  Return Books
                </button>
              </div>
            </div>

            {/* View Borrowed Books */}
            <div className="col-md-4 mb-4">
              <div className="p-4 rounded shadow" style={{ background: "#ffffff" }}>
                <h3 className="fw-bold">My Borrowed Books</h3>
                <p>Check the list of books you have borrowed.</p>
                <button className="btn btn-primary" onClick={handleViewBook}>View Borrowed Books</button>
              </div>
            </div>

            
          </div>

          <div className="row text-center">
            

            {/* Due Fines */}
            <div className="col-md-4 mb-4">
              <div className="p-4 rounded shadow" style={{ background: "#ffffff" }}>
                <h3 className="fw-bold">My Dues</h3>
                <p>Check and clear overdue fines.</p>
                <button className="btn btn-primary">View Dues</button>
              </div>
            </div>

            {/* Notifications */}
            <div className="col-md-4 mb-4">
              <div className="p-4 rounded shadow" style={{ background: "#ffffff" }}>
                <h3 className="fw-bold">Notifications</h3>
                <p>Get important alerts from the library.</p>
                <button className="btn btn-primary">View Notifications</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StudentLanding;
