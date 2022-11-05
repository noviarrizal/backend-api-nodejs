var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
require("dotenv").config();

const indexRouter = require("./routes/index");
const activityRouter = require("./routes/activity-group");
const todoRouter = require("./routes/todo-api");

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

app.use("/", indexRouter);
app.use("/activity-group", activityRouter);
app.use("/todo-items", todoRouter);

module.exports = app;
