import jwt from "jsonwebtoken";
import { userdb } from "../models/user.js";

export const protect = async (req, res, next) => {
  try {
    let token;

    if (req.cookies && req.cookies.token) {
      token = req.cookies.token;
    }

    if (!token) {
      return res.status(401).json({ message: "Unauthorized: No token provided", success: false });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await userdb.findById(decoded._id).select("-password");

    if (!user) {
      return res.status(401).json({ message: "Unauthorized: User not found", success: false });
    }

    req.user = user;
    next();
  } catch (error) {
    console.error("Auth Error:", error);
    return res.status(401).json({ message: "Unauthorized: Invalid token", success: false });
  }
};
