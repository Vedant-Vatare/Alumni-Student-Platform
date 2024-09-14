const express  = require("express");
const router = express.Router();

router.get("/new", (req, res)=> {
  console.log("got a dummy request.");
  res.send("Done");
})

module.exports = router;