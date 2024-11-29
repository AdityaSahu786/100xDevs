const mongoose = require("mongoose");
const express = require("express");
const app = express();

mongoose.connect("URL");


const User = mongoose.model('Users', { name: String, email: String, password: String
});

app.post("/signup", async function (req, res) {
    const username = req.body.username;
    const passsword = req.body.password;
    const name = req.body.name;
    
    
const existingUser = await User.findOne({email: username});
if(existingUser){
   return res.status(400).send("Username already exsist")  
};

    const user = new User ({
        name: name,
        email: username,
        password: password
    });
    user.save();
})
app.listen(3000);