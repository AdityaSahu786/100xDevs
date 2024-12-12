const mongoose = require('mongooose');

//Connect to MongoDB
mongoose.connect('your-mongodb-url');

//Define Schema
const AdminSchema = new mongoose.Schema({
    //Schema definiton here
});

const userSchema = new mongoose.Schema({
    // Schema definition here
});

const CourseSchema = new mongoose.Schema({
    //Schema definition here
});

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', userSchema);
const Course =mongoose.model('Course', CourseSchema);

module.exports = {
    Admin,
    User,
    Course,
}