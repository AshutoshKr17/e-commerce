import React from 'react';
import './placeOrder.css'
import { useNavigate } from 'react-router-dom';

export default function PlaceOrder() {
    const navigate = useNavigate();
    const submitHandler = (event) => {
        event.preventDefault(); // Prevent the default form submission behavior
        // Add your submission logic here
        // For example, you can access form data using event.target
        const formData = new FormData(event.target);
        const name = formData.get('name');
        const password = formData.get('password');
        const address = formData.get('address');
        const mobileNumber = formData.get('mobileNo');
        console.log('Form Data:', { name, password, address, mobileNumber });
        navigate('/payment')
    };

    return (
        <div>
            <form className='userDetails' onSubmit={submitHandler}>
                <label>Name:</label>
                <input name='name' className='name' placeholder='Enter Name' required />
                <label>Password:</label>
                <input name='password' className='password' type='password' placeholder='Please enter your password' required />
                <label>Address:</label>
                <input name='address' className='address' placeholder='Please enter Address' required />
                <label>Mobile Number:</label>
                <input name='mobileNo' className='mobileNo' placeholder='Please enter your mobile number' required />
                <button type='submit'>PlaceOrder</button>
            </form>
        </div>
    );
}
