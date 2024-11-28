const express = require("express");
const app = express();
const zod = require("zod");

// const schema = zod.array(zod.number());
//
// {
// email: string => email
// password: atleast 8 letters
// country: "IN", "US"
// }

const schema = zod.object({
    email: zod.string(),
    password: zod.string(),
    country: zod.literal("IN").or(zod.literal("US")),
    kidney: zod.array(zod.number())
})

app.use(express.json());

app.post("/health-checkup", function(req, res) {
    // kidneys = [1, 2]
    const kidneys = req.body.kidneys;
    const response = schema.safeParse(kidneys)
    if (!response.success) {
        res.status(411).json({
            msg: "Input is invalid"
        })
    } else {
        res.send({
            response
        })
    }
})

app.listen(3000);