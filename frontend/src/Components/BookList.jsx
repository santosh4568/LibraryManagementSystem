import React, { useEffect, useState } from "react";
import {fetchBooks , deleteBook} from "../API/BookService";
import { useNavigate } from "react-router";
import Navbar from "./Navbar";
const BookList = () => {

    const [books, setBooks] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const getBooks = async () => {
            try {
                const response = await fetchBooks();
                setBooks(response.data);
            } catch (error) {
                console.error("Error fetching books:", error);
            }
        };

        getBooks();
    }
    , []);

    const handleEdit = (title) => {
        navigate(`/edit-book/${title}`);
    };

    const handleDelete = async (id) => {
        try {
            await deleteBook(id);
            setBooks(books.filter((book) => book.id !== id));
            navigate("/admin/books");
        } catch (error) {
            console.error("Error deleting book:", error);
        }
    };

  return (
    <div>
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
        <button className="btn btn-primary " style={{marginLeft : '62%' , marginTop : '5px'}} onClick={() => navigate('/add-book')}>Add Book</button>
          <h2 className="text-center">Books List</h2>
          <div className="table-responsive">
            <table className="table table-bordered" style={{ borderColor: '#000', borderWidth: '2px' , width : '70%' , marginLeft : 'auto' , marginRight : 'auto'}}>
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Author</th>
                  <th>Publisher</th>
                  <th>Price</th>
                  <th>Category</th>
                  <th>Language</th>
                  <th>Total Copies</th>
                    <th>Available Copies</th>
                    <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {books.map((book) => (
                  <tr key={book.id}>
                    <td>{book.title}</td>
                    <td>{book.author}</td>
                    <td>{book.publisher}</td>
                    <td>{book.price}</td>
                    <td>{book.category}</td>
                    <td>{book.language}</td>
                    <td>{book.totalCopies}</td>
                    <td>{book.availableCopies}</td>
                    <td>
                      <button
                        className="btn btn-primary me-2"
                        style={{ width: "80px" }}
                        onClick={() => handleEdit(book.title)}
                      >
                        Edit
                      </button>
                      <button
                        className="btn btn-danger"
                        style={{ width: "80px" }}
                        onClick={() => handleDelete(book.id)}
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
    </div>
  );
};

export default BookList
