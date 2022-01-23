import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
const Navbar = () => {
    return (
        <>
            <ul>
                <li > <NavLink to="/"  className="home">Home</NavLink> </li>
                <li> <NavLink to="/Contact" className="contact">Contact</NavLink></li>
                <li><NavLink to="/about" className="about">About</NavLink></li>
                <li><NavLink to="/post/mobile" className="about">Post</NavLink></li>
                <li><NavLink to="/post/mobile/1" className="about">Post</NavLink></li>
            </ul>

        </>
    );
}

export default Navbar;