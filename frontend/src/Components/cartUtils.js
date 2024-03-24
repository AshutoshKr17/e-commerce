import { useState } from 'react';

export const useCart = () => {
   const [cartCount, setCartCount] = useState(0);
    const [cartItems, setCartItems] = useState([]); // State to manage cart items

    // const incrementCartCount = () => {
    //     setCartCount(cartCount + 1);
    //     console.log("Count:",cartCount);
    // };

    //need to fix cartcount
    const addToCart = (item) => {
        setCartItems([...cartItems, item]);
        setCartCount(cartItems.length+1);
        console.log("Items:");
        console.log("Count: ",cartItems.length+1);
        cartItems.forEach(item => {
            console.log(item.id,item.name);
        });
    };

    return {
        cartCount,
        
        addToCart,
        cartItems // Expose addToCart function
    };
};
