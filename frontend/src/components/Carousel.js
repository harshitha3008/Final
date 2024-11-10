// Cuisines.js
import React from 'react';
import '../assets/styles.css';
import american from '../assets/images/american.jpg';
import kidFriendly from '../assets/images/kid-friendly.jpg';
import italian from '../assets/images/italian.jpg';
import asian from '../assets/images/asian.jpg';
import mexican from '../assets/images/mexican.jpg';
import southern from '../assets/images/southern.jpg';
import french from '../assets/images/french.jpg';
import southwestern from '../assets/images/southwestern.jpg';
import barbecue from '../assets/images/barbecue.jpg';
import indian from '../assets/images/indian.jpg';
import cajun from '../assets/images/cajun.jpg';
import mediterranean from '../assets/images/mediterranean.jpg';
import greek from '../assets/images/greek.jpg';
import korean from '../assets/images/korean.jpg';
import english from '../assets/images/english.jpg';

const Cuisines = () => {
  const cuisines = [
    { src: american, alt: 'American', name: 'American' },
    { src: kidFriendly, alt: 'Kid-Friendly', name: 'Kid-Friendly' },
    { src: italian, alt: 'Italian', name: 'Italian' },
    { src: asian, alt: 'Asian', name: 'Asian' },
    { src: mexican, alt: 'Mexican', name: 'Mexican' },
    { src: southern, alt: 'Southern & Soul Food', name: 'Southern & Soul Food' },
    { src: french, alt: 'French', name: 'French' },
    { src: southwestern, alt: 'Southwestern', name: 'Southwestern' },
    { src: barbecue, alt: 'Barbecue', name: 'Barbecue' },
    { src: indian, alt: 'Indian', name: 'Indian' },
    { src: cajun, alt: 'Cajun & Creole', name: 'Cajun & Creole' },
    { src: mediterranean, alt: 'Mediterranean', name: 'Mediterranean' },
    { src: greek, alt: 'Greek', name: 'Greek' },
    { src: korean, alt: 'Korean', name: 'Korean' },
    { src: english, alt: 'English', name: 'English' },
  ];

  return (
    <section id="cuisines">
      <h2>What are your favorite cuisines?</h2>
      <div className="carousel">
        <div className="carousel-container">
          {cuisines.map((cuisine, index) => (
            <div key={index} className="cuisine-item">
              <img src={cuisine.src} alt={cuisine.alt} />
              <p>{cuisine.name}</p>
            </div>
          ))}
        </div>
        <button className="carousel-btn left-btn">&#10094;</button>
        <button className="carousel-btn right-btn">&#10095;</button>
      </div>
    </section>
  );
};

export default Cuisines;
