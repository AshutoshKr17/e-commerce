
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Pages/home';
import PlaceOrder from './Components/Pages/placeOrder';
import Payment from './Components/Pages/paymentGateway'
export default function App() {
    return (
        // <div> Hello app js</div>
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path='/placeorder' element={<PlaceOrder />} />
                <Route path='/payment' element={<Payment />} />
            </Routes>
        </Router>
    )
};