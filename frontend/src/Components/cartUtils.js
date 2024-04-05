import { useEffect, useState } from 'react';

export const useCart = () => {
    const [cartItems, setCartItems] = useState([]); // State to manage cart items
    const [cartCount2, setCartCount] =useState(0);
  
    const cartCount = cartItems.length;
    

    const removeFromCart = (itemId) => {
        setCartItems(cartItems => cartItems.filter(item => item.id !== itemId));
    }

    const addToCart = (item) => {
        const existingItemIndex = cartItems.findIndex(cartItem => cartItem.id === item.id);
        if (existingItemIndex !== -1) {
            // If item already exists in the cart, update its quantity
            const updatedCartItems = [...cartItems];
            updatedCartItems[existingItemIndex].quantity += 1;
            setCartItems(updatedCartItems);
        } else {
            // If item doesn't exist in the cart, add it with quantity 1
            setCartItems(prevItems => [...prevItems, { ...item, quantity: 1 }]);
        }
        // setCartItems([...cartItems, item]);
    };

    const handleIncreaseQuantity = (itemId) => {
        const updatedCartItems = cartItems.map(item =>
            item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
        );
        setCartItems(updatedCartItems);
    };

    const handleDecreaseQuantity = (itemId) => {
        const updatedCartItems = cartItems.map(item => {
            if (item.id === itemId) {
                const updatedQuantity = Math.max(item.quantity - 1, 0);
                // If quantity becomes 0, remove the item from the cart
                if (updatedQuantity === 0) {
                    return null;
                } else {
                    return { ...item, quantity: updatedQuantity };
                }
            } else {
                return item;
            }
        }).filter(item => item !== null); // Remove null items from the array

        setCartItems(updatedCartItems);
    };
    const handleQuantity = (itemId) => {
        // Find the item in the cart
        const item = cartItems.find((item) => item.id === itemId);
        // Return the item's quantity if found, otherwise return 0
        return item ? item.quantity : 0;
    };


   
    const handleEmptyCart = () =>{
        setCartItems([]);
    };
   
    useEffect(() => {
        setCartCount(cartItems.reduce((total, item) => total + item.quantity, 0));
    }, [cartItems]);


    return {
        cartCount,
        addToCart,
        cartItems, // Expose addToCart function
        removeFromCart,
        handleDecreaseQuantity,
        handleIncreaseQuantity,
        handleEmptyCart,
        cartCount2,
        handleQuantity
      
    };
   
};
