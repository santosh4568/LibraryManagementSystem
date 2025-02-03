import React, { useState } from "react";
import { fetchUserByRegdNo } from "../API/UserService";
import Navbar from "./Navbar";
import "../App.css";
import { useNavigate } from "react-router";
import { useAuth } from "./AuthContext";

const Login = () => {
    const navigate = useNavigate();
    const { setAuth } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setErrorMsg("");
    setSuccessMsg("");
    if(!role){
        setErrorMsg("Please select a role");
        return;
        }
    if (!username || !password) {
        setErrorMsg("All fields are required.");
        return;
        }
    try {
      const response = await fetchUserByRegdNo(username);
      const userByRegd = response.data;
      if (userByRegd.password === password && userByRegd.role === role) {
        setAuth(userByRegd);
        if(role === "Admin"){
            navigate("/admin");
        } else if(role === "Student"){
            navigate("/student");
        } else if(role === "Employee"){
            navigate("/employee");
        }
        setSuccessMsg("Login Successful");
      } else if (userByRegd.role !== role) {
        setErrorMsg("Wrong role");
      } else if (userByRegd.password !== password) {
        setErrorMsg("Wrong password");
      }
    } catch (error) {
      if (error.response && error.response.status === 404) {
        setErrorMsg("User not found !! Please register");
        //navigate("/register");

      }
      console.log(error);
    }
    setUsername("");
    setPassword("");
    setRole("");
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
          onSubmit={handleLogin}
          className="p-5 rounded"
          style={{
            background: "#fff",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            maxWidth: "400px",
            width: "100%",
          }}
        >
          <h3 className="text-center mb-4" style={{ color: "#2c3e50" }}>
            Login
          </h3>

          {/* Role Dropdown */}
          <div className="mb-1">
            {/* <label className="form-label" style={{ color: "#2c3e50" }}>
              Role
            </label> */}
            <select
              className="form-select"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              style={{width: '240px' , marginLeft : '27px'
              }}
            >
              <option value="">Select Role</option>
              <option value="Admin">Admin</option>
              <option value="Student">Student</option>
              <option value="Employee">Employee</option>
            </select>
          </div>

          {/* Username Input */}
          {role && (
            <div className="mb-1">
              {/* <label className="form-label" style={{ color: "#2c3e50" }}>
                {role === "Student"
                  ? "Registration Number"
                  : role === "Teacher"
                  ? "Employee ID"
                  : "Admin ID"}
              </label> */}
              <input
                type="text"
                className="form-control"
                placeholder={`Enter ${
                  role === "Student"
                    ? "Regd. No."
                    : role === "Teacher"
                    ? "EmpID"
                    : "Admin ID"
                }`}
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
          )}

          {/* Password Input */}
          <div className="mb-1">
            {/* <label className="form-label" style={{ color: "#2c3e50" }}>
              Password
            </label> */}
            <input
              type="password"
              className="form-control"
              placeholder="Enter Password"
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
              Login
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
