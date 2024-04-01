import React, { useState } from 'react';
import './Navbar.css'

import Cart from '../AddToCart/AddToCart.jsx';
import cart_icon from '../Assets/cart_icon.png'
import { Navigate, useNavigate } from 'react-router-dom';

export const Navbar = ({ cartCount, cartItems, removeFromCart, handleDecreaseQuantity, handleIncreaseQuantity }) => {
   const navigate = useNavigate();
   const [isPopupOpen,
      setIsPopupOpen] = useState(false);

   const [isLoggedIn,
      setIsLoggedIn] = useState(!!localStorage.getItem('token'));
   const [userName,
      setUsername] = useState(localStorage.getItem('username'));

   const togglePopup = () => {
      setIsPopupOpen(!isPopupOpen);
   };

   const loginHandler = (event) => {
      navigate('/login')
   }
   const logoutHandler = () => {
      setIsLoggedIn(false);
      localStorage.removeItem('token');
      setUsername('');
   }
   return (
      <div>
         <div className='navbar'>
            <div className="nav-logo">
               <p>MOONSTONE</p>
            </div>
            <div className="nav-menu">
               <ul>
                  <li>Shop<hr /></li>
                  <li>Women</li>
               </ul>
            </div>

            <div className="nav-login-cart">
               {isLoggedIn
                  ? (
                     <div>
                        <span>Welcome {userName}!</span>
                        <button onClick={logoutHandler}>Logout</button>
                     </div>
                  )
                  : (
                     <button onClick={loginHandler}>Login</button>
                  )}
               <div className="cart-icon-container">
                  <button onClick={togglePopup}>
                     <img src={cart_icon} alt='cart-icon'></img>
                  </button>
                  <span className="cart-count">{cartCount}</span>
               </div>
            </div>
         </div>
         {isPopupOpen && <Cart
            onClose={() => setIsPopupOpen(false)}
            cartItems={cartItems}
            isLoggedIn={isLoggedIn}
            removeFromCart={removeFromCart}
            handleIncreaseQuantity={handleIncreaseQuantity}
            handleDecreaseQuantity={handleDecreaseQuantity} />}
      </div>
   )
};
export default {
   Navbar
};
