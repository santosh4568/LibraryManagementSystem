import React from 'react'
import Navbar from './Navbar'
import { useNavigate } from 'react-router'
import { createBook } from '../API/BookService'


const AddBooks = () => {
    const navigate = useNavigate();

  return (
    <div>
      <>
        <Navbar />
        <div
          className="d-flex align-items-center justify-content-center"
          style={{
            minHeight: "80vh",
            maxHeight: "90vh",
            background:
              "linear-gradient(to right, rgb(246, 247, 248), rgb(210, 227, 239))",
            color: "#2c3e50",
          }}
        >
            <div className="container py-5">
                <h2 className="text-center mb-2">Add Book</h2>
                <form
                    onSubmit={async (e) => {
                        e.preventDefault();
                        const book = {
                            title: e.target.title.value,
                            publisher : e.target.publisher.value,
                            author : e.target.author.value,
                            category : e.target.category.value,
                            language : e.target.language.value,
                            price : e.target.price.value,
                            totalCopies : e.target.totalcopies.value,
                            availableCopies : e.target.availablecopies.value
                        };
                        try {
                            await createBook(book);
                            navigate('/admin/books');
                        } catch (error) {
                            console.error('Error adding book:', error);
                        }
                    }}
                >
                    <div className="mb-1">
                        {/* <label className="form-label">Title</label> */}
                        <input
                            type="text"
                            className="form-control"
                            name="title"
                            placeholder='Enter Book Title'
                            required
                        />
                    </div>
                    <div className="mb-1">
                        {/* <label className="form-label">Publisher</label> */}
                        <input
                            type="text"
                            className="form-control"
                            name="publisher"
                            placeholder='Enter Publisher Name'
                            required
                        />
                    </div>
                    <div className="mb-1">
                        {/* <label className="form-label">Author</label> */}
                        <input
                            type="text"
                            className="form-control"
                            name="author"
                            placeholder='Enter Author Name'
                            required
                        />
                    </div>
                    <div className="mb-1">
                        {/* <label className="form-label">Category</label> */}
                        <select
                            className="form-select"
                            name="category"
                            style={{ width: '240px' , height: '40px' ,marginLeft : '25px' , marginTop : '10px' }}
                            required>
                            <option value="">Select Category</option>
                            <option value="Science">Science</option>
                            <option value="Mathematics">Mathematics</option>
                            <option value="History">History</option>
                            <option value="Literature">Literature</option>
                            <option value="Fiction">Fiction</option>
                            <option value="Biography">Biography</option>
                            <option value="Others">Others</option>
                        </select>
                    </div>
                    <div className="mb-1">
                        {/* <label className="form-label">Language</label> */}
                        <select
                            className="form-select"
                            name="language"
                            style={{ width: '240px' , height: '40px' ,marginLeft : '25px' , marginTop : '10px' }}
                            required>
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
                    <div className="mb-1">
                        {/* <label className="form-label">Price</label> */}
                        <input
                            type="text"
                            className="form-control"
                            name="price"
                            placeholder='Enter Price'
                            required
                        />
                    </div>
                    <div className="mb-1">
                        {/* <label className="form-label">Total Copies</label> */}
                        <input
                            type="text"
                            className="form-control"
                            name="totalcopies"
                            placeholder='Enter Total Copies'
                            required
                        />
                    </div>
                    <div className="mb-1">
                        {/* <label className="form-label">Available Copies</label> */}
                        <input
                            type="text"
                            className="form-control"
                            name="availablecopies"
                            placeholder='Enter Available Copies'
                            required
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">Add Book</button>
                </form>
            </div>
        </div>
      </>
    </div>
  )
}

export default AddBooks
