// server.js

const express = require('express');
const { mongoose } = require('mongoose');
const dotenv = require('dotenv').config();


mongoose.connect(process.env.MONGO_URL)
    .then(() => console.log('Database Connected'))
    .catch((err) => console.log('Database connection failed', err));


const app = express();

app.use(express.json());

app.use('/', require('./routes/auth'));

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
