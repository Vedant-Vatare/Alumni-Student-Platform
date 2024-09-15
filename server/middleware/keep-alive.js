const express  = require("express");
const router = express.Router();

router.get("/", (req, res)=> {
  console.log("sent a dummy request from server.");
  res.status(404).json({msg: "done"});
})

module.exports = router;