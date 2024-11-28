const express = require("express");
const app = express();

app.use(express.json());
app.post("/health-checkup", function(req, res) {
    //do something with kidney here
    const kidneys = req.body.kidneys;
    const kidneyLength = kidneys.length;

    res.send("You have" + kidneyLength + "kidneys");
})


app.listen(3000);