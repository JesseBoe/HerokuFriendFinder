const express = require('express');
const router = express.Router();
var path = require('path');

router.get("/survey", function (req, res) {
    //user gets survey.html
    res.sendFile(path.join(__dirname, "../public/survey.html"));
});

router.get("/", function (req, res) {
    //user gets home.html
    res.sendFile(path.join(__dirname, "../public/home.html"));
});

module.exports = router;