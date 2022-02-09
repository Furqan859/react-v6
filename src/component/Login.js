import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function Login() {
    let location = useLocation()
    console.log(location);
    let navigation = useNavigate()
    let data = {
        'name': 'Furqan'
    }

    return (<form>
        <input type="email" placeholder="enter your email address" />
        <input type="password" placeholder="Enter your password" />
        <h2>{location.state.st}</h2>
        <button onClick={() => { navigation('/dashboard'), { state: data } }} >Log In</button>

    </form>
    );
}

export default Login;