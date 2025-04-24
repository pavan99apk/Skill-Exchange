require("dotenv").config(); // Load environment variables
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

// Express object
const app = express();
app.use(cors());
app.use(express.json()); // Accept JSON requests

// Import routes
const roleRoutes = require("./src/routes/RoleRoute");
const userRoutes = require("./src/routes/UserRoute");
const skillRoutes = require("./src/routes/SkillRoute");
const sessionRoutes = require("./src/routes/SessionRoute");
const adminRoutes = require("./src/routes/AdminRoute");
const feedbackRoutes = require("./src/routes/FeedbackRoute");
// const notificationRoutes = require("./src/routes/NotificationRoute");

// Use routes
app.use("/api/roles", roleRoutes);
app.use("/api/users", userRoutes);
app.use("/api/skills", skillRoutes);
app.use("/api/sessions", sessionRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/feedbacks", feedbackRoutes);
// app.use("/api/notifications",notificationRoutes);

// Database connection
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("✅ Database connected successfully"))
  .catch((err) => console.error("❌ Database connection error:", err));

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
