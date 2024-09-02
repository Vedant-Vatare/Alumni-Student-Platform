// server.js
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Alumni = require('./models/Alumni');
const bodyParser = require('body-parser');
app.use(bodyParser.json());
const cors = require('cors');
app.use(cors());

// Connect to MongoDB
mongoose.connect('mongodb+srv://vedant_v:N7oabc8sXAeuit4H@cluster0.ivdbny1.mongodb.net/alumniDB')
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

// API to add new alumni
app.post('/api/alumni', async (req, res) => {
    try {
        const alumni = new Alumni(req.body);
        await alumni.save();
        console.log("alumni created!.")
        res.status(201).send(alumni);
    } catch (error) {
        res.status(400).send(error);
    }
});

// API to get all alumni
app.get('/api/alumni', async (req, res) => {
    try {
        const alumni = await Alumni.find();
        res.status(200).send(alumni);
    } catch (error) {
        res.status(500).send(error);
    }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
