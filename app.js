const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const pollController = require("./pollController");

const app = express();

app.set("view engine", "ejs");

app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/polls/:id", pollController.viewPollGetController);
app.post("/polls/:id", pollController.viewPollPostController);
app.get("/polls", pollController.getAllPolls);
app.get("/create", pollController.createPollGetController);
app.post("/create", pollController.createPollPostController);

mongoose
  .connect("mongodb://localhost:27017/express-cc")
  .then(() => {
    app.listen(4545, () => {
      console.log("application running");
    });
  })
  .catch((e) => {
    console.log(e);
  });
