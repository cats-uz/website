const mongoose = require("mongoose");
module.exports = function () {
  mongoose
    .connect(process.env.DB_URL)
    .then(() => console.log("db connected"))
    .catch((err) => console.log(err));
};
