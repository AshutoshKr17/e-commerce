import {React,useState} from 'react';
import './App.css';
import { Navbar } from './Components/Navbar/Navbar';
import { Shop } from './Components/Pages/shop';
// import { useCart } from '../src/Components/cartUtils'; // Import useCart hook

function App() {
    // const { cartCount, incrementCartCount } = useCart();
    const [cartCount, setCartCount] = useState(0); // Manage cart count in App state

    const incrementCartCount = () => {
      setCartCount(cartCount + 1); // Update cart count on button click
    };
  
    return (
        <div>
            <Navbar cartCount={cartCount} /> {/* Pass cartCount as prop */}
            <Shop incrementCartCount={incrementCartCount} /> {/* Pass incrementCartCount as prop */}
        </div>
    );
}

export default App;
