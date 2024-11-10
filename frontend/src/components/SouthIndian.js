import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/styles.css';

// Import images dynamically
import dish1 from '../assets/images/1st-dish.jpg';
import dish2 from '../assets/images/2nd-dish.jpg';
import dish3 from '../assets/images/3rd-dish.jpg';
import dish4 from '../assets/images/4th-dish.jpg';
import dish5 from '../assets/images/5th-dish.jpg';
import dish6 from '../assets/images/6th-dsh.jpg';
import dish7 from '../assets/images/7th-dish.jpg';
import dish8 from '../assets/images/8th-dish.jpg';
import yumImg from '../assets/images/yum-img.png';
const dishes = [
  { 
    src: dish1, 
    alt: 'Chicken Curry', 
    title: 'Chicken Curry', 
    provider: '388k', 
    ingredients: ['Chicken', 'Tomato', 'Onions', 'Garlic', 'Spices'],
    process: '1. Heat oil, add onions and garlic. 2. Add chicken, cook for 5 minutes. 3. Add spices and tomatoes. 4. Cook until tender.'
  },
  { 
    src: dish2, 
    alt: 'Mutton Curry', 
    title: 'Mutton Curry', 
    provider: '250k', 
    ingredients: ['Mutton', 'Ginger', 'Garlic', 'Onions', 'Spices'],
    process: '1. Marinate mutton with spices. 2. Cook with onions and garlic until tender.'
  },
  { 
    src: dish3, 
    alt: 'Fish Curry', 
    title: 'Fish Curry', 
    provider: '500k', 
    ingredients: ['Fish', 'Coconut milk', 'Ginger', 'Garlic', 'Spices'],
    process: '1. Heat oil, sauté ginger and garlic. 2. Add fish, cook for 3 minutes. 3. Add coconut milk and spices. 4. Simmer until cooked.'
  },
  { 
    src: dish4, 
    alt: 'Prawn Curry', 
    title: 'Prawn Curry', 
    provider: '200k', 
    ingredients: ['Prawns', 'Coconut milk', 'Tomatoes', 'Garlic', 'Spices'],
    process: '1. Sauté garlic and tomatoes in oil. 2. Add prawns and cook for 4 minutes. 3. Add coconut milk and spices. 4. Simmer for 10 minutes.'
  },
  { 
    src: dish5, 
    alt: 'Chilli Chicken', 
    title: 'Chilli Chicken', 
    provider: '280k', 
    ingredients: ['Chicken', 'Bell peppers', 'Onions', 'Garlic', 'Chilli sauce'],
    process: '1. Marinate chicken with spices and fry. 2. Sauté onions, bell peppers, and garlic. 3. Add fried chicken and chilli sauce. 4. Stir-fry until well combined.'
  },
  { 
    src: dish6, 
    alt: 'French Fries', 
    title: 'French Fries', 
    provider: '399k', 
    ingredients: ['Potatoes', 'Oil', 'Salt', 'Pepper'],
    process: '1. Cut potatoes into strips. 2. Deep fry potatoes in oil until golden brown. 3. Season with salt and pepper.'
  },
  { 
    src: dish7, 
    alt: 'Manchuria', 
    title: 'Manchuria', 
    provider: '150k', 
    ingredients: ['Cauliflower', 'Cornflour', 'Onions', 'Soy sauce', 'Spices'],
    process: '1. Coat cauliflower in cornflour and deep fry. 2. Sauté onions and spices. 3. Add fried cauliflower and soy sauce. 4. Stir-fry for 5 minutes.'
  },
  { 
    src: dish8, 
    alt: 'Kadai Paneer', 
    title: 'Kadai Paneer', 
    provider: '785k', 
    ingredients: ['Paneer', 'Onions', 'Tomatoes', 'Bell peppers', 'Spices'],
    process: '1. Sauté onions and tomatoes in oil. 2. Add bell peppers and spices. 3. Add paneer cubes and cook for 10 minutes.'
  }
];


const SouthIndian = ({ userAuthenticated }) => { // Pass userAuthenticated as prop
  const [showLoginPrompt, setShowLoginPrompt] = useState(false);
  const [selectedDish, setSelectedDish] = useState(null); // Track the selected dish

  const handleCardClick = (dish) => {
    if (userAuthenticated) {
      setSelectedDish(dish); // Show details if user is authenticated
    } else {
      setShowLoginPrompt(true); // Show login prompt if user is not authenticated
    }
  };

  const closeLoginPrompt = () => {
    setShowLoginPrompt(false); // Close the login prompt
  };

  const closeDishDetails = () => {
    setSelectedDish(null); // Close dish details
  };

  return (
    <div>
      <h2 id="south-indian" style={{ textAlign: 'center', marginTop: '50px', marginBottom: '50px' }}>South-Indian</h2>
      <div className="South-Indian">
        {dishes.map((dish, index) => (
          <div key={index} className="card" onClick={() => handleCardClick(dish)}>
            <div style={{ position: 'relative' }}>
              <img src={dish.src} alt={dish.alt} />
              <div className="label">Guided</div>
            </div>
            <div className="card-content">
              <div className="title">{dish.title}</div>
              <div className="provider">
                <img src={yumImg} alt="logo" /> {dish.provider}
              </div>
            </div>
            <div className="rating">
              <ion-icon name="star"></ion-icon>
              <ion-icon name="star"></ion-icon>
              <ion-icon name="star"></ion-icon>
              <ion-icon name="star"></ion-icon>
              <ion-icon name={index % 2 === 0 ? 'star-half' : 'star-outline'}></ion-icon>
            </div>
          </div>
        ))}
      </div>

      {/* Login Prompt Popup */}
      {showLoginPrompt && (
        <div className="login-prompt">
          <div className="prompt-content">
            <p>Please Register and then log in to view details!</p>
            <button className="close-btn" onClick={closeLoginPrompt}>X</button>
          </div>
        </div>
      )}

      {/* Dish Details Popup */}
      {selectedDish && (
        <div className="dish-details">
          <div className="dish-content">
            <button className="close-btn" onClick={closeDishDetails}>X</button>
            <h3>{selectedDish.title}</h3>
            <br></br>
            {/* <img src={selectedDish.src} alt={selectedDish.alt} /> */}
                        <h4>Ingredients:</h4>
                        <br></br>
            <ul className="ingredients-list">
              {selectedDish.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
            <br></br>
            <h4>Process:</h4>
            <br></br>
            <p>{selectedDish.process}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default SouthIndian;
