import React from 'react';
import {Link} from 'react-router-dom';

const Navbar =() => {
    return (
        <>
            
             <Link to="/">Home</Link>
            <Link to="/Contact">Contact</Link>
           <Link to="/about">About</Link>
            
            </>
    );
}

export default Navbar;