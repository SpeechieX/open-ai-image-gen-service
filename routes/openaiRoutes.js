const express = require("express");
const { generateImage } = require("../controller/openaiController");

const router = express.Router();

router.post("/generateResult", generateImage);

module.exports = router;
