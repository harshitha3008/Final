import React, { useState } from 'react';
import axios from 'axios';
import '../assets/styles.css';

const LoginForm = ({ setUserAuthenticated, closeModal }) => { // Added closeModal as a prop
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // Send login request to backend
      const response = await axios.post('https://final-backend-2v7j.onrender.com/api/auth/login', { username, password });
      
      // On success, update the navbar to show "My Profile" and hide login/register buttons
      setUserAuthenticated(true);
      setError('');
      alert(response.data.message); // Show login success message

      // Close the modal after successful login
      closeModal();
    } catch (err) {
      setError(err.response?.data?.error || 'An error occurred. Please try again.');
    }
  };

  return (
    <div id="login" className="wrapper">
      <div className="main-1">
        <h2>Login</h2>
        <form onSubmit={handleLogin} autoComplete="off">
          <div className="input-box">
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              autoComplete="off"
            />
          </div>
          <div className="input-box">
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              autoComplete="off"
            />
          </div>
          {error && <p className="error-message">{error}</p>}
          <button type="submit" className="btn1">Login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
