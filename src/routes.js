const express = require('express');
const routes = express.Router();
const authMiddleware = require('./middlewares/auth');
const AuthController = require('./controllers/authController');
const GeneralOrientationsController = require('./controllers/generalOrientationsController');

routes.post("/register", AuthController.register);
routes.post("/login", AuthController.login);
routes.get("/profile", authMiddleware, AuthController.profile);
routes.post("/forgot_password", AuthController.forgot_password);
routes.post("/reset_password", AuthController.reset_password);

routes.get("/general_orientations", GeneralOrientationsController.index);
routes.get("/general_orientations/:id", GeneralOrientationsController.show);
routes.post("/general_orientations", GeneralOrientationsController.create);
routes.patch("/general_orientations/:id", GeneralOrientationsController.update);
routes.delete("/general_orientations/:id", GeneralOrientationsController.destroy);

module.exports = routes;