const express = require("express");
const jwt = require("jsonwebtoken");
const jwtPassword = "123456";

const app = express();
app.use(express.json());

const ALL_USERS = [
    {
        username: "Aditya",
        password: "1234",
        name: "Aditya Sahu"
    },
    {
        username: "Bishal",
        password: "56789",
        name: "Bishal Kashyap"
    },
    {
        username: "Sanmrish",
        password: "5678908",
        name: "Sanmrish Boruah"
    },
    {
        username: "Manish",
        password: "5632789",
        name: "Manish Deori"
    },
    {
        username: "Deepraj",
        password: "5678923",
        name: "Deepraj Saikia"
    },
];

function userExists(username, password) {
    // Write logic to return true or false if this user exsists
    // in ALL_USERS array
    // hard todo - try to use the find function in js.

    let userExists = false;
    for(let i =0; i<ALL_USERS.length; i++) {
        if(ALL_USERS[i].username == username && ALL_USERS[i].password == password) {
            userExists = true;
        }
    }
    return userExists;
}

app.post("/signin", function (req, res) {
    const username = req.body.username;
    const password = req.body.password;

    if(!userExists (username, password)) {
        return res.status(403).json({
            msg: "User doesnt exists in our memory db"
        })
    }
    var token = jwt.sign({ username: username }, jwtPassword)
      return res.json({
        token
      })
})
app.listen(3000);

