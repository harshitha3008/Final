import React, { useState } from 'react';
import '../assets/styles.css';

const RegisterForm = ({ closeModal }) => { // Added closeModal as a prop
  const [formData, setFormData] = useState({
    fullName: '',
    username: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    agree: false,
  });

  const [error, setError] = useState('');

  // Handle input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Simple validation checks
    if (!formData.agree) {
      setError('You must agree to the terms and conditions');
      return;
    }
  
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }
  
    try {
      const response = await fetch('https://final-backend-2v7j.onrender.com/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      const result = await response.json();
      console.log('API response:', result);
  
      if (response.ok) {
        alert('Registration successful!');
        
        // Clear form data after successful registration
        setFormData({
          fullName: '',
          username: '',
          email: '',
          phone: '',
          password: '',
          confirmPassword: '',
          agree: false,
        });
        
        setError(''); // Clear any existing error message
        
        // Close the modal after successful registration
        closeModal();
      } else {
        setError(result.error || 'Something went wrong');
      }
    } catch (error) {
      console.error('Error:', error);
      setError('Server error');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div id="register" className="wrapper-1">
        <div className="main-2">
          <h2 style={{ marginTop: '40px', marginBottom: '40px' }}>Register Here</h2>

          {/* Display error message if there is an error */}
          {error && (
            <p style={{ color: 'white', marginBottom: '20px', fontWeight: 'bold' }}>{error}</p>
          )}

          {/* Registration form fields */}
          <div className="input-box-1">
            <div className="input-field-1">
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
              <ion-icon name="person"></ion-icon>
            </div>
            <div className="input-field-1">
              <input
                type="text"
                name="username"
                placeholder="Username"
                value={formData.username}
                onChange={handleChange}
                required
              />
              <ion-icon name="person"></ion-icon>
            </div>
          </div>

          <div className="input-box-1">
            <div className="input-field-1">
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <ion-icon name="mail"></ion-icon>
            </div>
            <div className="input-field-1">
              <input
                type="number"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                required
              />
              <ion-icon name="call"></ion-icon>
            </div>
          </div>

          <div className="input-box-1">
            <div className="input-field-1">
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
              />
              <ion-icon name="lock-closed"></ion-icon>
            </div>
            <div className="input-field-1">
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
              <ion-icon name="lock-closed"></ion-icon>
            </div>
          </div>

          <label>
            <input
              type="checkbox"
              name="agree"
              checked={formData.agree}
              onChange={handleChange}
            />
            I hereby declare that the above information provided is true and correct
          </label>

          <button type="submit" className="btn-2">Register</button>
        </div>
      </div>
    </form>
  );
};

export default RegisterForm;
