const express = require("express");
const morgan = require("morgan");
const { db, Page, User } = require("./models");

const app = express();

app.use(express.static(__dirname + "/public"));

app.use(express.urlencoded({ extended: false }));

app.get("/", async (req, res, next) => {
  try {
    res.send("HELLO WORLD!");
  } catch (error) {
    next(error);
  }
});

const init = async () => {
  await Page.sync();
  await User.sync();
  // make sure that you have a PORT constant
  const PORT = 1337;
  app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}!`);
  });
};

init();
