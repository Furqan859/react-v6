import React from 'react';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
    let navigation = useNavigate()

    let data = {
        'name': 'Furqan'
    }
    return (
        <div>
            <button onClick={() => { navigation('/logout', { state: data }) }}>Log Out</button>
            <h1>Dashboard Page</h1>
        </div>
    );
}

export default Dashboard;