
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Pages/home';

export default function App() {
    return (
        // <div> Hello app js</div>
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />

            </Routes>
        </Router>
    )
};