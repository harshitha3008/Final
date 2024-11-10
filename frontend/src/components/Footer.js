// Footer.js
import React, { useState } from 'react';
import '../assets/styles.css';
import logo from '../assets/images/logo.png'; // Adjust the path to the logo image

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    console.log('Subscribed with email:', email);
    // Here you can add subscription logic, such as sending the email to a server.
  };

  return (
    <footer>
      <div className="footer-container">
        <div className="footer-logo">
          <img src={logo} alt="Logo" />
          <p>Your Recipe Adventure Begins Here</p>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Blog</a></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h4>Contact Us</h4>
          <p><ion-icon name="location-outline"></ion-icon>123 Innovation Drive, Tech City</p>
          <p><ion-icon name="call-outline"></ion-icon>+91 7993084292</p>
          <p><ion-icon name="mail-outline"></ion-icon>savorspot@recipecollection.com</p>
        </div>

        <div className="footer-social">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="#"><ion-icon name="logo-facebook"></ion-icon></a>
            <a href="#"><ion-icon name="logo-twitter"></ion-icon></a>
            <a href="#"><ion-icon name="logo-linkedin"></ion-icon></a>
            <a href="#"><ion-icon name="logo-instagram"></ion-icon></a>
          </div>
        </div>

        <div className="footer-newsletter">
          <h4>Subscribe to Our Newsletter</h4>
          <form onSubmit={handleSubscribe}>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 savorspot. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
