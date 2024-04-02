// routes/auth.js

const express = require('express');
const router = express.Router();
const cors = require('cors');
const { test, registerUser, loginUser } = require('../controllers/authController')
const { addAddress, fetchAddress } = require('../controllers/addressController');

router.use(cors({
    credentials: true,
    origin: 'http://localhost:3000' // Allow requests from this origin
}
));

router.get('/', test)
router.post('/register', registerUser);
router.post('/login', loginUser);
router.post('/addAddress', addAddress);
router.get('/fetchAddresses', fetchAddress);


module.exports = router;
