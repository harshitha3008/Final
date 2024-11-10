// CookingSkills.js
import React from 'react';
import '../assets/styles.css';
import beginnerImage from '../assets/images/beginner.png';
import intermediateImage from '../assets/images/intermediate.png';
import advancedImage from '../assets/images/advanced.png';

const CookingSkills = () => {
  return (
    <div className="skills-section">
      <h2>How would you describe your cooking skills?</h2>
      <div className="skills-options">
        <div className="skill-option">
          <img src={beginnerImage} alt="Beginner" />
          <p>Beginner</p>
        </div>
        <div className="skill-option">
          <img src={intermediateImage} alt="Intermediate" />
          <p>Intermediate</p>
        </div>
        <div className="skill-option">
          <img src={advancedImage} alt="Advanced" />
          <p>Advanced</p>
        </div>
      </div>
    </div>
  );
};

export default CookingSkills;
