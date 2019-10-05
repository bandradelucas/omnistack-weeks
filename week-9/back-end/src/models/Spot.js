const mongoose = require('mongoose');

const SpotSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    thumbnail: String,
    company: String,
    price: Number,
    techs: [String],
});

module.exports = mongoose.model('Spot', SpotSchema);
