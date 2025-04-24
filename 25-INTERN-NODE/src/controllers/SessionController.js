const Session = require("../models/SessionModel");

// GET all sessions
const getAllSessions = async (req, res) => {
  try {
    const sessions = await Session.find()
      .populate("skillId")
      .populate("facultyId");

    console.log(sessions, "___All Sessions");

    res.status(200).json({
      message: "Sessions retrieved successfully",
      data: sessions,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error fetching sessions",
      error: error.message,
    });
  }
};

// CREATE new session
const createSession = async (req, res) => {
  try {
    const session = await Session.create(req.body);
    res.status(201).json({
      message: "Session created successfully",
      data: session,
    });
  } catch (error) {
    res.status(400).json({
      message: "Failed to create session",
      error: error.message,
    });
  }
};

// DELETE session by ID
const deleteSession = async (req, res) => {
  try {
    const session = await Session.findByIdAndDelete(req.params.id);
    if (!session) {
      return res.status(404).json({ message: "Session not found" });
    }
    res.status(200).json({
      message: "Session deleted successfully",
      data: session,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error deleting session",
      error: error.message,
    });
  }
};

module.exports = {
  getAllSessions,
  createSession,
  deleteSession,
};
