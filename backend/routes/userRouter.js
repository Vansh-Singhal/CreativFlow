import express from 'express';
import {
  login,
  signup,
  logout,
  getProfile,
  updateProfile,
  changePassword,
  deleteAccount,
  getFreelancers,
  getInfluencers
} from '../controllers/userController.js';
import { protect } from '../middlewares/protect.js';

const userRouter = express.Router();

userRouter.post("/register", signup);
userRouter.post("/login", login);

// Protected routes (require authentication)
userRouter.post("/logout", protect, logout);
userRouter.get("/profile", protect, getProfile);
userRouter.put("/profile", protect, updateProfile);
userRouter.put("/change-password", protect, changePassword);
userRouter.delete("/delete-account", protect, deleteAccount);

// Public routes to get users by role
userRouter.get("/freelancers", getFreelancers);
userRouter.get("/influencers", getInfluencers);

export default userRouter;
