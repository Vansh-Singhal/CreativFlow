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
          message: "Something is missing",
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
          email,
          name,
          contact,
          role,
          password: hash,
          ...otherFields
        });
      } else {
        user = await influencerdb.create({
          email,
          name,
          contact,
          role,
          password: hash,
          ...otherFields
        });
      }
  
      return res.status(201).json({
        message: "User created successfully",
        user,
        success: true
      });
  
    } catch (error) {
      console.error("Signup error:", error);
      return res.status(500).json({
        message: "Something went wrong during signup",
        success: false
      });
    }
  };

export const login = async (req, res) => {
    try {
        let { email, password, role } = req.body;
        if (!password || !email || !role) {
            return res.status(400).json({
                message: "Something is missing",
                success: false
            });
        }

        let user = await userdb.findOne({ email });
        if (!user) {
            return res.status(400).json({
                message: "Email or Password Incorrect",
                success: false
            });
        }

        if (user.role !== role) {
            return res.status(400).json({
                message: "Incorrect Role",
                success: false
            })
        }

        const result = await bcrypt.compare(password, user.password);

        if (!result) {
            return res.status(400).json({
                message: "Email or Password Incorrect",
                success: false
            });
        }

        user = {
            _id: user._id,
            email,
            qr: user.qr,
            balance: user.balance,
            fullname: user.fullname,
            contact: user.contact,
            account_number : user.account_number,
            createdAt : user.createdAt
        }

        let token = generateToken(user);
        res.status(200).json({
            message: `Welcome back, ${user.fullname}`,
            token,
            user,
            success: true
        });

    } catch (error) {
        dbgr(error.message);
    }
}