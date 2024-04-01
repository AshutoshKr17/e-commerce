import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './AddToCart.css';
import toast from 'react-hot-toast';

function Cart({ onClose, cartItems, isLoggedIn, removeFromCart, handleIncreaseQuantity, handleDecreaseQuantity }) {
  const [isOpen, setIsOpen] = useState(true);
  const navigate = useNavigate();

  const handleClose = () => {
    setIsOpen(false);
    onClose();
  };

  const handlePlaceOrder = () => {
    console.log(isLoggedIn);
    if (!isLoggedIn) {
      toast.error('Please login first!');
    } else {
      localStorage.setItem('cartItems', cartItems);
      navigate('/placeorder');
    }
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
              <p>${item.new_price}</p>
              <div>
                <button onClick={() => handleDecreaseQuantity(item.id)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => handleIncreaseQuantity(item.id)}>+</button>
                <button onClick={() => removeFromCart(item.id)}>Remove</button>
              </div>
              <div className="popup-divider"></div>
            </div>
          ))}
          {cartItems.length === 0 && <p>No items in the cart</p>}
          {cartItems.length > 0 && (
            <div>
              <button className='placeorderbtn' onClick={handlePlaceOrder}>Place Order</button>
              <button className='closebtn' onClick={handleClose}>Close</button>
            </div>
          )}
        </div>
      )}
      {isOpen && <div className="popupclosed" onClick={handleClose}></div>}
    </div>
  );
}

export default Cart;

