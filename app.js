require("dotenv").config();

const express = require("express");
const app = express();
const authRouter = require("./routes/loginauth");
const passport_setup = require("./config/passport");
const mongoose = require("mongoose");

mongoose.connect(
  process.env.DB_URL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  },
  () => {
    console.log("DB is connected");
  }
);

app.use("/auth", authRouter);
app.use("/", (req, res) => {
  res.send("Home");
});
app.listen(process.env.PORT, () => {
  console.log("server is listening on port 3000");
});
