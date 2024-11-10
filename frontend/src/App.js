import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Carousel from './components/Carousel';
import SkillsSection from './components/SkillsSection';
import SouthIndian from './components/SouthIndian';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import Footer from './components/Footer';
import MyProfile from './components/MyProfile';
import './App.css';

const App = () => {
  const [userAuthenticated, setUserAuthenticated] = useState(
    localStorage.getItem("userAuthenticated") === "true"
  );
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [initialLoad, setInitialLoad] = useState(true); // New state variable for initial load

  useEffect(() => {
    localStorage.setItem("userAuthenticated", userAuthenticated);
  }, [userAuthenticated]);

  useEffect(() => {
    // Ensure initialLoad becomes false after the first load
    setInitialLoad(false);
  }, []);

  const logout = () => {
    setUserAuthenticated(false);
    localStorage.removeItem("userAuthenticated");
  };

  return (
    <Router>
      <div className="App">
        <Header
          userAuthenticated={userAuthenticated}
          onLoginClick={() => setShowLoginModal(true)}
          onRegisterClick={() => setShowRegisterModal(true)}
          onLogout={logout}
        />

        <Carousel />
        <SkillsSection />
        <SouthIndian userAuthenticated={userAuthenticated} />

        <Routes>
          <Route
            path="/"
            element={
              initialLoad ? (
                <Navigate to="/login" />
              ) : userAuthenticated ? (
                <Navigate to="/profile" />
              ) : (
                <Navigate to="/login" />
              )
            }
          />
          <Route
            path="/profile"
            element={userAuthenticated ? <MyProfile /> : <Navigate to="/login" />}
          />
          <Route path="/register" element={<RegisterForm closeModal={() => setShowRegisterModal(false)} />} />
        </Routes>

        {/* Modal for Login */}
        {showLoginModal && (
          <div className="modal-overlay" onClick={() => setShowLoginModal(false)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <LoginForm
                setUserAuthenticated={() => {
                  setUserAuthenticated(true);
                  setShowLoginModal(false);
                }}
                closeModal={() => setShowLoginModal(false)}
              />
              <button onClick={() => setShowLoginModal(false)} className="close-btn">Close</button>
            </div>
          </div>
        )}

        {/* Modal for Register */}
        {showRegisterModal && (
          <div className="modal-overlay" onClick={() => setShowRegisterModal(false)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <RegisterForm closeModal={() => setShowRegisterModal(false)} />
              <button onClick={() => setShowRegisterModal(false)} className="close-btn">Close</button>
            </div>
          </div>
        )}

        <Footer />
      </div>
    </Router>
  );
};

export default App;
