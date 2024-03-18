import {React,useState} from 'react';
import './App.css';
import { Navbar } from './Components/Navbar/Navbar';
import { Shop } from './Components/Pages/shop';
import FlashCard from './Components/FlashCard/FlashCard';
// import { useCart } from '../src/Components/cartUtils'; // Import useCart hook
import items from '../src/Components/Assets/current';
function App() {

    // const { cartCount, incrementCartCount } = useCart();
    const [cartCount, setCartCount] = useState(0); // Manage cart count in App state

    const incrementCartCount = () => {
      setCartCount(cartCount + 1); // Update cart count on button click
    };
  
    return (
        <div>
            <Navbar cartCount={cartCount} /> {/* Pass cartCount as prop */}
            <Shop items = {items} incrementCartCount={incrementCartCount} /> {/* Pass incrementCartCount as prop */}
            <div className='header'>Trending</div>
            <FlashCard items = {items} incrementCartCount={incrementCartCount}></FlashCard>
        </div>
    );
}

export default App;
