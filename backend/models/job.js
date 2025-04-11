import mongoose, { Schema } from "mongoose";

const jobSchema = new Schema({
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
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
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
    applications: [{
        type: Schema.Types.ObjectId,
        ref: 'Freelancer'
    }],
    category: {
        type: String,
        required: true
    },
    experience: {
        type: String,
        enum: ['entry', 'intermediate', 'expert', 'any'],
        required: true
    },
    type: {
        type: String,
        enum: ['fixed', 'hourly'],
        required: true
    }
}, { timestamps: true });

export const jobdb = mongoose.model('Job', jobSchema);
