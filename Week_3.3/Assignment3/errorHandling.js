// You have been given an express server which ahs a few endpoints 
// Your task is to 
// 1. Ensure that if there is ever an exception, the ned user sees a status code of 404
// 2. Maintain the errorCount variable whose value should go up
// every time there is exception in any endpoint

const express = require("express");
const app = express();
const port = 3000;

// error handling middleware
app.use(function (err, req, res, next) {
    res.status(404).send({})
});

app.get("/user", function (req, res) {
    throw newError("User not Found");
    res.status(200).json({ name: 'Aditya'}); 
});

app.post("/user", function (req, res) {
    res.status(200).json({ msg: 'Created dummy user'});
});

app.get('/errorCount', function (req, res) {
    res.status(200).json({errorCount});
});

app.listen(port);
module.exports = app;


