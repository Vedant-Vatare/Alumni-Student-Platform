require("dotenv").config();
const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const Alumni = require("./models/Alumni");
const bodyParser = require("body-parser");
const cors = require("cors");
const keepAliveRouter = require("./middlewares/keep-alive");
app.use(bodyParser.json());
app.use(cors());

app.use("/keep-alive", keepAliveRouter);

app.use(express.static(path.join(__dirname, "../client")));
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

app.all("*", (req, res, next) => {
  console.log("request from:", req.url);
  next();
});

app.use((err, req, res, next) => {
  console.log(err);
  res.send("An Error Occured from the server side.");
});

function sendPeriodicRequest() {
  // 15 minutes timer
  const timeInterval = 1000 * 60 * 15;
  setTimeout(async () => {
    await fetch(`${process.env.RENDER_API_URL}/keep-alive/`);
    sendPeriodicRequest();
  }, timeInterval);
}
sendPeriodicRequest();

const port = 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));

