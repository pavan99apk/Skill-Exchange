const userModel = require("../models/UserModel");
const skillModel = require("../models/SkillModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const nodemailer = require("nodemailer");

// Signup
const signup = async (req, res) => {
  try {
    const { firstName, lastName, email, password, role, skillsOffered, skillsWanted, rating } = req.body;

    if (await userModel.findOne({ email })) {
      return res.status(400).json({ message: "Email already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    // Convert skill names to ObjectIds
    const offeredSkills = await skillModel.find({ name: { $in: skillsOffered } }).select("_id");
    const wantedSkills = await skillModel.find({ name: { $in: skillsWanted } }).select("_id");

    const newUser = new userModel({
      firstName,
      lastName,
      email,
      password: hashedPassword,
      role,
      skillsOffered: offeredSkills.map(skill => skill._id),
      skillsWanted: wantedSkills.map(skill => skill._id),
      rating: rating || 0,
    });
 
    await newUser.save();
    res.status(201).json({ message: "User created successfully", data: newUser });

  } catch (err) {
    res.status(500).json({ message: "Error creating user", error: err.message });
  }
};

// // Login
// const loginUser = async (req, res) => {
//   try {
//     const { email, password } = req.body;
//     const foundUser = await userModel.findOne({ email }).populate("skillsOffered skillsWanted");

//     if (!foundUser || !(await bcrypt.compare(password, foundUser.password))) {
//       return res.status(401).json({ message: "Invalid credentials" });
//     }

//     const token = jwt.sign({ id: foundUser._id }, process.env.JWT_SECRET, { expiresIn: "1h" });

//     res.status(200).json({ message: "Login successful", token, user: foundUser });

//   } catch (err) {
//     res.status(500).json({ message: "Internal Server Error" });
//   }
// };
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const foundUser = await userModel.findOne({ email }).populate("skillsOffered skillsWanted");

    if (!foundUser || !(await bcrypt.compare(password, foundUser.password))) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign({ id: foundUser._id }, process.env.JWT_SECRET, { expiresIn: "1h" });

    res.status(200).json({
      message: "Login successful",
      token,
      data: {
        _id: foundUser._id,
        name: foundUser.name,
        email: foundUser.email,
        role: foundUser.role, // Ensure this is 'Admin' or 'User'
      },
    });

  } catch (err) {
    console.error("Login error:", err);
    res.status(500).json({ message: "Internal Server Error" });
  }
};


// Get all users
const getAllUsers = async (req, res) => {
  try {
    const users = await userModel.find().populate("skillsOffered skillsWanted");
    res.status(200).json({ message: "Users fetched successfully", data: users });

  } catch (error) {
    res.status(500).json({ message: "Error fetching users", error: error.message });
  }
};

// Get user by ID
const getUserById = async (req, res) => {
  try {
    const user = await userModel.findById(req.params.id).populate("skillsOffered skillsWanted");
    if (!user) return res.status(404).json({ message: "User not found" });

    res.status(200).json({ message: "User fetched successfully", data: user });

  } catch (err) {
    res.status(500).json({ message: "Error fetching user", error: err.message });
  }
};

// Update user
const updateUser = async (req, res) => {
  try {
    const { firstName, lastName, email, password, role, skillsOffered, skillsWanted, rating } = req.body;
    let updatedData = { firstName, lastName, email, role, rating };

    if (skillsOffered) {
      const offeredSkills = await skillModel.find({ name: { $in: skillsOffered } }).select("_id");
      updatedData.skillsOffered = offeredSkills.map(skill => skill._id);
    }

    if (skillsWanted) {
      const wantedSkills = await skillModel.find({ name: { $in: skillsWanted } }).select("_id");
      updatedData.skillsWanted = wantedSkills.map(skill => skill._id);
    }

    if (password) {
      updatedData.password = await bcrypt.hash(password, 10);
    }

    const updatedUser = await userModel.findByIdAndUpdate(req.params.id, updatedData, { new: true });
    if (!updatedUser) return res.status(404).json({ message: "User not found" });

    res.status(200).json({ message: "User updated successfully", data: updatedUser });

  } catch (err) {
    res.status(500).json({ message: "Error updating user", error: err.message });
  }
};

// Delete user
const deleteUser = async (req, res) => {
  try {
    const deletedUser = await userModel.findByIdAndDelete(req.params.id);
    if (!deletedUser) return res.status(404).json({ message: "User not found" });

    res.status(200).json({ message: "User deleted successfully" });

  } catch (err) {
    res.status(500).json({ message: "Error deleting user", error: err.message });
  }
};

// Forgot Password
const forgotPassword = async (req, res) => {
  try {
    const { email } = req.body;
    if (!email) return res.status(400).json({ message: "Email is required" });

    const user = await userModel.findOne({ email });
    if (!user) return res.status(404).json({ message: "User not found" });

    const token = crypto.randomBytes(32).toString("hex");
    const expiry = Date.now() + 1000 * 60 * 60; // 1 hour expiry

    user.resetToken = token;
    user.resetTokenExpiry = expiry;
    await user.save();

    const resetLink = `http://localhost:5173/reset-password/${token}`;

    // Nodemailer setup (Gmail)
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "prajapatibrijesh2104@gmail.com",
        pass: "atmt arhj rnks lmyt", // Use App Password if using Gmail
      },
    });

    await transporter.sendMail({
      from: "your-email@gmail.com",
      to: user.email,
      subject: "Reset Your Password",
      html: `<p>Click <a href="${resetLink}">here</a> to reset your password. This link expires in 1 hour.</p>`,
    });

    res.status(200).json({ message: "Reset link sent to email" });

  } catch (err) {
    console.error("Forgot Password Error:", err);
    res.status(500).json({ message: "Something went wrong", error: err.message });
  }
};

// Reset Password
const resetPassword = async (req, res) => {
  try {
    const { token } = req.params;
    const { password } = req.body;

    const user = await userModel.findOne({
      resetToken: token,
      resetTokenExpiry: { $gt: Date.now() },
    });

    if (!user) return res.status(400).json({ message: "Invalid or expired token" });

    const hashedPassword = await bcrypt.hash(password, 10);
    user.password = hashedPassword;
    user.resetToken = undefined;
    user.resetTokenExpiry = undefined;
    await user.save();

    res.status(200).json({ message: "Password reset successful" });

  } catch (err) {
    console.error("Reset Password Error:", err);
    res.status(500).json({ message: "Something went wrong", error: err.message });
  }
};
module.exports = {
  signup,
  loginUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
  forgotPassword,
  resetPassword
};
