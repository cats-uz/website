const { userValidator } = require("../helpers/validator");
const User = require("../models/user");
class UserController {
  /**
   * @param {import('mongoose').Request} req
   * @param {import('mongoose').Response} res
   * @returns {Promise<void>}
   */
  async register(req, res) {
    const { error } = userValidator(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    const newUser = new User(req.body);

    process.env.NODE_ENV !== "test" && (await newUser.save());
    res.status(201).send("Created!");
  }
}
module.exports = UserController;
