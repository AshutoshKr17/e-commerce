import {React,useState} from 'react';
import './App.css';
import { Navbar } from './Components/Navbar/Navbar';
import { Shop } from './Components/Pages/shop';
import FlashCard from './Components/FlashCard/FlashCard';
// import { useCart } from '../src/Components/cartUtils'; // Import useCart hook

function App() {
    const items = [
        {
            id: 7,
            name: 'Item 1',
            price: 20,
            image: 'item1.jpg'
        }, {
            id: 6,
            name: 'Item 1',
            price: 20,
            image: 'item1.jpg'
        }, {
            id: 1,
            name: 'Item 1',
            price: 20,
            image: 'item1.jpg'
        }, {
            id: 2,
            name: 'Item 2',
            price: 30,
            image: 'item2.jpg'
        }, {
            id: 2,
            name: 'Item 2',
            price: 30,
            image: 'item2.jpg'
        }, {
            id: 2,
            name: 'Item 2',
            price: 30,
            image: 'item2.jpg'
        }, {
            id: 2,
            name: 'Item 2',
            price: 30,
            image: 'item2.jpg'
        }, {
            id: 2,
            name: 'Item 2',
            price: 30,
            image: 'item2.jpg'
        }, {
            id: 2,
            name: 'Item 2',
            price: 30,
            image: 'item2.jpg'
        }, {
            id: 2,
            name: 'Item 2',
            price: 30,
            image: 'item2.jpg'
        }, {
            id: 2,
            name: 'Item 2',
            price: 30,
            image: 'item2.jpg'
        }, {
            id: 2,
            name: 'Item 2',
            price: 30,
            image: 'item2.jpg'
        }, {
            id: 2,
            name: 'Item 2',
            price: 30,
            image: 'item2.jpg'
        }, {
            id: 2,
            name: 'Item 2',
            price: 30,
            image: 'item2.jpg'
        }
    ];

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
