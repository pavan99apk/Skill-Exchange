const adminRoutes = require("express").Router();
const adminController = require("../controllers/AdminController");

adminRoutes.get("/admins", adminController.getAllAdmins);
adminRoutes.post("/admin", adminController.createAdmin);

module.exports = adminRoutes;
