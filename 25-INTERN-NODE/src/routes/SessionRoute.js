const sessionRoutes = require("express").Router();
const sessionController = require("../controllers/SessionController");

sessionRoutes.get("/session", sessionController.getAllSessions);
sessionRoutes.get("/active", sessionController.getAllSessions);
sessionRoutes.post("/session", sessionController.createSession);
sessionRoutes.delete("/session/:id", sessionController.deleteSession);

module.exports = sessionRoutes;

