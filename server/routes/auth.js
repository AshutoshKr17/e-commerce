// routes/auth.js

const express = require('express');
const router = express.Router();
const cors = require('cors');
const { test, registerUser, loginUser } = require('../controllers/authController')
const { addAddress, fetchAddress } = require('../controllers/addressController');

router.use(cors({
    credentials: true,
    origin: 'https://e-commerce-25brobci1-ashutoshkr17.vercel.app/' // Allow requests from this origin
}
));

router.get('/', test)
router.post('/register', registerUser);
router.post('/login', loginUser);
router.post('/addAddress', addAddress);
router.get('/fetchAddresses', fetchAddress);


module.exports = router;
