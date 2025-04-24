// const Feedback = require("../models/FeedbackModel");

// const getAllFeedbacks = async (req, res) => {
//     const feedbacks = await Feedback.find().populate("sessionId fromUserId toUserId");
//     res.json({ message: "Feedbacks retrieved", data: feedbacks });
// };

// const createFeedback = async (req, res) => {
//     const feedback = await Feedback.create(req.body);
//     res.json({ message: "Feedback added", data: feedback });
// };

// module.exports = { getAllFeedbacks, createFeedback };
const Feedback = require("../models/FeedbackModel");

const getAllFeedbacks = async (req, res) => {
    try {
        const feedbacks = await Feedback.find();
        res.json({ message: "Feedbacks retrieved", data: feedbacks });
    } catch (error) {
        res.status(500).json({ message: "Error retrieving feedbacks", error });
    }
};

const createFeedback = async (req, res) => {
    try {
        const feedback = await Feedback.create(req.body);
        res.json({ message: "Feedback added", data: feedback });
    } catch (error) {
        res.status(500).json({ message: "Error creating feedback", error });
    }
};

module.exports = { getAllFeedbacks, createFeedback };
