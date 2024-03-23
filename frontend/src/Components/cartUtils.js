import { useState } from 'react';

export const useCart = () => {
    const [cartCount, setCartCount] = useState(0);
    const [cartItems, setCartItems] = useState([]); // State to manage cart items

    const incrementCartCount = () => {
        setCartCount(cartCount + 1);
        console.log("Count:",cartCount);
    };

    const addToCart = (item) => {
        setCartItems([...cartItems, item]);
        console.log("Items:");
        console.log("Count: ",cartItems.length);
        cartItems.forEach(item => {
            console.log(item.id,item.name);
        });
    };

    return {
        cartCount,
        incrementCartCount,
        addToCart // Expose addToCart function
    };
};
