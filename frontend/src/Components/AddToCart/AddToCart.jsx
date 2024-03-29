import React, { useState, useEffect } from 'react';
import './AddToCart.css';
function Cart({ onClose, cartItems }) {
  const [isOpen, setIsOpen] = useState(true);

  // Close the popup when cartItems change
  useEffect(() => {
    if (cartItems.length === 0) {
      onClose();
    }
  }, [cartItems, onClose]);

  const handleClose = () => {
    setIsOpen(false);
    onClose();
  };

  const handlePlaceOrder = () => {
    // Handle placing order logic
  };

  return (
    <div>
      {isOpen && (
        <div className="popup">
          <h2>Shopping Cart</h2>
            
          {cartItems.map(item => (
            <div key={item.id}>
              <p>{item.name}</p>
              <img src={item.image} alt={item.name} />
              <p>${item.old_price}</p>
            </div>
          ))}
          
          <button onClick={handlePlaceOrder}>Place Order</button>
          <button onClick={handleClose}>Close</button>
        </div>
      )}
      {isOpen && <div className="popupclosed" onClick={handleClose}></div>}
    </div>
  );
}

export default Cart;