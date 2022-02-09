import React from 'react';
import { useLocation } from 'react-router-dom';
function Logout() {
    let location = useLocation()
    return (
        <>
            <h1>Logout Page</h1>
            <h2>{location.state.name} Logged Out</h2>
        </>
    );
}

export default Logout;