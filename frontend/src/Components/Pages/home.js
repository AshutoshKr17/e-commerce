import { React, useState } from 'react';
import './home.css'
import { Navbar } from '../Navbar/Navbar';
import { Shop } from './shop';
import FlashCard from '../FlashCard/FlashCard';

// import { useCart } from '../src/Components/cartUtils'; // Import useCart hook
import items from '../Assets/current';

function Home() {
    // const { cartCount, incrementCartCount } = useCart();
    const [cartCount,
        setCartCount] = useState(0); // Manage cart count in App state
    const incrementCartCount = () => {
        // setCartItems()
        setCartCount(cartCount + 1); // Update cart count on button click
    };
    return (
        <div>
            <Navbar cartCount={cartCount} /> {/* Pass cartCount as prop */}
            <Shop items={items} incrementCartCount={incrementCartCount} /> {/* Pass incrementCartCount as prop */}
            <div className='header'>Trending</div>
            <FlashCard items={items} incrementCartCount={incrementCartCount}></FlashCard>
        </div>
    )
}

export default Home;