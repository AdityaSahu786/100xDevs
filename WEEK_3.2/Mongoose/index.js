const mongoose = require("mongoose");

mongoose.connect("URL")

const User = mongoose.model('Users', {name: String, email: String, password: String});

const user = new User({name: 'Aditya Sahu', email: 'sahuadi786183@gmail.com', password: '1234'});

user.save();