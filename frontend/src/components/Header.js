import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../assets/styles.css';
import logo from '../assets/images/logo.png';

const Header = ({ userAuthenticated, onLoginClick, onRegisterClick, onLogout }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();

  const handleProfileClick = () => {
    setShowDropdown(!showDropdown); // Toggle dropdown visibility
  };

  const handleLogout = () => {
    setShowDropdown(false);
    onLogout();
    navigate("/"); // Redirect to home after logout
  };

  return (
    <div className="container">
      <nav>
        <img className="logo" src={logo} alt="logo" />
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><a href="#cuisines">Cuisines</a></li>
          <li><a href="#south-indian">South-Indian</a></li>
          {userAuthenticated ? (
            <li>
              <button onClick={handleProfileClick} className="btn-link">
                My Profile
              </button>
              {showDropdown && (
                <div className="dropdown-menu">
                  {/* <button onClick={() => navigate("/profile")}>My Profile</button> */}
                  <button onClick={handleLogout}>Logout</button>
                </div>
              )}
            </li>
          ) : (
            <>
              <li><button onClick={onLoginClick} className="btn-link">Login</button></li>
              <li><button onClick={onRegisterClick} className="btn-link">Register</button></li>
            </>
          )}
        </ul>
      </nav>

      <div className="content">
        <h1>Unlock<br /> Culinary Magic</h1>
        <p>Your personal recipe collection awaits. Cook, Share, and Savor!</p>
      </div>
    </div>
  );
};

export default Header;
