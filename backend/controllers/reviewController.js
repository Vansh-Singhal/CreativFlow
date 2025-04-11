import debug from "debug";
import { reviewdb } from "../models/review.js";
import { userdb, freelancerdb, influencerdb } from "../models/userModel.js";

const dbgr = debug("development:reviewController");

export const createReview = async (req, res) => {
    try {
        const { receiverId, description, rating } = req.body;

        if (!receiverId || !description || !rating) {
            return res.status(400).json({ message: "Missing required fields", success: false });
        }

        if (req.user._id === receiverId) {
            return res.status(400).json({ message: "You cannot review yourself", success: false });
        }

        // First get the user to check their role
        const receiverUser = await userdb.findById(receiverId);
        if (!receiverUser) {
            return res.status(404).json({ message: "Receiver not found", success: false });
        }

        // Create the review
        const review = await reviewdb.create({
            sender: req.user._id,
            receiver: receiverId,
            description,
            rating
        });

        // Push the review to the receiver's reviews array
        if (receiverUser.role === "freelancer") {
            await freelancerdb.findByIdAndUpdate(receiverId, {
                $push: { reviews: review._id }
            });
        } else if (receiverUser.role === "influencer") {
            await influencerdb.findByIdAndUpdate(receiverId, {
                $push: { reviews: review._id }
            });
        }

        res.status(201).json({ message: "Review submitted", success: true, review });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Failed to submit review", success: false });
    }
};

export const getUserReviews = async (req, res) => {
    try {
        const userId = req.params.id;

        const reviews = await reviewdb
            .find({ receiver: userId })
            .populate("sender", "name email role")
            .sort({ createdAt: -1 });

        res.status(200).json({ message: "Reviews fetched", success: true, reviews });
    } catch (error) {
        dbgr(error);
        res.status(500).json({ message: "Failed to fetch reviews", success: false });
    }
};

export const deleteReview = async (req, res) => {
    try {
        const review = await reviewdb.findById(req.params.id);

        if (!review) {
            return res.status(404).json({ message: "Review not found", success: false });
        }

        if (review.sender.toString() !== req.user._id) {
            return res.status(403).json({ message: "You are not allowed to delete this review", success: false });
        }

        await reviewdb.findByIdAndDelete(req.params.id);

        res.status(200).json({ message: "Review deleted successfully", success: true });
    } catch (error) {
        dbgr(error);
        res.status(500).json({ message: "Failed to delete review", success: false });
    }
};
