const express = require("express");
const app = express();
const port = 3000;

function isOldEnoughMiddleware (req, res, next)  {
    const age = req.query.age;
    if ( age >= 14) {
        next();
    } else {
        res.json ({
            msg: "You are not eligible for ride"
        })
    }
}

app.get("/ride1", isOldEnoughMiddleware, function (req, res) {
     res.json({
        msg: "You have succesfully riden ride 1!"
     })
})

app.listen(port);