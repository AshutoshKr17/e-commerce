import React, { useState } from 'react';
import axios from 'axios'; // Import axios for making HTTP requests
import { useNavigate } from 'react-router-dom';
import './register.css'
import { toast } from 'react-hot-toast';
export default function Register() {
    const [data,
        setData] = useState({ username: '', email: '', password: '' });
    const navigate = useNavigate();

    const submitHandler = async (event) => {
        event.preventDefault();
        // console.log(data);
        try {
            const response = await axios.post('/register', data);
            // console.log(response.data);
            if (response.data.error) {
                toast.error(response.data.error);
            }
            else {
                setData({});
                toast.success('Registration Successful. Welcome!');
                navigate('/')
            }
            // if (response.status == 200) {
            //     navigate('/')
            // }

        } catch (error) {
            console.error('Error:', error.response.data);
        }
    };
    const loginRed = () => {
        navigate('/login');
    }
    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div>
            <form onSubmit={submitHandler}>
                <label htmlFor="name">User Name:</label>
                <input
                    type='text'
                    id='username'
                    name='username'
                    placeholder='Enter Your User Name'
                    value={data.username}
                    onChange={handleChange} />

                <label htmlFor="email">Email:</label>
                <input
                    type='email'
                    id='email'
                    name='email'
                    placeholder='Enter Your Email'
                    value={data.email}
                    onChange={handleChange} />

                <label htmlFor="password">Password:</label>
                <input
                    type='password'
                    id='password'
                    name='password'
                    placeholder='Enter Your Password'
                    value={data.password}
                    onChange={handleChange} />

                <button type='submit'>Register</button>
                <button id='loginRed' onClick={loginRed}>Login</button>
            </form>

        </div>
    );
}
