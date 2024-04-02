
const { UserDetails } = require('../models/user');
const jwt = require('jsonwebtoken');

const addAddress = async (req, res) => {
    const { token, address, mobile } = req.body;

    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    const userId = decodedToken.userId;

    try {
        let userDetails = await UserDetails.findOne({ user: userId });

        // Check if userDetails.addresses exists, if not, create it
        if (!userDetails) {
            // If userDetails is null, create a new UserDetails document
            userDetails = new UserDetails({ user: userId, addresses: [] });
        }
        // Push the new address
        userDetails.addresses.push({ address, mobile });

        await userDetails.save();

        res.status(200).json(userDetails); // Send user details as response
    } catch (error) {
        console.error('Error adding address:', error);
        res.status(500).json({ error: 'An error occurred while adding address' });
    }
};

const fetchAddress = async (req, res) => {
    const token = req.headers.authorization.split(' ')[1];
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    const userId = decodedToken.userId;

    try {
        const userDetails = await UserDetails.findOne({ user: userId });
        if (!userDetails) {
            throw new Error('User details not found');
        }
        console.log(userDetails.addresses)
        res.json(userDetails.addresses).status(200); // Send addresses as response
    } catch (error) {
        console.error('Error fetching addresses:', error);
        res.status(500).json({ error: 'An error occurred while fetching addresses' });
    }
};

module.exports = { addAddress, fetchAddress };