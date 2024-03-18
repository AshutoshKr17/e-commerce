import React from 'react';
import './shop.css';
import { useCart } from '../cartUtils'; // Import useCart hook

export const Shop = ({incrementCartCount}) => {
    // const { incrementCartCount } = useCart(); // Use the useCart hook to access incrementCartCount function

    // Dummy data for items
    const items = [
        {
            id: 7,
            name: 'Item 1',
            price: 20,
            image: 'item1.jpg'
        },{
            id: 6,
            name: 'Item 1',
            price: 20,
            image: 'item1.jpg'
        },{
            id: 1,
            name: 'Item 1',
            price: 20,
            image: 'item1.jpg'
        },{
            id: 2,
            name: 'Item 1',
            price: 20,
            image: 'item1.jpg'
        },{
            id: 3,
            name: 'Item 1',
            price: 20,
            image: 'item1.jpg'
        },{
            id: 4,
            name: 'Item 1',
            price: 20,
            image: 'item1.jpg'
        }
        // Other items omitted for brevity
    ];

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
