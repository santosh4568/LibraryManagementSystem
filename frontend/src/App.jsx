import './App.css'
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom'
import Home from './Components/Home'
import Login from './Components/Login'
import Signup from './Components/Signup';
import AdminLanding from './Components/AdminLanding.jsx';
import Logout from './Components/Logout.jsx';
import EditUser from './Components/EditUser.jsx';
import UserList from './Components/UserList.jsx';


function App() {


  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Signup />} />
        <Route path="/admin" element={<AdminLanding />} />
        <Route path="/admin/users" element={<UserList />} />
        <Route path="/edit-user/:id" element={<EditUser />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
      </Router>
  );
}

export default App
