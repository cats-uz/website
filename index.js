const express = require("express");
const morgan = require("morgan");
require("dotenv").config();
require("./helpers/dbconnect")();
const app = express();

const HOST = process.env.HOST;
const PORT = process.env.PORT;

const postRoutes = require("./routes/posts.js");
const userRouter = require("./routes/user");

// middleware
app.use(express.json());
app.use(morgan("tiny"));

app.use("/user", userRouter);
app.use("/posts", postRoutes);
const server = app.listen(PORT || 4000);
module.exports = { app, server };
