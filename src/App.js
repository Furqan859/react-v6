import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './component/Home';
import Contact from './component/Contact';
import About from './component/About';
import Notfound from './Notfound';
import Navbar from './Navbar';
import Post from './component/Post';
import Login from './component/Login';
import Dashboard from './component/Dashboard'
import Logout from './component/Logout';


function App() {
  let isLoggedIn = true;

  let data = {
    'st': 'thi user is not loged in'
  }
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/post/:category" element={<Post />} />
          <Route path="/post/:category/:id" element={<Post />} />``

          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/dashboard" element={isLoggedIn ? <Dashboard /> : <Navigate to="/login" replace state={data} />} />

          <Route path="*" element={<Notfound />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
