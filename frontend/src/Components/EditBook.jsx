import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router';
import { fetchBookByTitle, updateBook } from '../API/BookService';
import Navbar from './Navbar';

const EditBook = () => {
    const { title } = useParams();
    const navigate = useNavigate();
    const [book, setBook] = useState({
        title: '',
        publisher : '',
        author : '',
        price : '',
        category : '',
        language : '',
        totalCopies : '',
        availableCopies: ''
    });

    useEffect(() => {
        const getBook = async () => {
            try {
                //console.log(title);
                const response = await fetchBookByTitle(title);
                if (Array.isArray(response.data) && response.data.length > 0) {
                    //console.log(response.data[0]);
                    setBook(response.data[0]);  // Set the first item in the array
                } else {
                    console.error('Book not found or incorrect response format');
                }
            } catch (error) {
                console.error('Error fetching book:', error);
            }
        };


        getBook();
    }, [title]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setBook({ ...book, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await updateBook(book);
            navigate('/admin/books');
        } catch (error) {
            console.error('Error updating book:', error);
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
                <h2 className="text-center mb-4">Edit Book</h2>
                <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Title</label>
                    <input
                    type="text"
                    className="form-control"
                    name="title"
                    value={book.title}
                    onChange={handleChange}
                    required
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Author</label>
                    <input
                    type="text"
                    className="form-control"
                    name="author"
                    value={book.author}
                    onChange={handleChange}
                    required
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Publisher</label>
                    <input
                    type="text"
                    className="form-control"
                    name="publisher"
                    value={book.publisher}
                    onChange={handleChange}
                    required
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Price</label>
                    <input
                    type="number"
                    className="form-control"
                    name="price"
                    value={book.price}
                    onChange={handleChange}
                    required
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Category</label>
                    <select className="form-select" name="category" value={book.category} onChange={handleChange} style={{width: '240px' , marginLeft : '27px'}}>
                        <option value="">Select Category</option>
                        <option value="Science">Science</option>
                        <option value="Technology">Technology</option>
                        <option value="Engineering">Engineering</option>
                        <option value="Mathematics">Mathematics</option>
                        <option value="History">History</option>
                        <option value="Literature">Literature</option>
                        <option value="Programming">Programming</option>
                        <option value="Biography">Biography</option>
                        <option value="Others">Others</option>
                    </select>

                </div>
                <div className="mb-3">
                    <label className="form-label">Language</label>
                    <select className="form-select" name="language" value={book.language} onChange={handleChange} style={{width: '240px' , marginLeft : '27px'}}>
                        <option value="">Select Language</option>
                        <option value="English">English</option>
                        <option value="Hindi">Hindi</option>
                        <option value="Marathi">Marathi</option>
                        <option value="Gujarati">Gujarati</option>
                        <option value="Tamil">Tamil</option>
                        <option value="Telugu">Telugu</option>
                        <option value="Others">Others</option>
                    </select>
                </div>
                <div className="mb-3">
                    <label className="form-label">Total Copies</label>
                    <input
                    type="number"
                    className="form-control"
                    name="totalCopies"
                    value={book.totalCopies}
                    onChange={handleChange}
                    required
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Available Copies</label>
                    <input
                    type="number"
                    className="
                    form-control"
                    name="availableCopies"
                    value={book.availableCopies}
                    onChange={handleChange}
                    required
                    />
                </div>
                <button type="submit" className="btn btn-primary">Update</button>
                </form>
            </div>
        </div>
      </>
    </div>
  );
};

export default EditBook
