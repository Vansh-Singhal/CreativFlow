import mongoose, { Schema } from "mongoose";

const jobSchema = new Schema({
    id: {
        type: String,
        required: true, unique: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    budget: {
        type: Number,
        required: true
    },
    client: {
        type: Schema.Types.ObjectId, ref: 'User',
        required: true
    }, // Reference to User
    skills: {
        type: [String],
        required: true
    },
    duration: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: false
    },
    applications: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    category: {
        type: String,
        required: true
    },
    experience: {
        type: String, enum: ['entry', 'intermediate', 'expert', 'any'],
        required: true
    },
    type: {
        type: String, enum: ['fixed', 'hourly'],
        required: true
    }
});

export const jobdb = mongoose.model('Job', jobSchema);
