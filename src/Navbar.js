import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
const Navbar = () => {
    return (
        <div>
            <ul>
                <li > <NavLink to="/" className="home">Home</NavLink> </li>
                <li> <NavLink to="/Contact" className="home">Contact</NavLink></li>
                <li><NavLink to="/about" className="home">About</NavLink></li>
                <li><NavLink to="/post/mobile" className="home">Post</NavLink></li>
                <li><NavLink to="/post/mobile/1" className="home">Post</NavLink></li>
                <li><NavLink to="/login" className="home">Login</NavLink></li>
                <li><NavLink to="/dashboard" className="home">Dashboard</NavLink></li>

            </ul>

        </div>
    );
}

export default Navbar;