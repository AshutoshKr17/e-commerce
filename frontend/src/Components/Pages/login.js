import { React, useState } from 'react'
import './login.css'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import {toast} from 'react-hot-toast';

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
            localStorage.setItem('username', response.data.user.username)
            localStorage.setItem('token', response.data.token);
            console.log(response.data); // Handle the response data as needed
            // if (response.status == 200) {
            //     navigate('/')
            // }
            if(response.data.error){
                toast.error(response.data.error);
            }
            else{
                setData({});
                toast.success('Login Successful. Welcome!');
                navigate('/')
            }
        } catch (error) {
            console.error('Error:', error.response.data);
        }
    }
    const clickHandler = () => {
        navigate('/register')
    }
    return (
        <div>
            <form onSubmit={submitHandler}>
                <label htmlFor="email">Email:</label>
                <input type="email" value={data.email} onChange={(e) => setData({ ...data, email: e.target.value })} />
                <label htmlFor="password">Password:</label>
                <input type="password" value={data.password} onChange={(e) => setData({ ...data, password: e.target.value })} />
                <button type='submit'>login</button>
                <div id="text" onClick={clickHandler}> Not a registered User ? seriously :wink: ? click here bitch ! </div>
            </form>

        </div>
    )
}
