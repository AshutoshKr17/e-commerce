import React from 'react';
import './shop.css';

export const Shop = ({ items, addToCart }) => { // Pass addToCart function as prop

    return (
        <div className="shop-container">
            <h2>Latest Collection</h2>
            <div className="items-container">
                {items.map(item => (
                    <div key={item.id} className="item">
                        <img src={item.image} alt={item.name} />
                        <h3>{item.name}</h3>
                        <p>₹{item.new_price}</p>
                        <button onClick={() => addToCart(item)}>Add to Cart</button> {/* Call addToCart function */}
                    </div>
                ))}
            </div>
        </div>
    );
};
