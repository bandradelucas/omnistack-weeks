const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
    spot: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Spot',
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    date: String,
    approved: Boolean,
});

module.exports = mongoose.model('Booking', BookingSchema);
