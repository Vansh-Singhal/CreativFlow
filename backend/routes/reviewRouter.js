import express from 'express';
import {
    createReview,
    getUserReviews,
    deleteReview
} from '../controllers/reviewController.js';
import { protect } from '../middlewares/protect.js';

const reviewRouter = express.Router();

reviewRouter.post('/', protect, createReview);
reviewRouter.get('/:id', getUserReviews);
reviewRouter.delete('/:id', protect, deleteReview);

export default reviewRouter;
