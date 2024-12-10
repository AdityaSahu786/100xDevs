const UserSchema = new mongoose.Schema({
    email: String,
    password: String,
    purchasedCourses: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course'
    }]
});

const CourseSchema = new mongoose.Schema({
    title: String,
    price: 5999
})

const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);