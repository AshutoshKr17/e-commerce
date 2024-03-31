import { useEffect, useState } from 'react';

export const useCart = () => {
    const [cartItems, setCartItems] = useState([]); // State to manage cart items

    const cartCount = cartItems.length;

    const removeFromCart = (itemId) => {
        setCartItems(cartItems => cartItems.filter(item => item.id !== itemId));
    }

    const addToCart = (item) => {
        setCartItems([...cartItems, item]);
    };

    useEffect(() => {

    }, [cartItems]);

    return {
        cartCount,
        addToCart,
        cartItems, // Expose addToCart function
        removeFromCart
    };
};
