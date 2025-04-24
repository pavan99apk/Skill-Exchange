
// // controllers/notificationController.js
// const Notification = require("../models/Notification");

// exports.createNotification = async (userId, message) => {
//   const notification = new Notification({ userId, message });
//   await notification.save();
// };

// exports.getUserNotifications = async (req, res) => {
//   const notifications = await Notification.find({ userId: req.user._id }).sort({ createdAt: -1 });
//   res.json(notifications);
// };

// exports.markAsRead = async (req, res) => {
//   await Notification.findByIdAndUpdate(req.params.id, { isRead: true });
//   res.json({ message: "Marked as read" });
// };
