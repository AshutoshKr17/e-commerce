import React from 'react';
import './App.css';
import { Navbar } from './Components/Navbar/Navbar';
import { Shop } from './Components/Pages/shop';
import FlashCard from './Components/FlashCard/FlashCard';
import { useCart } from '../src/Components/cartUtils'; // Import useCart hook
import items from '../src/Components/Assets/current';

function App() {
    const { cartCount, addToCart } = useCart(); // Destructure cartCount and addToCart from useCart hook

    return (
        <div>
            <Navbar cartCount={cartCount} /> {/* Pass cartCount as prop */}
            <Shop items={items} addToCart={addToCart} /> {/* Pass addToCart as prop */}
            <div className='header'>Trending</div>
            <FlashCard items={items} addToCart={addToCart}></FlashCard>
        </div>
    );
}

export default App;
