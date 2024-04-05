import React from 'react';
import './shop.css';

export const Shop = ({
    items,
    addToCart,
    handleDecreaseQuantity,
    handleIncreaseQuantity,
    removeFromCart,
    handleQuantity
}) => {
    // No need for isAddedToCart state here anymore

    // Add to cart handler is simplified, just calling addToCart directly
    const addToCartHandler = (item) => {
        addToCart(item);
    };

    // Determine if an item is in the cart based on its quantity
    const isItemInCart = (itemId) => {
        const quantity = handleQuantity(itemId);
        return quantity > 0;
    };

    return (
        <div className="shop-container">
            <h2>Latest Collection</h2>
            <div className="items-container">
                {items.map((item) => (
                    <div key={item.id} className="item">
                        <img src={item.image} alt={item.name} />
                        <h3>{item.name}</h3>
                        <p>₹{item.new_price}</p>
                        {isItemInCart(item.id) ? (
                            
                            <div className="quantity-buttons">
                                <span>{handleQuantity(item.id)}</span>
                                <button onClick={() => handleIncreaseQuantity(item.id)}>+</button>
                                <button onClick={() => handleDecreaseQuantity(item.id)}>-</button>
                                <button onClick={() => removeFromCart(item.id)}>Remove</button>
                                </div>
                            
                        ) : (
                            <button onClick={() => addToCartHandler(item)}>Add to Cart</button>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};
