const express = require("express");
const UserController = require("../controllers/userController");
const router = express.Router();
const controller = new UserController();
router.post("/register", controller.register);
router.post('/login', controller.login)
module.exports = router;
