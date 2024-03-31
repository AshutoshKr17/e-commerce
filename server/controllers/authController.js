
const bcrypt = require('bcrypt');
const User = require('../models/user');
const dotenv = require('dotenv').config();
const jwt = require('jsonwebtoken');

const test = (req, res) => {
    res.json("test is working");
}

const registerUser = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        //valid name
        if (!username) {
            return res.json({
                error: 'Name is required'
            });
        }
        //valid passsword
        if (!password || password.length < 6) {
            return res.json({
                error: !password ? 'Password is required' : 'Password must be atleast 6 characters long'
            });
        }
        // Hash the password

        const hashedPassword = await bcrypt.hash(req.body.password, 10);

        const validEmail = await User.findOne({ email: req.body.email });
        if (validEmail) {
            return res.json({ error: 'User already exist' }).status(404);
        }
        // Create a new user
        const user = new User({
            username: req.body.username,
            email: req.body.email,
            password: hashedPassword
        });

        // Save the user to the database
        await user.save();

        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        console.error('Error registering user:', error);
        res.status(500).json({ error: 'An error occurred while registering the user' });
    }
}

const loginUser = async (req, res) => {
    try {
        // Find the user by email
        const user = await User.findOne({ email: req.body.email });
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        // Compare passwords
        const passwordMatch = await bcrypt.compare(req.body.password, user.password);
        if (!passwordMatch) {
            return res.status(401).json({ error: 'Invalid password' });
        }

        // Generate JWT token
        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);

        res.status(200).json({ token, user });
    } catch (error) {
        console.error('Error logging in user:', error);
        res.status(500).json({ error: 'An error occurred while logging in' });
    }
};


module.exports = {
    test,
    registerUser,
    loginUser
}