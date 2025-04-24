const feedbackRoutes = require("express").Router();
const feedbackController = require("../controllers/FeedbackController");

feedbackRoutes.get("/feedbacks", feedbackController.getAllFeedbacks);
feedbackRoutes.get("/pending",feedbackController.getAllFeedbacks);
feedbackRoutes.post("/feedback", feedbackController.createFeedback);

module.exports = feedbackRoutes;
