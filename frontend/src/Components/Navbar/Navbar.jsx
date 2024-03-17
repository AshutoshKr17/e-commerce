import React, { useState } from 'react';
import './Navbar.css'
import AddToCart from  '../AddToCart/AddToCart.jsx';
import cart_icon from '../Assets/cart_icon.png'
export const Navbar = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };
     
   
  return (
   <>
    <div className='navbar'>
         <div className="nav-logo">
            <p>Queen</p>
         </div>
         <div className="nav-menu">
            <ul>
                <li>Shop<hr/></li>
                <li>Women</li>
            </ul>
         </div>   
         <div className="nav-login-cart">
            <button>Login</button>
            <button onClick={togglePopup}><img src= {cart_icon} alt='cart-icon'></img></button>
            
         </div>
    </div>
    {isPopupOpen && <AddToCart onClose={() => setIsPopupOpen(false)} />}
    </>
  )
};
export default Navbar;
