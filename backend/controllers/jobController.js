import debug from "debug";
import { jobdb } from "../models/job.js";
import { userdb } from "../models/user.js";
import mongoose from "mongoose";

const dbgr = debug("development:jobController");

export const createJob = async (req, res) => {
    try {
        const {
            title,
            description,
            budget,
            skills,
            duration,
            location,
            category,
            experience,
            type
        } = req.body;

        if (req.user.role !== "influencer") {
            return res.status(403).json({ message: "Only influencers can create jobs", success: false });
        }

        const job = await jobdb.create({
            id: new mongoose.Types.ObjectId().toString(),
            title,
            description,
            budget,
            client: req.user._id,
            skills,
            duration,
            location,
            category,
            experience,
            type
        });

        res.status(201).json({ message: "Job created successfully", job, success: true});
    } catch (error) {
        dbgr(error);
        res.status(500).json({ message: "Failed to create job", success: false });
    }
};

export const getAllJobs = async (req, res) => {
    try {
        const jobs = await jobdb.find().populate("client", "name email role").sort({ createdAt: -1 });
        res.status(200).json({ message: "Jobs fetched successfully", success: true, jobs });
    } catch (error) {
        dbgr(error);
        res.status(500).json({ message: "Failed to fetch jobs", success: false });
    }
};

export const getJobById = async (req, res) => {
    try {
        const job = await jobdb.findById(req.params.id).populate("client", "name email role");

        if (!job) {
            return res.status(404).json({ message: "Job not found", success: false });
        }

        res.status(200).json({ message: "Job fetched successfully", success: true, job });
    } catch (error) {
        dbgr(error);
        res.status(500).json({ message: "Failed to fetch job", success: false });
    }
};

export const updateJob = async (req, res) => {
    try {
        const job = await jobdb.findById(req.params.id);

        if (!job) {
            return res.status(404).json({ message: "Job not found", success: false });
        }

        if (job.client.toString() !== req.user._id) {
            return res.status(403).json({ message: "Unauthorized to update this job", success: false });
        }

        const updatedJob = await jobdb.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
        res.status(200).json({ message: "Job updated successfully", success: true, job: updatedJob });
    } catch (error) {
        dbgr(error);
        res.status(500).json({ message: "Failed to update job", success: false });
    }
};

export const deleteJob = async (req, res) => {
    try {
        const job = await jobdb.findById(req.params.id);

        if (!job) {
            return res.status(404).json({ message: "Job not found", success: false });
        }

        if (job.client.toString() !== req.user._id) {
            return res.status(403).json({ message: "Unauthorized to delete this job", success: false });
        }

        await jobdb.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "Job deleted successfully", success: true });
    } catch (error) {
        dbgr(error);
        res.status(500).json({ message: "Failed to delete job", success: false });
    }
};

export const applyToJob = async (req, res) => {
    try {
        if (req.user.role !== "freelancer") {
            return res.status(403).json({ message: "Only freelancers can apply to jobs", success: false });
        }

        const job = await jobdb.findById(req.params.id);

        if (!job) {
            return res.status(404).json({ message: "Job not found", success: false });
        }

        // Check if already applied
        if (job.applications.includes(req.user._id)) {
            return res.status(400).json({ message: "You already applied to this job", success: false });
        }

        job.applications.push(req.user._id);
        await job.save();

        res.status(200).json({ message: "Applied to job successfully", success: true });

    } catch (error) {
        dbgr(error);
        res.status(500).json({ message: "Failed to apply to job", success: false });
    }
};

export const getMyPostedJobs = async (req, res) => {
    try {
        if (req.user.role !== "influencer") {
            return res.status(403).json({ message: "Only influencers can access this route", success: false });
        }

        const jobs = await jobdb.find({ client: req.user._id });
        res.status(200).json({ message: "Your posted jobs fetched", success: true, jobs });
    } catch (error) {
        dbgr(error);
        res.status(500).json({ message: "Failed to fetch your jobs", success: false });
    }
};
