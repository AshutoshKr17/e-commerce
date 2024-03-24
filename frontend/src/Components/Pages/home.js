import React, { useState } from 'react';
import './home.css';
import { Navbar } from '../Navbar/Navbar';
import { Shop } from './shop';
import FlashCard from '../FlashCard/FlashCard';
import items from '../Assets/current';

const Home = () => {
    const [cartCount, setCartCount] = useState(0);
    const incrementCartCount = () => {
        setCartCount(cartCount + 1);
    };
    return (
        <>
            <div>
                <Navbar cartCount={cartCount} />
                <Shop items={items} incrementCartCount={incrementCartCount} />
                <div className='header'>Trending</div>
                <FlashCard items={items} incrementCartCount={incrementCartCount}></FlashCard>
            </div>
        </>
    );
}

export default Home;
