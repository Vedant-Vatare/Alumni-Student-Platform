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
  .connect(
    "mongodb+srv://vedant_v:N7oabc8sXAeuit4H@cluster0.ivdbny1.mongodb.net/alumniDB"
  )
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));


app.all("*", (req, res, next) => {
  console.log("request from:", req.url);
  next()
});

app.use((err, req, res, next) => {
  console.log(err);
  res.send("An Error Occured from the server side.");
});


function sendDummyRequests() {
  // 15 minutes timer
  const timeInterval = 1000;  
  console.log(`${process.env.RENDER_API_URL}`)
  console.log("preparing to send dummy req.")
  setTimeout(async ()=> {
    const dummyRequest = await fetch(`${process.env.RENDER_API_URL}/keep-alive/new`);
    sendDummyRequests()
  }, timeInterval)
}

sendDummyRequests()
const port = 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));
