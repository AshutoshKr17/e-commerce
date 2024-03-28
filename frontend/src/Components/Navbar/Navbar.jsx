import React, { useState } from 'react';
import './Navbar.css'

import Cart from '../AddToCart/AddToCart.jsx';
import cart_icon from '../Assets/cart_icon.png'
import { Navigate, useNavigate } from 'react-router-dom';
export const Navbar = ({ cartCount, cartItems }) => {
   const navigate = useNavigate();
   const [isPopupOpen, setIsPopupOpen] = useState(false);

   const togglePopup = () => {
      setIsPopupOpen(!isPopupOpen);
   };

   const loginHandler = (event) => {
      navigate('/login')
      console.log("Hello world");
   }

   return (
      <>
         <div className='navbar'>
            <div className="nav-logo">
               <p>Queen</p>
            </div>
            <div className="nav-menu">
               <ul>
                  <li>Shop<hr /></li>
                  <li>Women</li>
               </ul>
            </div>
            <div className="nav-login-cart">
               <button onClick={loginHandler}>Login</button>
               <div className="cart-icon-container">
                  <button onClick={togglePopup}><img src={cart_icon} alt='cart-icon'></img></button>
                  <span className="cart-count">{cartCount}</span>
               </div>
            </div>
         </div>
         {isPopupOpen && <Cart onClose={() => setIsPopupOpen(false)} cartItems={cartItems} />}
      </>
   )
};
export default Navbar;
