const express = require('express');
const app = express();

const mongoose = require('mongoose');
const cors = require('cors');
const connectDB = require('./config/db');

require('dotenv').config();



const PORT = process.env.PORT || 3000;

connectDB();



app.use(cors());
app.use(express.json());


const configurationRoutes = require('./routes/configuration.routes');


app.use('/api/configurations', configurationRoutes);


app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({
        message: 'Something went wrong!',
        error: process.env.NODE_ENV === 'development' ? err.message : undefined
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});