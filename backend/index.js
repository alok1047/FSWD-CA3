const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const EventItem = require('./models/EventItem'); 

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Event Registration API');
});


app.get('/events', async (req, res) => {
    try {
        const events = await EventItem.find();
        res.json(events);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

app.post('/events', async (req, res) => {
    const { name, date, location, description } = req.body; 

    const newEvent = new EventItem({
        name,
        date,
        location
    });

    try {
        await newEvent.save();
        res.status(201).json(newEvent);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('✅ MongoDB Connected');
        app.listen(PORT, () => {
            console.log(`Server running on port http://localhost:${PORT}`);
        });
    })
    .catch(err => {
        console.error('MongoDB connection failed:', err.message);
        process.exit(1);
    });