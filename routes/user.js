const express = require("express");

const UserController = require("../controllers/userController");
const { userValidator } = require("../helpers/validator");
const router = express.Router();
const controller = new UserController();
router.post("/register", controller.register);
module.exports = router;
