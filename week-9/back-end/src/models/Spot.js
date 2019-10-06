const mongoose = require('mongoose');

const SpotSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
        },
        thumbnail: String,
        company: String,
        price: Number,
        techs: [String],
    },
    {
        toJSON: {
            virtuals: true,
        },
    }
);

SpotSchema.virtual('thumbnail_url').get(function() {
    return `http://localhost:3333/files/${this.thumbnail}`;
});

module.exports = mongoose.model('Spot', SpotSchema);
