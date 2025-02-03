import './App.css'
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom'
import Home from './Components/Home'
import Login from './Components/Login'
import Signup from './Components/Signup';
import AdminLanding from './Components/AdminLanding.jsx';
import Logout from './Components/Logout.jsx';
import EditUser from './Components/EditUser.jsx';
import UserList from './Components/UserList.jsx';
import BookList from './Components/BookList.jsx';
import EditBook from './Components/EditBook.jsx';
import AddBooks from './Components/AddBooks.jsx';


function App() {


  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Signup />} />
        <Route path="/admin" element={<AdminLanding />} />
        <Route path="/admin/users" element={<UserList />} />
        <Route path="/admin/books" element={<BookList />} />
        <Route path="/add-book" element={<AddBooks />} />
        <Route path="/edit-user/:id" element={<EditUser />} />
        <Route path="/edit-book/:title" element={<EditBook />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
      </Router>
  );
}

export default App
