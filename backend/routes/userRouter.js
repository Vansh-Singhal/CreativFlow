import express from 'express';
import { signup } from '../controllers/userController.js';
const userRouter = express.Router();

userRouter.post("/register", signup);
// userRouter.post("/login", userLogin);
// userRouter.get("/get/balance", isLoggedIn, getbalance);
// userRouter.get("/logout", isLoggedIn, logoutUser);

export default userRouter;