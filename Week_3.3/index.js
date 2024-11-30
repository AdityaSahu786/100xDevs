const express = require("express");
const app = express();
const port = 3000;

function ticketChecker(req, res, next) {
    const ticket = req.query.ticket;
    if(ticket == "free") {
        next();
    } else {
        res.status(403).send("Access denied");
    }
}

app.use(ticketChecker);

app.get("/ride1", function () {
    res.send("You rode the first ride");
})

app.get("/ride2", function () {
    res.send("You rode the second ride");
})

app.get("/ride3", function () {
    res.send("You rode the first ride!");
})

app.listen(port);