import React, { useState, useEffect } from 'react';
import './placeOrder.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function PlaceOrder() {
    const navigate = useNavigate();
    const [addresses, setAddresses] = useState([]);
    const [selectedAddress, setSelectedAddress] = useState(null); // State to track the selected address
    const [showPopup, setShowPopup] = useState(false);
    const [newAddress, setNewAddress] = useState('');
    const [newMobile, setNewMobile] = useState('');
    const [error, setError] = useState(null);

    useEffect(() => {
        // Fetch addresses when component mounts
        fetchAddresses();
    }, []);

    const submitHandler = () => {
        localStorage.setItem('address', selectedAddress);
        console.log(selectedAddress);
        navigate('/payment');
    };

    const togglePopup = () => {
        setShowPopup(!showPopup);
    };

    const handleAddAddress = async () => {
        try {
            // Call your backend API to add address
            const response = await axios.post('/addAddress', {
                token: localStorage.getItem('token'),
                address: newAddress,
                mobile: newMobile
            }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (response.status >= 200 && response.status < 300) {
                // Update UI optimistically
                setAddresses([
                    ...addresses,
                    { address: newAddress, mobile: newMobile }
                ]);
                // Clear input fields
                setNewAddress('');
                setNewMobile('');
                // Close the popup
                togglePopup();
            } else {
                throw new Error('Failed to add address');
            }
        } catch (error) {
            setError('Failed to add address');
        }
    };

    const fetchAddresses = async () => {
        try {
            // Call your backend API to fetch addresses
            const response = await axios.get('/fetchAddresses', {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            });
            setAddresses(response.data);
        } catch (error) {
            console.log('Failed to fetch addresses');
        }
    };

    const handleAddressSelection = (address) => {

        setSelectedAddress(address);
    };


    return (
        <div className="container">
            <div className="content">
                <div>Addresses:</div>
                <ul>
                    {addresses.map((addressObj, index) => (
                        <li
                            key={index}
                            className={selectedAddress === addressObj ? 'selected' : ''}
                            onClick={() => handleAddressSelection(addressObj)}>
                            Address: {addressObj.address}, Mobile: {addressObj.mobile}
                        </li>
                    ))}
                </ul>
                <button onClick={togglePopup}>Add Address</button>
                <button onClick={submitHandler}>Place Order</button>
                {error && <div className="error">{error}</div>}
            </div>
            {showPopup && (
                <div className="popup">
                    <div className="popup-inner">
                        <h2>Add Address</h2>
                        <input
                            type="text"
                            placeholder="Address"
                            value={newAddress}
                            onChange={(e) => setNewAddress(e.target.value)} />
                        <input
                            type="text"
                            placeholder="Mobile"
                            value={newMobile}
                            onChange={(e) => setNewMobile(e.target.value)} />
                        <button onClick={handleAddAddress}>Add Address</button>
                        <button onClick={togglePopup}>Cancel</button>
                    </div>
                </div>
            )}
        </div>
    );
}
