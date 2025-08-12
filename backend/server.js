const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

// Import Routes
const doctorRoute = require("./routes/doctorRoute.js");
const sampleRoute = require("./routes/index.js");
const appointmentRoutes = require("./routes/appointmentRoute.js");

// Initialize express app
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/doctors', doctorRoute);
app.use('/api', sampleRoute);
app.use('/api/appointments', appointmentRoutes);

// Connect to MongoDB and start the server
mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        console.log('✅ MongoDB Connected');
        app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
    })
    .catch(err => {
        console.error('❌ MongoDB connection failed:', err);
    });