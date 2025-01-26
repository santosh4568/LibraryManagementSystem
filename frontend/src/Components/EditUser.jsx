import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router';
import { fetchUserByRegdNo, updateUser } from '../API/UserService';
import Navbar from './Navbar';

const EditUser = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: '',
    username: '',
    email: '',
    role: '',
  });

  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await fetchUserByRegdNo(id);
        //console.log(response.data);
        setUser(response.data);
      } catch (error) {
        console.error('Error fetching user:', error);
      }
    };

    getUser();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateUser(user);
      navigate('/admin/users');
    } catch (error) {
      console.error('Error updating user:', error);
    }
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
      <h2 className="text-center mb-4">Edit User</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          {/* <label className="form-label">Name</label> */}
          <input
            type="text"
            className="form-control"
            name="name"
            value={user.name}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          {/* <label className="form-label">Username</label> */}
          <input
            type="text"
            className="form-control"
            name="username"
            value={user.username}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          {/* <label className="form-label">Email</label> */}
          <input
            type="email"
            className="form-control"
            name="email"
            value={user.email}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          {/* <label className="form-label">Role</label> */}
          <select
            className="form-select"
            name="role"
            value={user.role}
            onChange={handleChange}
            style={{width: '240px' , marginLeft : '27px'}}
          >
            <option value="">Select Role</option>
            <option value="Student">Student</option>
            <option value="Employee">Employee</option>
            <option value="Admin">Admin</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary">Update</button>
      </form>
    </div>
    </div>
    </>
  );
};

export default EditUser;