const express = require("express");
const User = require("../models/user");
const { userValidator } = require("../helpers/validator");
const router = express.Router();
router.post("/register", async (req, res) => {
  const { error } = userValidator(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  res.status(200).send("Hello World");
});
module.exports = router;
