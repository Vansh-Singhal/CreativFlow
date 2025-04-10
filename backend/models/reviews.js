import mongoose, { Schema } from "mongoose";

const reviewSchema = new Schema({
    sender: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    receiver: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    description: {
        type: String, required: true
    },
    rating: {
        type: Number, required: true
    },
    createdAt: {
        type: Date, default: Date.now
    }
});

const reviewdb = mongoose.model('Review', reviewSchema);
