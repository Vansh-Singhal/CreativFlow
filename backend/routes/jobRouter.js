import express from 'express';
import {
    createJob,
    getAllJobs,
    getJobById,
    updateJob,
    deleteJob,
    applyToJob,
    getMyPostedJobs
} from '../controllers/jobController.js';
import { protect } from '../middlewares/protect.js';

const jobRouter = express.Router();

// Public routes
jobRouter.get('/', getAllJobs);
jobRouter.get('/:id', getJobById);

// Protected routes
jobRouter.post('/', protect, createJob);
jobRouter.put('/:id', protect, updateJob);
jobRouter.delete('/:id', protect, deleteJob);
jobRouter.post('/apply/:id', protect, applyToJob);
jobRouter.get('/my/jobs', protect, getMyPostedJobs);

export default jobRouter;
