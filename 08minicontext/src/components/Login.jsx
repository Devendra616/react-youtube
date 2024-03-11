import React from 'react'
import { useState, useContext } from 'react';
import UserContext from '../context/UserContext';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    // gets data from UserContext
    const {setUser} = useContext(UserContext)

    const handleSubmit = (e) => {
        // prevents the page from refreshing
        e.preventDefault()
        // sets data to UserContext
        setUser({username,password})
    }

  return (
    <div>
        <h2>Login</h2>
        <input 
            type="text"         
            value={username}
            onChange={e => setUsername(e.target.value)}
            placeholder='Username'
        />
        {" "}
        <input
            type="password" 
            value={password}
            onChange={e=>setPassword(e.target.value)}
            placeholder='Password'
        />
        <button
            onClick={handleSubmit}>
            Submit</button>
    </div>
  )
}

export default Login