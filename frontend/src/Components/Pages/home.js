import { React, useState } from 'react';
import './home.css'
import { Navbar } from '../Navbar/Navbar';
import { Shop } from './shop';
import FlashCard from '../FlashCard/FlashCard';
import { useCart } from '../cartUtils'; // Import useCart hook

// import { useCart } from '../src/Components/cartUtils'; // Import useCart hook
import items from '../Assets/current';

function Home() {
    const { cartCount, addToCart, cartItems, removeFromCart } = useCart(); // Destructure cartCount and addToCart from useCart hook

    return (
        <div>
            <Navbar cartCount={cartCount} cartItems={cartItems} removeFromCart={removeFromCart} /> {/* Pass cartCount as prop */}
            <Shop items={items} addToCart={addToCart} /> {/* Pass addToCart as prop */}
            <div className='header'>Trending</div>
            <FlashCard items={items} ></FlashCard>
        </div>
    )
}

export default Home;