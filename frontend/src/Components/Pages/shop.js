import React from 'react';
import './shop.css';
import FlashCard from '../FlashCard/FlashCard.jsx';
export const Shop = ({items, incrementCartCount}) => {

    // Dummy data for items
    
    const addToCart = () => {
        incrementCartCount(); // Call the incrementCartCount function from useCart hook
    };

    return (
        <div className="shop-container">
            <h2>Lates Collection</h2>
            <div className="items-container">
                {items.map(item => (
                    <div key={item.id} className="item">
                        <img src={item.image} alt={item.name}/>
                        <h3>{item.name}</h3>
                        <p>₹{item.price}</p>
                        <button onClick={addToCart}>Add to Cart</button>
                    </div>
                ))}
            </div>
        </div>
    );
};
