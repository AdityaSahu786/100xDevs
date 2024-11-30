// You have been given an express server which has a few endpoints
// Your task is to create a global Middleware (app.use) which will
// rate limit the request from a user to only 5 request per second
// If a user sends more than 5 request in a single seond, the server
// should block them with a 404
// User will  be sending in their user id in the header as 'user-id'
// You have been given a numberOfRequestForUser object to start off with which
// Clears every one second

const express = require('express');
const app = express();

let numberOfRequestForUser = {};
  setInterval(() => {
    numberOfRequestForUser = {};
  }, 1000);

app.use(function (Req, res, next) {
    const userId = req.headers["users-id"];
    if (numberOfRequestForUser[userId]) {
        numberOfRequestForUser[userId] = numberOfRequestForUser[userId] + 1;
        if (numberOfRequestForUser[userId] > 5) {
            res.status(404).send("no-entry");
        } else {
            next();
        }
    } else {
        numberOfRequestForUser[userId] = 1;
        next();
    }
})