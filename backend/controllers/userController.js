import debug from "debug";
import bcrypt from "bcrypt";
import { freelancerdb, influencerdb, userdb } from "../models/user.js";
import { generateToken } from "../utils/generateToken.js";

const dbgr = debug("development:userController");

export const signup = async (req, res) => {
  try {
    const { name, email, contact, password, role, ...otherFields } = req.body;

    if (!name || !email || !contact || !password || !role) {
      return res.status(400).json({
        message: "Missing required fields",
        success: false
      });
    }

    const existingUser = await userdb.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        message: "User email already exists",
        success: false
      });
    }

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    let user;
    if (role === "freelancer") {
      user = await freelancerdb.create({
        name,
        email,
        contact,
        role,
        password: hash,
        ...otherFields
      });
    } else if (role === "influencer") {
      user = await influencerdb.create({
        name,
        email,
        contact,
        role,
        password: hash,
        ...otherFields
      });
    } else {
      return res.status(400).json({ message: "Invalid role provided", success: false });
    }

    return res.status(201).json({
      message: "User created successfully",
      user,
      success: true
    });

  } catch (error) {
    dbgr("Signup error:", error);
    return res.status(500).json({
      message: "Something went wrong during signup",
      success: false
    });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password, role } = req.body;

    if (!email || !password || !role) {
      return res.status(400).json({
        message: "Missing credentials",
        success: false
      });
    }

    const user = await userdb.findOne({ email });

    if (!user || user.role !== role) {
      return res.status(400).json({
        message: "Invalid email, password, or role",
        success: false
      });
    }

    const result = await bcrypt.compare(password, user.password);
    if (!result) {
      return res.status(400).json({
        message: "Email or password incorrect",
        success: false
      });
    }

    const token = generateToken(user);

    return res
      .status(200)
      .cookie("token", token, {
        maxAge: 24 * 60 * 60 * 1000,
        httpOnly: true,
        sameSite: "strict"
      })
      .json({
        message: `Welcome back, ${user.name}`,
        token,
        user: { ...user.toObject(), password: undefined },
        success: true
      });

  } catch (error) {
    dbgr(error.message);
    return res.status(500).json({
      message: "Server error during login",
      success: false
    });
  }
};

export const logout = async (req, res) => {
  try {
    res.clearCookie("token");
    return res.status(200).json({ message: "Logged out successfully" });
  } catch (error) {
    dbgr(error);
    return res.status(500).json({ message: "Error logging out" });
  }
};

export const getProfile = async (req, res) => {
  try {
    const user = await userdb.findById(req.user._id).select("-password");
    if (!user) {
      return res.status(404).json({ message: "User not found", success: false });
    }

    res.status(200).json({
      message: "User profile fetched successfully",
      user,
      success: true
    });
  } catch (error) {
    dbgr(error);
    res.status(500).json({ message: "Error fetching profile", success: false });
  }
};

export const updateProfile = async (req, res) => {
  try {
    const updatedData = { ...req.body };
    delete updatedData.password;

    const user = await userdb.findByIdAndUpdate(
      req.user._id,
      { $set: updatedData },
      { new: true }
    ).select("-password");

    if (!user) {
      return res.status(404).json({ message: "User not found", success: false });
    }

    res.status(200).json({
      message: "Profile updated successfully",
      user,
      success: true
    });

  } catch (error) {
    dbgr(error);
    res.status(500).json({ message: "Error updating profile", success: false });
  }
};

export const changePassword = async (req, res) => {
  try {
    const { oldPassword, newPassword } = req.body;

    const user = await userdb.findById(req.user._id);
    if (!user) {
      return res.status(404).json({ message: "User not found", success: false });
    }

    const isMatch = await bcrypt.compare(oldPassword, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Old password is incorrect", success: false });
    }

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(newPassword, salt);
    user.password = hash;

    await user.save();

    res.status(200).json({ message: "Password changed successfully", success: true });

  } catch (error) {
    dbgr(error);
    res.status(500).json({ message: "Error changing password", success: false });
  }
};

export const deleteAccount = async (req, res) => {
  try {
    await userdb.findByIdAndDelete(req.user._id);
    res.status(200).json({ message: "Account deleted successfully", success: true });
  } catch (error) {
    dbgr(error);
    res.status(500).json({ message: "Error deleting account", success: false });
  }
};

export const getFreelancers = async (req, res) => {
  try {
    const freelancers = await freelancerdb.find().select("-password");
    res.status(200).json({
      message: "Freelancers fetched successfully",
      freelancers,
      success: true
    });
  } catch (error) {
    dbgr(error);
    res.status(500).json({ message: "Error fetching freelancers", success: false });
  }
};

export const getInfluencers = async (req, res) => {
  try {
    const influencers = await influencerdb.find().select("-password");
    res.status(200).json({
      message: "Influencers fetched successfully",
      influencers,
      success: true
    });
  } catch (error) {
    dbgr(error);
    res.status(500).json({ message: "Error fetching influencers", success: false });
  }
};
