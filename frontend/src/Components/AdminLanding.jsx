import React from 'react';
import Navbar from './Navbar';
import { useNavigate } from 'react-router';

const AdminLanding = () => {
  const navigate = useNavigate();

  const handleUsers = () => {
    navigate('/admin/users');
  };

  const handleBooks = () => {
    navigate('/admin/books');
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
            <h1 className="display-4 fw-bold">Admin Dashboard</h1>
            <p className="lead">
              Manage library operations efficiently and stay in control.
            </p>
          </div>

          <div className="row text-center">
            {/* User Management */}
            <div className="col-md-4 mb-4">
              <div className="p-4 rounded shadow" style={{ background: "#ffffff" }}>
                <h3 className="fw-bold">User Management</h3>
                <p>View, edit, and delete users effortlessly.</p>
                <button className="btn btn-primary" onClick={handleUsers}>Manage Users</button>
              </div>
            </div>

            {/* Book Management */}
            <div className="col-md-4 mb-4">
              <div className="p-4 rounded shadow" style={{ background: "#ffffff" }}>
                <h3 className="fw-bold">Book Management</h3>
                <p>Add new books, update details, or remove books.</p>
                <button className="btn btn-primary" onClick={handleBooks}>Manage Books</button>
              </div>
            </div>

            <div className="col-md-4 mb-4">
              <div className="p-4 rounded shadow" style={{ background: "#ffffff" }}>
                <h3 className="fw-bold">Reports & Analytics</h3>
                <p>Generate insights and reports on library operations.</p>
                <button className="btn btn-primary">View Reports</button>
              </div>
            </div>

            {/* Transaction Management */}
            {/* <div className="col-md-4 mb-4">
              <div className="p-4 rounded shadow" style={{ background: "#ffffff" }}>
                <h3 className="fw-bold">Transaction Management</h3>
                <p>Track book borrowings, returns, and manage overdue records.</p>
                <button className="btn btn-primary">Manage Transactions</button>
              </div>
            </div> */}
          </div>

          <div className="row text-center">
            {/* Dues Management */}
            {/* <div className="col-md-4 mb-4">
              <div className="p-4 rounded shadow" style={{ background: "#ffffff" }}>
                <h3 className="fw-bold">Fine Management</h3>
                <p>View and handle overdue fines and dues efficiently.</p>
                <button className="btn btn-primary">Manage Fines</button>
              </div>
            </div> */}

            {/* Reports and Analytics */}
            {/* <div className="col-md-4 mb-4">
              <div className="p-4 rounded shadow" style={{ background: "#ffffff" }}>
                <h3 className="fw-bold">Reports & Analytics</h3>
                <p>Generate insights and reports on library operations.</p>
                <button className="btn btn-primary">View Reports</button>
              </div>
            </div> */}

            {/* Notifications */}
            {/* <div className="col-md-4 mb-4">
              <div className="p-4 rounded shadow" style={{ background: "#ffffff" }}>
                <h3 className="fw-bold">Notifications</h3>
                <p>Send announcements or alerts to library users.</p>
                <button className="btn btn-primary">Send Notifications</button>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminLanding;
