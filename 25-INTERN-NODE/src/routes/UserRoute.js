const routes = require("express").Router();
const userController = require("../controllers/UserController");

routes.post("/signup", userController.signup);
routes.post("/login", userController.loginUser);

routes.get("/all", userController.getAllUsers);
routes.get("/user/:id", userController.getUserById);
routes.delete("/delete/:id", userController.deleteUser);

routes.post("/forgot-password", userController.forgotPassword);
routes.post("/reset-password/:token", userController.resetPassword);

module.exports = routes;
