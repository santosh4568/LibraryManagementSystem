import React, { useEffect, useState } from "react";
import { fetchUsers, deleteUser } from "../API/UserService";
import { useNavigate } from "react-router";
import Navbar from "./Navbar";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getUsers = async () => {
      try {
        const response = await fetchUsers();
        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    getUsers();
  }, []);

  const handleEdit = (userId) => {
    navigate(`/edit-user/${userId}`);
  };

  const handleDelete = async (userId) => {
    try {
      await deleteUser(userId);
      setUsers(users.filter((user) => user.id !== userId));
      navigate("/admin/users");
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  return (
    <>
      <Navbar />
      <div
        className="d-flex align-items-center justify-content-center"
        style={{
          minHeight: "80vh",
          background:
            "linear-gradient(to right, rgb(246, 247, 248), rgb(210, 227, 239))",
          color: "#2c3e50",
        }}
      >
        <div className="container py-5">
          <h2 className="text-center">Registered Users</h2>
          <div className="table-responsive">
            <table className="table table-bordered" style={{ borderColor: '#000', borderWidth: '2px' , width : '70%' , marginLeft : 'auto' , marginRight : 'auto'}}>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Username</th>
                  <th>Email</th>
                  <th>Role</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user.id}>
                    <td>{user.name}</td>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                    <td>{user.role}</td>
                    <td>
                      <button
                        className="btn btn-primary me-2"
                        style={{ width: "80px" }}
                        onClick={() => handleEdit(user.username)}
                      >
                        Edit
                      </button>
                      <button
                        className="btn btn-danger"
                        style={{ width: "80px" }}
                        onClick={() => handleDelete(user.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserList;
