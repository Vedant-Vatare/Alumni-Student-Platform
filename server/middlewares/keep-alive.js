const express  = require("express");
const router = express.Router();

router.get("/", (req, res)=> {
  console.log("got a dummy request from server.");
  res.send("Done");
})

module.exports = router;