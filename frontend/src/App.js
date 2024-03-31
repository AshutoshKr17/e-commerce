
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Pages/home';
import PlaceOrder from './Components/Pages/placeOrder';
import Payment from './Components/Pages/paymentGateway'
import Login from './Components/Pages/login';
import axios from 'axios';
import Register from './Components/Pages/register';
import { Toaster } from 'react-hot-toast';
axios.defaults.baseURL = 'http://localhost:8000';
axios.defaults.withCredentials = true;

export default function App() {
    return (
        // <div> Hello app js</div>
        <>
        <Toaster position='bottom-right' toastOptions={{duration:2000}}/>
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path='/placeorder' element={<PlaceOrder />} />
                <Route path='/payment' element={<Payment />} />
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />
            </Routes>
        </Router>
        </>
    )
};