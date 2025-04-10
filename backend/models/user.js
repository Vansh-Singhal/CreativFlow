import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    contact: {
        type: Number,
        required: true,
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['influencer', 'freelancer'],
        required: true
    },
}, { timestamps: true });

// Freelancer schema extending the User schema
const freelancerSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    rank: {
        type: String,
        enum: ['null', 'bronze', 'silver', 'gold', 'diamond', 'platinum'],
        default: "null",
        required: true
    },
    rating: {
        type: Number,
        default: 5,
        required: true
    },
    reviews: [{
        type: Schema.Types.ObjectId,
        ref: 'Review'
    }],
    skills: {
        type: [String],
        required: true
    },
    description: {
        type: String,
        required: true
    },
    completedJobs: {
        type: Number,
        default: 0
    },
});

// Influencer schema extending the User schema
const influencerSchema = new Schema({
    verified: {
        type: Boolean,
        default: false,
        required: true
    },
    rating: {
        type: Number,
        default: 5,
        required: true
    },
    reviews: [{
        type: Schema.Types.ObjectId,
        ref: 'Review'
    }],
});

// Create models using discriminators
export const userdb = mongoose.model('User', userSchema);
export const freelancerdb = userdb.discriminator('Freelancer', freelancerSchema);
export const influencerdb = userdb.discriminator('Influencer', influencerSchema);