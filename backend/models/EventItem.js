
const mongoose = require('mongoose');

const eventItemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
});

const EventItem = mongoose.model('EventItem', eventItemSchema);

module.exports = EventItem;