import { React, useState } from 'react'
import './login.css'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';

export default function login() {
    const [data, setData] = useState({
        email: '',
        password: ''
    });
    const navigate = useNavigate();

    const submitHandler = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('/login', data);

            console.log(response.data); // Handle the response data as needed
            if (response.status == 200) {
                navigate('/')
            }
        } catch (error) {
            console.error('Error:', error);
        }
    }
    const clickHandler = () => {
        navigate('/register')
    }
    return (
        <div>
            <form onSubmit={submitHandler}>
                <input type="email" value={data.email} onChange={(e) => setData({ ...data, email: e.target.value })} />
                <input type="password" value={data.password} onChange={(e) => setData({ ...data, password: e.target.value })} />
                <button type='submit'>login</button>
            </form>
            <div id="text" onClick={clickHandler}> Not a registered User ? seriously :wink: ? click here bitch ! </div>
        </div>
    )
}