import React from 'react'
import './Navbar.css'

import cart_icon from '../Assets/cart_icon.png'

export const Navbar = () => {
  return (
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
            <img src= {cart_icon} alt='cart-icon'></img>
         </div>
    </div>
  )
}
