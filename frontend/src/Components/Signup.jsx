import React, { useState } from "react";
import Navbar from "./Navbar";
import {createUser} from '../API/UserService'
import { useNavigate } from "react-router";

const Signup = () => {
    const navigate = useNavigate();
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [regdNo, setRegdNo] = useState("");
  const [empId, setEmpId] = useState("");
  const [adminId, setAdminId] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();
    setSuccessMsg("");
    setErrorMsg("");
  
    // Validation
    if (!name || !email || !password || !role) {
      setErrorMsg("All fields are required.");
      return;
    }
  
    if (
      (role === "Student" && !regdNo) ||
      (role === "Employee" && !empId) ||
      (role === "Admin" && !adminId)
    ) {
      setErrorMsg("Please enter a valid ID for the selected role.");
      return;
    }
  
    // Assign username based on role
    let usernameValue = "";
    if (role === "Student") {
      usernameValue = regdNo;
    } else if (role === "Employee") {
      usernameValue = empId;
    } else if (role === "Admin") {
      usernameValue = adminId;
    }
  
    setUsername(usernameValue);
  
    // Create a new user object
    const newUser = {
      name,
      role,
      username: usernameValue, // Use the assigned usernameValue
      email,
      password,
    };
  
    try {
      // Call the createUser function from the UserService API
      const response = await createUser(newUser);
      if (response.status === 200) {
        setSuccessMsg("Signup successful!");
        navigate("/login");
      } else {
        setErrorMsg("Signup failed");
      }
    } catch (error) {
      setErrorMsg("An error occurred during signup.");
      console.error(error);
    }
  
    // Clear form fields
    setName("");
    setRole("");
    setRegdNo("");
    setEmpId("");
    setAdminId("");
    setEmail("");
    setPassword("");
  };
  

  return (
    <>
      <Navbar />
      <div
        className="d-flex align-items-center justify-content-center"
        style={{
            minHeight: "80vh",
          background: "linear-gradient(to right,rgb(246, 247, 248),rgb(210, 227, 239))",
        }}
      >
        <form
          onSubmit={handleSignup}
          className="p-5 rounded"
          style={{
            background: "#ffffff",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            maxWidth: "500px",
            width: "100%",
          }}
        >
          {/* <h3 className="text-center mb-4" style={{ color: "#2c3e50" }}>
            Signup
          </h3> */}

          {/* Name Field */}
          <div className="mb-3">
            {/* <label className="form-label" style={{ color: "#2c3e50" }}>
              Full Name
            </label> */}
            <input
              type="text"
              className="form-control"
              placeholder="Enter your full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          {/* Role Selection */}
          <div className="mb-3">
            {/* <label className="form-label" style={{ color: "#2c3e50" }}>
              Role
            </label> */}
            <select
              className="form-select"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              style={{ width: '240px' , marginLeft : '27px'}}
            >
              <option value="">Select Role</option>
              <option value="Student">Student</option>
              <option value="Employee">Employee</option>
              <option value="Admin">Admin</option>
            </select>
          </div>

          {/* Conditional Fields */}
          {role === "Student" && (
            <div className="mb-3">
              {/* <label className="form-label" style={{ color: "#2c3e50" }}>
                Registration Number
              </label> */}
              <input
                type="text"
                className="form-control"
                placeholder="Enter your registration number"
                value={regdNo}
                onChange={(e) => setRegdNo(e.target.value)}
              />
            </div>
          )}
          {role === "Employee" && (
            <div className="mb-3">
              {/* <label className="form-label" style={{ color: "#2c3e50" }}>
                Employee ID
              </label> */}
              <input
                type="text"
                className="form-control"
                placeholder="Enter your employee ID"
                value={empId}
                onChange={(e) => setEmpId(e.target.value)}
              />
            </div>
          )}
          {role === "Admin" && (
            <div className="mb-3">
              {/* <label className="form-label" style={{ color: "#2c3e50" }}>
                Admin ID
              </label> */}
              <input
                type="text"
                className="form-control"
                placeholder="Enter your admin ID"
                value={adminId}
                onChange={(e) => setAdminId(e.target.value)}
              />
            </div>
          )}

          {/* Email Field */}
          <div className="mb-3">
            {/* <label className="form-label" style={{ color: "#2c3e50" }}>
              Email
            </label> */}
            <input
              type="email"
              className="form-control"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Password Field */}
          <div className="mb-3">
            {/* <label className="form-label" style={{ color: "#2c3e50" }}>
              Password
            </label> */}
            <input
              type="password"
              className="form-control"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {/* Error or Success Messages */}
          {errorMsg && (
            <div className="alert alert-danger" role="alert">
              {errorMsg}
            </div>
          )}
          {successMsg && (
            <div className="alert alert-success" role="alert">
              {successMsg}
            </div>
          )}

          {/* Submit Button */}
          <div className="d-grid">
            <button
              type="submit"
              className="btn"
              style={{
                background: "linear-gradient(to right, #2c3e50, #3498db)",
                color: "#fff",
              }}
            >
              Signup
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Signup;
