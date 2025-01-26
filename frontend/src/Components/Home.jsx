import React from 'react';
import Navbar from './Navbar';

const Home = () => {
  return (
    <>
      <Navbar />
      <div
        className="d-flex align-items-center justify-content-center"
        style={{
          minHeight: "80vh",
          background: "linear-gradient(to right, rgb(246, 247, 248), rgb(210, 227, 239))",
          color: "#2c3e50",
          maxHeight: "83vh",
        }}
      >
        <div className="container py-5">
          <div className="text-center mb-5">
            <h1 className="display-4 fw-bold">Welcome to MyLibrary</h1>
            <p className="lead">
              Your ultimate solution for managing books, users, and borrowing seamlessly.
            </p>
          </div>

          <div className="row text-center">
            <div className="col-md-4 mb-4">
              <div className="p-4 rounded shadow" style={{ background: "#ffffff" }}>
                <h3 className="fw-bold">Organized Catalog</h3>
                <p>Search and manage books with our well-structured and categorized catalog.</p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="p-4 rounded shadow" style={{ background: "#ffffff" }}>
                <h3 className="fw-bold">User Management</h3>
                <p>Effortlessly handle student, employees, and admin profiles in one place.</p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="p-4 rounded shadow" style={{ background: "#ffffff" }}>
                <h3 className="fw-bold">Efficient Borrowing</h3>
                <p>Track and manage book borrowing and return dates with ease.</p>
              </div>
            </div>
          </div>

          <div className="text-center mt-5">
            <h2>Why Choose MyLibrary?</h2>
            <p className="mt-3">
              We offer a modern and intuitive platform for managing library operations efficiently:
            </p>
            <ul className="list-unstyled text-start mx-auto" style={{ maxWidth: "800px" }}>
              <li className="mb-2">📚 Easy book search and categorization</li>
              <li className="mb-2">👤 Role-based access for students, employees, and admins</li>
              <li className="mb-2">⏳ Automated due date tracking and fine calculation</li>
              <li className="mb-2">🔒 Secure user authentication and data management</li>
              <li className="mb-2">📈 Real-time insights into library usage</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
