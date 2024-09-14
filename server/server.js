require('dotenv').config();
const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const Alumni = require("./models/Alumni");
const bodyParser = require("body-parser");
app.use(bodyParser.json());
const cors = require("cors");
app.use(cors());

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

app.use(express.static(path.join(__dirname, "../client")));

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client", "index.html"));
});
// API endpoint to add new alumni
app.post("/api/alumni", async (req, res) => {
  try {
    const alumni = new Alumni(req.body);
    await alumni.save();
    console.log("alumni created!.");
    res.status(201).send(alumni);
  } catch (error) {
    res.status(400).send(error);
  }
});

app.get("/api/alumni", async (req, res) => {
  try {
    const alumni = await Alumni.find();
    res.status(200).send(alumni);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.use((err, req, res, next) => {
  console.log(err);
  res.send("An Error Occured from the server side.");
});

const port = 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));
