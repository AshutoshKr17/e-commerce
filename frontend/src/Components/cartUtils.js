import { useState } from 'react';

export const useCart = () => {
    const [cartCount, setCartCount] = useState(0);

    const incrementCartCount = () => {
        setCartCount(cartCount+1);
    };

    return {
        cartCount,
        incrementCartCount,
    };
};
